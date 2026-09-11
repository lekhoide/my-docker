import { Component, useState, useExternalListener, useRef } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { registry } from "@web/core/registry";
import { Dropdown } from "@web/core/dropdown/dropdown";
import { DropdownItem } from "@web/core/dropdown/dropdown_item";

export class ClickerSystray extends Component {
    static template = "awesome_clicker.ClickerSystray";
    static props = {};
    static components = { Dropdown, DropdownItem };

    setup() {
        this.action = useService("action");
        this.buttonRef = useRef("buttonRef")
    }

    openClientAction() {
        this.action.doAction({
            type: "ir.actions.client",
            tag: "awesome_clicker.client_action",
            target: "new",
            name: "Clicker Game"
        });
    }

};

export const systrayItem = {
    Component: ClickerSystray,
}

registry.category("systray").add("awesome_clicker.ClickerSystray", systrayItem, { sequence: 1000});