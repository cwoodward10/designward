import { DwHtmlWebComponent } from "./dw-component";
import { DwHamburger } from "./dw-hamburger";
import { DwModal } from "./dw-modal";

export class DwMobileNavMenu extends DwHtmlWebComponent {
    static ComponentName: string = 'dw-mobile-nav-menu';

    _modal: DwModal | null;
    _hamburger: DwHamburger | null;

    _menuContent: Element[];

    constructor() {
        super();

        const sr = `
            <style>
                dw-hamburger {
                    position: relative;
                    z-index: 2;
                }
            </style>
            <dw-modal fullscreen='true' button-selector=":host dw-hamburger">
                <dw-hamburger></dw-hamburger>
                <dialog aria-label='mobile navigation modal'>
                    <nav aria-label="navigation menu">
                        <ul role="menubar" aria-label="navigation menu">
                            <slot></slot>
                        </ul>
                    </nav>
                </dialog>
            </dw-modal>
        `

        this.addShadowRootFallback(sr, 'open', true);
    }

    _init() {
        super._init();

        DwModal.Mount();
        DwHamburger.Mount();

        this._hamburger = this.shadowRoot?.querySelector('dw-hamburger') || null;
        this._modal = this.shadowRoot?.querySelector('dw-modal') || null;    
    }
}