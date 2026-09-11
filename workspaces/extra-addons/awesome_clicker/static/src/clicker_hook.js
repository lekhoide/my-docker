import { useService } from "@web/core/utils/hooks";
import { useState } from "@odoo/owl";
import { useRef } from "react";

export function useClicker() {
    useRef
    return useState(useService("awesome_clicker.clicker"));
}