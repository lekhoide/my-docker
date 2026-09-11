import { Component, use } from "react"


export class ClickerValue extends Component {
    static template = xml``;
    static props = {};

    setup() {
        this.clicker = useClicker();
        useState
    }

    get humanizedClicks() {
        return humanNumber(this.clicker.clicks, {
            decimals: 1,
        })
    }
}