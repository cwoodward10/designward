/**
 * Extension of HTMLElement providing utility classes
 */
export class DwWebComponent extends HTMLElement {
    /** Component name to be called in this.Mount's windows.customElements.define call */
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

    /**
     * Adds a shadow root if the shadow root was not declaratively provided by 
     * an html template
     * @param html 
     * @param mode 
     */
    addShadowRootFallback(
        html: string, 
        mode?: 'open' | 'closed',
        delegatesFocus?: boolean
    ) {
        let shadow = this._internals?.shadowRoot;

        if (!shadow) {
            shadow = this.attachShadow({
                mode: mode || "open",
                delegatesFocus: delegatesFocus || false
            });
            shadow.innerHTML = html;
        }

        return shadow;
    }
}

/**
 * Extension of HTML Element that expects to operate like an HTML Web Component 
 * in that it will expect to have children
 */
export class DwHtmlWebComponent extends DwWebComponent {
    initialized: boolean;
    _observer: MutationObserver;

    constructor() {
        super();
    }

    connectedCallback() {
        if (this.children.length) {
            this._init();
            return;
        }
    
        // not yet available, watch it for init
        this._observer = new MutationObserver(this._init.bind(this));
        this._observer.observe(this, { childList: true });
    }

    /**
     * Initilizes the component once the component's children are present and ready.
     * Extend with super.init().
     */
    _init() {
        if(this.initialized) {
			return;
		}
		this.initialized = true;
    }
}