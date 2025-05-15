import { DwHtmlWebComponent } from "./dw-component";
import { debounce } from "./utils";

type AnimationOptions = {
    duration: number,
    easing: string,
    internals: ElementInternals
}

class AnimationController {
    _details: HTMLDetailsElement;
    _summary: HTMLElement | null;
    _content: HTMLElement | null;

    _isClosing: boolean;
    _isOpening: boolean;

    _openHeight: number;
    _closedHeight: number;

    _animation: Animation | null;

    _options: AnimationOptions;

    _resizeObserver: ResizeObserver;

    constructor(
        details: HTMLDetailsElement, 
        options: AnimationOptions
    ) {
        this._details = details;
        this._options = options;

        this._summary = this._details.querySelector('summary');
        if (!this._summary) {
            throw new Error('DwDetails requires a Details element containing a Summary element.')
        }
        if (!this._summary.nextElementSibling || !(this._summary.nextElementSibling instanceof HTMLElement)) {
            throw new Error('DwDetails requires content to animate on. That content must be an HTML element in order to derive an offsetHeight')
        }
        this._content = this._summary.nextElementSibling as HTMLElement;

        this._cacheHeights = debounce(this._cacheHeights.bind(this), 100);
        this._resizeObserver = new ResizeObserver(() => this._cacheHeights());
        this._resizeObserver.observe(this._details);

        this._summary.addEventListener('click', this._onclick.bind(this));
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
        this._summary?.removeEventListener('click', this._onclick);
        this._resizeObserver.disconnect();
    }

    _cacheHeights() {
        if (!this._content) {
            throw new Error('DwDetails requires content to animate on.');
        }

        if (this._details.open) {
            this._openHeight = this._details.offsetHeight;
            this._closedHeight = this._details.offsetHeight - this._content.offsetHeight;
        } else {
            this._openHeight = this._details.offsetHeight + this._content.offsetHeight;
            this._closedHeight = this._details.offsetHeight;
        }
    }

    _prefersReducedMotion() {
		return "matchMedia" in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	}

    _createAnimation(startHeight: number, endHeight: number) {
        const f = {
            height: [`${startHeight}px`, `${endHeight}px`],
        }
        const o = {
            duration: this._options.duration,
            easing: this._options.easing
        }

        return this._details.animate(f, o);
    }

    _performOpen() {
        if (!this._summary || !this._content) {
            return;
        }

        this._isOpening = true;
        this._options.internals?.states.add('opening');

        if (this._animation) {
            this._animation.cancel();
        }

        this._animation = this._createAnimation(this._closedHeight, this._openHeight);
        
        this._animation.onfinish = () => {
            this._details.open = true;

            this._options.internals?.states.delete('opening');
            this._isOpening = false;
            this._details.style.height = '';
            this._details.style.overflow = '';

        }
        this._animation.oncancel = () => { 
            this._isOpening = false ;
            this._options.internals?.states.delete('opening');
        };
    }

    _open() {
        this._details.style.height = `${this._details.offsetHeight}px`;
        this._details.open = true;

        window.requestAnimationFrame(() => this._performOpen());
    }

    _close() {
        if (!this._summary || !this._content) {
            return;
        }

        this._isClosing = true;
        this._options.internals?.states.add('closing');

        
        if (this._animation) {
            this._animation.cancel();
        }
        
        this._animation = this._createAnimation(this._openHeight, this._closedHeight);
        
        this._animation.onfinish = () => {
            this._details.open = false;

            this._options.internals?.states.delete('closing');
            this._isClosing = false;
            this._details.style.overflow = '';
        }
        this._animation.oncancel = () => { 
            this._isClosing = false;
            this._options.internals?.states.delete('closing');
        };
    }

    _handleSwitchState() {
        this._details.style.overflow = 'hidden';

        if (this._isClosing || !this._details.open) {
            this._open();
        } else if (this._isOpening || this._details.open) {
            this._close();
        }
    }

    _onclick(event: MouseEvent) {
        // do nothing if the click is inside of a link
		if((event.target && (event.target as Element).closest("a[href]")) || !this._prefersReducedMotion()) {
			return;
		}

        event.preventDefault();
        this._handleSwitchState();
    }
}

const PROP_ANIMATE = 'animate';
const PROP_DURATION = 'animation-duration';
const PROP_EASING = 'animation-easing';
export class DwDetails extends DwHtmlWebComponent {
    static ComponentName  = 'dw-details';
    static observedAttributes = [PROP_ANIMATE, PROP_DURATION, PROP_EASING];

    details: HTMLDetailsElement | null;

    animation: AnimationController | null = null;

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

    _mountAnimation() {
        if (this.details && !this.animation) {
            const d = this.getAttribute(PROP_DURATION);
            const o = {
                duration:  d == null || Number.isNaN(d) ? 500 : Number.parseInt(d),
                easing: this.getAttribute(PROP_EASING) ?? 'ease-out',
                internals: this._internals
            }
            this.animation = new AnimationController(this.details, o);

        }
    }

    attributeChangedCallback(name: string, oldValue: any, newValue: any) {
        if (!this.initialized) {
            return;
        }

        switch (name) {
            case PROP_ANIMATE:
                if (newValue === 'true') {
                    this._mountAnimation();
                } else {
                    this.animation?.dismount();
                    this.animation = null;
                }
                return;
            
            case PROP_DURATION: 
                this.animation?.setDuration(newValue);
                return;

            case PROP_EASING: 
                this.animation?.setEasing(newValue);
                return;
        }
    }
}