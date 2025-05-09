import { DwHtmlWebComponent } from "./dw-component";
import { debounce } from "./utils";

type AnimationOptions = {
    duration: number,
    easing: string,
    internals: ElementInternals | null
}

class AnimateDetails {
    details: HTMLDetailsElement;
    summary: HTMLElement | null;
    content: HTMLElement | null;

    isClosing: boolean;
    isOpening: boolean;

    private _openHeight: number;
    private _closedHeight: number;

    private _animation: Animation | null;

    private _options: AnimationOptions;

    private _resizeObserver: ResizeObserver;

    constructor(
        details: HTMLDetailsElement, 
        options: AnimationOptions = {
            duration: 400,
            easing: 'ease-out',
            internals: null
        }
    ) {
        this.details = details;

        this._options = options;

        this.summary = this.details.querySelector('summary');
        if (!this.summary) {
            throw new Error('DwDetails requires a Details element containing a Summary element.')
        }

        if (!this.summary.nextElementSibling || !(this.summary.nextElementSibling instanceof HTMLElement)) {
            throw new Error('DwDetails requires content to animate on.')
        }
        this.content = this.summary.nextElementSibling as HTMLElement;

        this._cacheHeights = debounce(this._cacheHeights.bind(this), 100);
        this._resizeObserver = new ResizeObserver(() => this._cacheHeights());
        this._resizeObserver.observe(this.details);

        this._onclick = this._onclick.bind(this);
        this.summary.addEventListener('click', this._onclick);
    }

    setDuration(value: string | null) {
        if (value == null || Number.isNaN(value)) {
            return;
        }
        this._options.duration = Number.parseInt(value);
    }

    setEasing(value: string | null) {
        if (!value) {
            return;
        }

        this._options.easing = value;
    }

    dismount() {
        this.summary?.removeEventListener('click', this._onclick);
        this._resizeObserver.disconnect();
    }

    private _cacheHeights() {
        if (!this.content) {
            throw new Error('DwDetails requires content to animate on.');
        }

        if (this.details.open) {
            this._openHeight = this.details.offsetHeight;
            this._closedHeight = this.details.offsetHeight - this.content.offsetHeight;
        } else {
            this._openHeight = this.details.offsetHeight + this.content.offsetHeight;
            this._closedHeight = this.details.offsetHeight;
        }
    }

    private _prefersReducedMotion() {
		return "matchMedia" in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	}

    private _createAnimation(startHeight: number, endHeight: number) {
        const p = {
            height: [`${startHeight}px`, `${endHeight}px`],
        }
        const o = {
            duration: this._options.duration,
            easing: this._options.easing
        }

        return this.details.animate(p, o);
    }

    private _performOpen() {
        if (!this.summary || !this.content) {
            return;
        }

        this.isOpening = true;
        this._options.internals?.states.add('opening');

        if (this._animation) {
            this._animation.cancel();
        }

        this._animation = this._createAnimation(this._closedHeight, this._openHeight);
        
        this._animation.onfinish = () => {
            this.details.open = true;

            this._options.internals?.states.delete('opening');
            this.isOpening = false;
            this.details.style.height = '';
            this.details.style.overflow = '';

        }
        this._animation.oncancel = () => { 
            this.isOpening = false ;
            this._options.internals?.states.delete('opening');
        };
    }

    private _open() {
        this.details.style.height = `${this.details.offsetHeight}px`;
        this.details.open = true;

        window.requestAnimationFrame(() => this._performOpen());
    }

    private _close() {
        if (!this.summary || !this.content) {
            return;
        }

        this.isClosing = true;
        this._options.internals?.states.add('closing');

        
        if (this._animation) {
            this._animation.cancel();
        }
        
        this._animation = this._createAnimation(this._openHeight, this._closedHeight);
        
        this._animation.onfinish = () => {
            this.details.open = false;

            this._options.internals?.states.delete('closing');
            this.isClosing = false;
            this.details.style.overflow = '';
        }
        this._animation.oncancel = () => { 
            this.isClosing = false;
            this._options.internals?.states.delete('closing');
        };
    }

    private _handleSwitchState() {
        this.details.style.overflow = 'hidden';

        if (this.isClosing || !this.details.open) {
            this._open();
        } else if (this.isOpening || this.details.open) {
            this._close();
        }
    }

    private _onclick(event: MouseEvent) {
        // do nothing if the click is inside of a link
		if((event.target && (event.target as Element).closest("a[href]")) || !this._prefersReducedMotion()) {
			return;
		}

        event.preventDefault();
        this._handleSwitchState();
    }
}

const PROP_ANIMATE = 'dw-animate';
const PROP_DURATION = 'dw-animation-duration';
const PROP_EASING = 'dw-animation-easing';
export class DwDetails extends DwHtmlWebComponent {
    static ComponentName  = 'dw-details';
    static observedAttributes = [PROP_ANIMATE, PROP_DURATION, PROP_EASING];

    details: HTMLDetailsElement | null;

    useAnimation: AnimateDetails | null = null;

    constructor() {
        super();
    }

    init() {
        super.init();

        this.details = this.querySelector(':scope details');

        if (!this.details) {
            throw new Error('DwDetails requires a Details element containing a Summary element.')
        }

        if (this.getAttributeValue(PROP_ANIMATE)) {
            this._mountAnimation();
        }
    }

    private _mountAnimation() {
        if (this.details && !this.useAnimation) {
            const d = this.getAttribute(PROP_DURATION);
            const o = {
                duration:  d == null || Number.isNaN(d) ? 500 : Number.parseInt(d),
                easing: this.getAttribute(PROP_EASING) ?? 'ease-out',
                internals: this._internals
            }
            this.useAnimation = new AnimateDetails(this.details, o);
        }
    }

    private attributeChangedCallback(name: string, oldValue: any, newValue: any) {
        if (!this.initialized) {
            return;
        }

        switch (name) {
            case PROP_ANIMATE:
                if (newValue === 'true') {
                    this._mountAnimation();
                } else {
                    this.useAnimation?.dismount();
                    this.useAnimation = null;
                }
                return;
            
            case PROP_DURATION: 
                this.useAnimation?.setDuration(newValue);
                return;

            case PROP_EASING: 
                this.useAnimation?.setEasing(newValue);
                return;
        }
    }
}