/**odoo-module */
import { Component, xml, useState } from "@odoo/owl";
import { Dialog } from "@web/core/dialog/dialog";
import { CheckBox } from "@web/core/checkbox/checkbox";
import { browser } from "@web/core/browser/browser";


export class ConfigurationDialog extends Component {
    static template = xml`
<t t-name="awesome_dashboard.ConfigurationDialog">
    <Dialog title="'Dashboard items configuration'">
        Which cards do you whish to see?
        <t t-foreach="genericItems" t-as="item" t-key="item.id">
            <CheckBox value="item.enabled" onChange="(ev) => this.onChange(ev, item)">
                <t t-esc="item.description"/>
            </CheckBox>
        </t>
        <t t-set-slot="footer">
            <button class="btn btn-primary" t-on-click="done">
                Done
            </button>
        </t>
    </Dialog>
</t>
    `;
    static components = { Dialog, CheckBox };
    static props = ["close", "genericItems", "disabledItems", "onUpdateConfiguration"];

    setup() {
        this.genericItems = useState(this.props.genericItems.map((item) => {
            return {
                ...item,
                enabled: !this.props.disabledItems.includes(item.id),
            }
        }));
    }

    done() {
        this.props.close();
    }

    onChange(checked, changedItem) {
        changedItem.enabled = checked;
        const newDisabledItems  = Object.values(this.genericItems).filter((item) => !item.enabled).map((item) => item.id);
        browser.localStorage.setItem(
            "disabledDashboardItems",
            newDisabledItems,
        );
        this.props.onUpdateConfiguration(newDisabledItems);
    }


}