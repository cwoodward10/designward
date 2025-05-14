import { DwHtmlWebComponent } from "./dw-component";

const DIALOG_TYPES = ['popover', 'modal'];
export class DwDialog extends DwHtmlWebComponent {
    static ComponentName = 'dw-dialog';

    _type: string;

    _button: HTMLButtonElement | null;
    _dialog: HTMLDialogElement | null;
    _closeButtons: NodeListOf<HTMLButtonElement> | null;

    _openHandler: null | (() => void) = null;
    _closeHandler: null | ((e: CloseEvent) => void) = null;
    _cancelHandler: null | ((e: Event) => void) = null;

    constructor() {
        super({
            shadowRootFallback: `
                <style>
                    ::slotted(dialog) {
                        padding: 1.5rem;
                        opacity: 0;
                        transition: opacity 250ms ease-out allow-discrete;
                    }
                    ::slotted(dialog[open]) {
                        opacity: 1;
                    }

                    :host([fullscreen="true"]) ::slotted(dialog) {
                        border: none;
                        opacity: 1;
                        translate: 0 0;
                        transition: 
                            opacity 350ms ease-out allow-discrete,
                            translate 350ms ease-out allow-discrete;
                    }

                    @starting-style {
                        ::slotted(dialog[open]) {
                            opacity: 0;
                        }
                        :host([fullscreen="true"]) ::slotted(dialog[open]) {
                            opacity: 0.5;
                            translate: 0 25%;
                        }
                    }

                    :host(:not([type="popover"])) ::slotted(dialog) {
                        top: 0;
                        left: 0;
                        height: 100dvh;
                        width: 100dvw;
                        max-height: none;
                        max-width: none;
                    }
                    :host(:not([type="popover"]):not([fullscreen="true"])) ::slotted(dialog) {
                        top: 50%;
                        left: 50%;
                        height: fit-content;
                        width: fit-content;
                        translate: -50% -50%;
                    }
                </style>
                <slot></slot>
            `
        });

        const proposedType = this.getAttribute('type');
        this._type = proposedType && DIALOG_TYPES.includes(proposedType) ? 
            proposedType :  
            'modal';
    }

    addEventHandler(
        eventName: 'open' | 'close' | 'cancel',
        handler: ((...args: any[]) => void)
    ) {
        switch (eventName) {
            case 'open': 
                this._openHandler = handler;
                break;
            case 'close':
                this._closeHandler = handler;
                break;
            case 'cancel':
                this._cancelHandler = handler;
                break;
        }
    }

    init() {
        super.init();

        this._dialog = this.querySelector<HTMLDialogElement>(':scope>dialog');
        if (!this._dialog) {
            throw new Error('dw-modal requires a dialog.')
        }
        this._dialog.addEventListener('close', this._handleClose.bind(this));
        this._dialog.addEventListener('cancel', this._handleCancel.bind(this));

        this._button = this.querySelector<HTMLButtonElement>(':scope>button');
        if (!this._button) {
            throw new Error('dw-modal requires a button in order to launch the modal');
        }
        this._button.addEventListener('click', this._clickOpen.bind(this));
        
        this._closeButtons = this._dialog.querySelectorAll<HTMLButtonElement>(':is(button.close, button.cancel)');
        this._closeButtons.forEach(b => {
            b.addEventListener('click', this._clickClosed.bind(this));
        })

        console.log(this._button, this._dialog)
    }

    _clickOpen() {
        if (this._type === 'modal') {
            this._dialog?.showModal();
        }
        if (this._type === 'popover') {
            this._dialog?.show();
        }

        this._openHandler !== null && this._openHandler();
    }

    _clickClosed() {
        this._dialog?.close();
    };

    _handleClose(e: CloseEvent) {
        this._closeHandler !== null && this._closeHandler(e);
    }

    _handleCancel(e: Event) {
        this._cancelHandler !== null && this._cancelHandler(e);
    }
}