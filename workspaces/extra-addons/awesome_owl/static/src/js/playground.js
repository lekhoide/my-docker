/** @odoo-module **/
'use strict';

import { Component, useState, markup } from "@odoo/owl";
import { Counter } from "./counter";
import { Card } from "./card";

export class Playground extends Component {
    static template = "awesome_owl.playground";
    static components = { Counter, Card };
    static props = {};

    setup() {
        this.state = useState({ value: 0, sumCounter: 0 });
        this.html = "<div>some content</div>";
        this.htmlUseMark = markup("<div>some content</div>");
    }

    increment() {
        this.state.value++;
    }

    incrementSum(amount) {
        this.state.sumCounter += amount;
    }
}
