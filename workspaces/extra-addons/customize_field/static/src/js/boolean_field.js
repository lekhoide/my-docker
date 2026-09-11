import { registry } from "@web/core/registry";
import { _t } from "@web/core/l10n/translation";
import { booleanField, BooleanField } from "@web/views/fields/boolean/boolean_field";

console.log("Test")

export class BooleanColorField extends BooleanField {
    static template = "customize_field.BooleanField";
}

registry.category("fields").add("boolean_color", {
    ...booleanField,
    component: BooleanColorField
});
