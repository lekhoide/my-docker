import { Component, useState } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { registry } from "@web/core/registry";
import { Notebook } from "@web/core/notebook/notebook";

import { useClicker } from "../clicker_hook";


class ClickerClientAction extends Component {
    static template = "awesome_clicker.ClickerClientAction";
    static props = ["*"];
    static components = { Notebook }

    setup() {
        this.clicker = useClicker();
    }

}

registry.category("actions").add("awesome_clicker.client_action", ClickerClientAction);