import { standardFieldProps } from "@web/views/fields/standard_field_props";
import { Component, xml } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class TextHandleColor extends Component {
   static template = xml`
      <input t-att-id="props.id" class="text-danger" t-att-value="props.value" onChange.bind="onChange" />
   `;
   static props = { ...standardFieldProps };
   static supportedTypes = ["char", "text"];

   /**
   * @param {boolean} newValue
   */
   onChange(newValue) {
      this.props.update(newValue);
   }
}

export const TextHandleField = {
    component: TextHandleColor,
};

registry.category("fields").add("text_color", TextHandleField);