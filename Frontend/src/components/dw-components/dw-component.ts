/**
 * Extension of HTMLElement providing utility classes
 */
export class DwWebComponent extends HTMLElement {
    static ComponentName: string;
    static Mount() {
        if(typeof window !== "undefined" && ("customElements" in window)) {
            window.customElements.define(this.ComponentName, this);
        }
    }

    _internals: ElementInternals;

    constructor() {
        super();

        this._internals = this.attachInternals();
    }

    /**
     * Checks for the presence of an attribute.
     * Code from zachleat's detail-utils
     * @param name 
     * @returns false if attribute is not present. True if undefined or empty string. Value of attribute if otherwise.
     */
    getAttributeValue(name: string) {
		let value = this.getAttribute(name);
		if(value === undefined || value === "") {
			return true;
		} else if(value) {
			return value;
		}
		return false;
	}
}

/**
 * Extension of HTML Element that expects to operate like an HTML Web Component 
 * in that it will expect to have children
 */
export class DwHtmlWebComponent extends DwWebComponent {
    initialized: boolean;
    _observer: MutationObserver;

    constructor(innerHtml?: string) {
        super();

        this.attachShadow({mode: 'open'});
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = innerHtml ?? `
                <style>...</style>
                <slot></slot>
            `;
        }
    }

    connectedCallback() {
        if (this.children.length) {
            this.init();
            return;
        }
    
        // not yet available, watch it for init
        this._observer = new MutationObserver(this.init.bind(this));
        this._observer.observe(this, { childList: true });
    }

    /**
     * Initilizes the component once the component's children are present and ready.
     * Extend with super.init().
     */
    init() {
        if(this.initialized) {
			return;
		}
		this.initialized = true;
    }
}