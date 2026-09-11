import { Component, useState } from "@odoo/owl";
import { Layout } from "@web/search/layout";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { browser } from "@web/core/browser/browser";

import { DashboardItem } from "./dashboard_item";
import { PieChart } from "./pie_chart";
import { ConfigurationDialog } from "./configuration_dialog";


class AwesomeDashboard extends Component {
    static template = "awesome_dashboard.AwesomeDashboard";
    static components = { Layout, DashboardItem ,PieChart };
    static props = ["*"]

    setup() {
        this.action = useService("action");
        this.dialog = useService("dialog");
        this.statistics = useState(useService("awesome_dashboard.statistics"));
        this.genericItems = registry.category("awesome_dashboard").getAll();
        this.state = useState({
            disabledItems: browser.localStorage.getItem("disabledDashboardItems")?.split(",") || []
        })
    }

    get dataStatistics(){
        return this.statistics;
    }

    openConfiguration() {
        try {
            this.dialog.add(ConfigurationDialog, {
                genericItems: this.genericItems,
                disabledItems: this.state.disabledItems,
                onUpdateConfiguration: this.updateConfiguration.bind(this),
            })
        } catch (error) {
            console.log("An error happend", error.message)
        }
    }

    updateConfiguration(newDisabledItems) {
        this.state.disabledItems = newDisabledItems
    }


    openCustomerView() {
        this.action.doAction("base.action_partner_form")
    }

    openLeads() {
        this.action.doAction({
            type: "ir.actions.act_window",
            name: "All leads",
            res_model: "crm.lead",
            views: [
                [false, "list"],
                [false, "form"]
            ]
        })
    }

}

registry.category("lazy_components").add("AwesomeDashboard", AwesomeDashboard);