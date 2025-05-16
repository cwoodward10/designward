import { DwHtmlWebComponent, DwWebComponent } from "./dw-component";

/** Prop name to set on component to control open/closed state */
const PROPNAME_STATE = 'state';
/** CSS :state() value for when hamburger is closed. Open by default */
const STATE_NAME = 'open';

export class DwHamburger extends DwWebComponent{
    static ComponentName = 'dw-hamburger';
    static observedAttributes = [PROPNAME_STATE];

    _button: HTMLButtonElement | null;
    _clickCallback: (e: Event) => void = (e: Event) => {
        const current = this.getAttribute(PROPNAME_STATE);
        this.setAttribute(PROPNAME_STATE, current === 'open' ? 'closed' : 'open');
    }

    constructor() {
        super();
        
        const height = this.getAttribute('height') || '40';
        const width = this.getAttribute('width') || '40';
        const color = this.getAttribute('color') || 'white';
        const duration = this.getAttribute('duration') || 300;

        const sr = `
                <style>
                    :host {
                        --ham-height: var(--height, ${height}px);
                        --ham-width: var(--width, ${width}px);
                        --ham-color: var(--color, ${color});
                        --ham-bar-offset: var(--offset, calc(${height}px * 0.35));
                        --a-duration: var(--duration, ${duration}ms);
                        --a-duration-half: calc(var(--a-duration) / 2);
                        --a-delay: calc((var(--a-duration) / 2) * 1.1);

                        width: fit-content;
                        height: fit-content;
                    }

                    button {
                        height: var(--ham-height);
                        width: var(--ham-width);

                        position: relative;

                        border: transparent 2px solid;
                        border-radius: 100%;

                        background-color: transparent;
                        &:hover {
                            background-color: transparent;
                        }

                        transition: border-color 300ms ease-out;
                    }
                    div {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        translate: -50% -50%;

                        height: 2px;
                        width: 100%;

                        background: var(--ham-color);
                        transform-origin: 50% 50%;
                        
                        transition-property: width, translate, rotate;
                        transition-duration: var(--a-duration-half), var(--a-duration-half);
                        transition-delay: 0ms, var(--a-delay), 0ms;
                        transition-timing-function: linear, ease-out;
                    }
                    div:first-child {
                        width: 66.67%;
                        translate: -50% calc(-50% - var(--ham-bar-offset))
                    }
                    div:last-child {
                        width: 66.67%;
                        translate: -50% calc(-50% + var(--ham-bar-offset))
                    }
                    :host(:state(${STATE_NAME})) {
                        button {
                            border-color: var(--ham-color);
                        }

                        div {
                            transition-delay: 0ms, 0ms, var(--a-delay);
                        }

                        div:first-child,
                        div:last-child {
                            width: 60%;
                            translate: -50% 0%;
                        }
                        div:first-child {
                            rotate: 45deg;
                        }
                        div:nth-child(2) {
                            width: 0%;
                        }
                        div:last-child {
                            rotate: -45deg;
                        }
                    }
                </style>
                <button aria-label='hamburger' part='button'>
                    <div part='one'></div>
                    <div part='two'></div>
                    <div part='three'></div>
                </button>
        `
        const shadow = this.addShadowRootFallback(sr, 'open', true);

        this._button = shadow.querySelector('button');
        if (!this._button) {
            throw new Error('Error adding button to shadow root')
        }

        this._clickCallback.bind(this);
        this._button.addEventListener('click', this._clickCallback);
    }

    attachClickCallback(callback: (e:Event) => void) {
        this.removeEventListener('click', this._clickCallback);

        this._clickCallback = callback;
        this._button?.addEventListener('click', callback);
    }

    attributeChangedCallback(name: string, oldValue: any, newValue: any) {
        switch (name) {
            case PROPNAME_STATE:
                if (newValue === STATE_NAME) {
                    this._internals.states.add(STATE_NAME);
                } else {
                    this._internals.states.delete(STATE_NAME);
                }
                break;
        }
        console.log(newValue, this._internals.states)
    }
}