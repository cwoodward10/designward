import { DwHtmlWebComponent } from "./dw-component";
import { DwCustomDialog } from "./dw-custom-dialog";
import { DwHamburger } from "./dw-hamburger";

export class DwMobileNavMenu extends DwHtmlWebComponent {
    static ComponentName: string = 'dw-mobile-nav-menu';

    _modal: DwCustomDialog | null;
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
            <dw-custom-dialog fullscreen='true' button-selector=":host dw-hamburger">
                <dw-hamburger data-istoggle></dw-hamburger>
                <div role=dialog hidden=true aria-labelledby='h2'>
                    <h2>Nav</h2>
                    <nav aria-label="navigation menu">
                        <ul role="menubar" aria-label="navigation menu">
                            <slot></slot>
                        </ul>
                    </nav>
                </div>
            </dw-custom-dialog>
        `

        this.addShadowRootFallback(sr, 'open', true);
    }

    _init() {
        super._init();

        DwCustomDialog.Mount();
        DwHamburger.Mount();

        this._hamburger = this.shadowRoot?.querySelector('dw-hamburger') || null;
        this._modal = this.shadowRoot?.querySelector('dw-custom-dialog') || null;    
    }
}