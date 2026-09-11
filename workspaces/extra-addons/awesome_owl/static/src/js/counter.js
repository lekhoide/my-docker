/** @odoo-module */
'use strict';

import { Component, useState, onMounted } from "@odoo/owl";

export class Counter extends Component {
    static template = "awesome_owl.counter";
    static props = {
        valueCounter: {
            type: Number,
            optional: true,
        },
        onChange: {type:Function, optional: true}
    };
    static defaultProps = {
        valueCounter: 0,
    };
    setup(env, services) {
        this.state = useState({ valueCounter: this.props.valueCounter });
        onMounted(() => {
            if (this.props.onChange) {
                console.log("counter", this.props.valueCounter)
                console.log("this", this)
                console.log("env", env)
                console.log("services", services)
                this.props.onChange(this.props.valueCounter);
            }
        });
    }
    increment() {
        this.state.valueCounter++;

        if(this.props.onChange) {
            this.props.onChange(1)
        }
    }
}
