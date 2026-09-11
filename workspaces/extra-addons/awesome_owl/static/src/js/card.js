/** @odoo-module **/
'use strict';

import {Component, useState} from "@odoo/owl";
import { Counter } from "./counter";


export class Card extends Component {
    static template = "awesome_owl.Card"
    static components = {Counter};
    static props = {
        title: {type: String, optional: true},
        slots: {type: Object, optional: true}
        // content: {type: String, optional: true}
    }

    state = useState({ isOpen: true });

    toggle() {
        this.state.isOpen = !this.state.isOpen;
    }
}