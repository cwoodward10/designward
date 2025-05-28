import { DwHtmlWebComponent } from "./dw-component";
import { getFocusableChildren, trapTabKey } from "./utilities";

export class DwCustomDialog extends DwHtmlWebComponent {
    static ComponentName = 'dw-custom-dialog';

    _buttonSelector: string;
    _closeSelector: string;

    _dialog: HTMLElement | null;
    _button: HTMLElement | null;
    _closeButtons: NodeListOf<HTMLElement> | null;

    _previouslyFocused: Element | null;

    _useToggle: boolean = false;
    _isShown: boolean = false;

    constructor() {
        super();

        this.addShadowRootFallback(`
            <style>
                :host {
                    --duration: var(--animation-duration, 250ms);
                    --easing: var(--animation-easing, ease-out);
                }
                ::slotted([role=dialog]) {
                    position: fixed;
                    box-sizing: border-box;
                    z-index: 1000;
                    background-color: var(--color-background);

                    border-radius: 0.25rem;
                    padding: 1.5rem;

                    opacity: 0;
                    transition: 
                        opacity var(--duration) var(--easing),
                        display var(--duration) var(--easing) allow-discrete;
                        overlay var(--duration) var(--easing) allow-discrete;
                }
                ::slotted([role=dialog]:not([hidden])) {
                    opacity: 1;
                }

                :host([fullscreen="true"]) ::slotted([role=dialog]) {
                    border: none;
                    opacity: 1;
                    translate: 0 0;
                    transition: 
                        opacity var(--duration) var(--easing),
                        translate var(--duration) var(--easing),
                        display var(--duration) var(--easing) allow-discrete;
                        overlay var(--duration) var(--easing) allow-discrete;;
                }

                @starting-style {
                    ::slotted([role=dialog]:not([hidden])) {
                        opacity: 0;
                    }
                    :host([fullscreen="true"]) ::slotted([role=dialog]:not([hidden])) {
                        opacity: 0.5;
                        translate: 0 25%;
                    }
                }

                ::slotted([role=dialog]) {
                    top: 0;
                    left: 0;
                    height: 100dvh;
                    width: 100dvw;
                    max-height: none;
                    max-width: none;
                }
                :host:not([fullscreen="true"])) ::slotted([role=dialog]) {
                    top: 50%;
                    left: 50%;
                    height: fit-content;
                    width: fit-content;
                    translate: -50% -50%;
                }
            </style>
            <slot></slot>
        `)


        this._handleShow = this._handleShow.bind(this);
        this._handleHide = this._handleHide.bind(this);
        this._handleToggle = this._handleToggle.bind(this);

        this._buttonSelector = this.getAttribute('button-selector') || ':scope>button';
        this._closeSelector = this.getAttribute('close-selector') || ':is(button[data-dialog-close], button[data-dialog-cancel])';
    }

    _init(): void {
        super._init();

        this._dialog = this.querySelector('[role=dialog]');
        if (!this._dialog) {
            throw new Error('The custom dialog component requires a top-level component with the role set to dialog');
        }
        this._setDialogDefaults(this._dialog);

        this._button = this.querySelector(this._buttonSelector);
        this._useToggle = this._button?.getAttribute('data-istoggle') !== null || false;
        if (this._useToggle) {
            this._button?.addEventListener('click', this._handleToggle);
        } else {
            this._closeButtons = this.querySelectorAll(this._closeSelector);
            this._closeButtons.forEach(b => {
                b.addEventListener('click', this._handleHide);
            })
        }
    }

    _setDialogDefaults(dialog: HTMLElement) {
        dialog.getAttribute('hidden') === 'true' || dialog.setAttribute('hidden', 'true');
        dialog.getAttribute('aria-modal') === 'true' || dialog.setAttribute('aria-modal', 'true');

        if (!dialog.getAttribute('aria-label') && !dialog.getAttribute('aria-labelledby')) {
            console.warn('Provide an aria-label or aria-labelledby for dialog');
            dialog.ariaLabel = 'a custom dialog';
        }
    }

    _handleShow() {
        this._previouslyFocused = document.activeElement;

        this._isShown = true;
        this._dialog?.removeAttribute('hidden');        
        
        document.addEventListener('keydown', this._handleKeyDown);
        document.body.addEventListener('focus', this._maintainFocus, true);

        this._moveFocusIn();
    } 

    _handleHide() {
        this._isShown = false;
        this._dialog?.setAttribute('hidden', 'true');

        document.addEventListener('keydown', this._handleKeyDown);
        document.body.removeEventListener('focus', this._maintainFocus, true);

        if (this._previouslyFocused && (this._previouslyFocused as any).focus) {
            (this._previouslyFocused as any).focus();
        }
    }

    _handleKeyDown(event: KeyboardEvent) {
        if (!this.initialized || !this._dialog) {
            return;
        }

        switch (event.key) {
            case 'Escape': 
                this._handleHide();
                return;
            
            case 'Tab':
                trapTabKey(this._dialog, event);
                return;
        }
    }

    _handleToggle() {
        if (this._isShown) {
            this._handleHide();
        } else {
            this._handleShow();
        }
    }

    _maintainFocus(event: FocusEvent) {
        const isInDialog = event.target instanceof HTMLElement && event.target.closest('[aria-modal="true"]');
        if (!isInDialog) {
            this._moveFocusIn();
        }
    }

    _moveFocusIn() {
        if (!this._dialog) {
            return;
        }

        const target: HTMLElement =
            this._dialog.querySelector('[autofocus]') ||
            getFocusableChildren(this._dialog)[0]

        if (target) {
            target.focus();
        }
    }
}