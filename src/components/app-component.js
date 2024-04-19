import { LitElement, html, css } from 'lit';
import styles from './app-component.css' assert { type: 'css' }; 

export class AppComponent extends LitElement {

    static styles = [styles];
    static get properties (){
        return {
            arrActive:{
                type: Array
            },
            level:{
                type: Number
            }
        }
    }

    constructor(){
        super()
        this.arrActive = [false,false,false,false,false,false,false,false]
        this.level = 0
    }

    handleActiveGlass = (e,indexCup) =>{
        let n=indexCup
        this.level= indexCup+1
        if (!e.detail) {
            n = indexCup-1
            this.level--
        }
        this.arrActive= this.arrActive.map((item, index)=>{
            if (index<=n) return true
            else return false
        })
        
    }

    

    render() {
        return html`
            <div class='container'>
                <h1>Drink Water</h1>
                <h2>Goal: 2 Liters</h2>
                <div class='big-cup'>
                    <div class=${`hollow hollow-active-${this.level}`}>
                        ${`${2-.25*this.level}L`}
                        <div>Remined</div>
                    </div>
                    <div class='whater whater-active-${this.level}'>
                        ${`${this.level*12.5}%`}
                    </div>
                </div>
                <div class= 'glasses-container'>
                    ${this.arrActive.map((cup,indexCup) => {
                        return html `
                            <component-glass .active = ${this.arrActive[indexCup]}
                                @my-event = ${(e)=>this.handleActiveGlass(e,indexCup)}
                            ></component-glass>
                        `})}
                </div>
            </div>
        `;
    }
}
customElements.define('app-component', AppComponent);