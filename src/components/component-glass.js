import { LitElement, html, css } from 'lit-element';
import styles from './component-glass.css' assert { type: 'css' }; 

export class ComponentGlass extends LitElement {

    static styles = [styles];

    static get properties(){
        return{
            active:{
                type: Boolean
            }
        }
    }

    constructor(){
        super()
        this.active = false
        this.clickListener = true
    }

    activeHandle = () =>{
        const event = new CustomEvent('my-event', {bubbles: true, composed: true,detail:this.clickListener});
        this.clickListener = !this.clickListener
        this.dispatchEvent(event);
    }

    render() {
        return html`
                <div class=${`glass ${this.active ? 'active' : ''}`}
                    @click=${this.activeHandle}
                >
                    250 ml
                </div>
        `;
    }
}
customElements.define('component-glass', ComponentGlass);