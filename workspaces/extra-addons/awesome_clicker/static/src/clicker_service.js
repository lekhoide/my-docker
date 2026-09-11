import { registry } from "@web/core/registry";
import { reactive } from "@odoo/owl";


const clickerService = {
    dependencies: ["action", "effect", "notification"],
    start(env, services) {
        const localState = reactive({clicks: 0});
        return {
            localState,
            increment(inc) {
                console.log(localState.clicks)
                localState.clicks += inc
            }
        };
    },
};

registry.category("services").add("awesome_clicker.clicker", clickerService);