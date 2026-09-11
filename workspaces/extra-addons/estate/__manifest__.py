# -*- coding: utf-8 -*-
{
    # Basic
    "name": "Real Estate",
    "depends": [
        "base",
        "web",
        "spreadsheet_dashboard",
        # "web_dashboard",
        "board",
    ],
    "data": [
        # Security
        "security/security.xml",
        "security/ir.model.access.csv",
        # Data
        "data/estate.property.type.csv",
        # Wizard
        # Views
        "views/estate_property_offer_views.xml",
        "views/estate_property_tag_views.xml",
        "views/estate_property_type_views.xml",
        "views/estate_property_views.xml",
        "views/res_users_views.xml",
        # Report
        "report/estate_report_views.xml",
        "report/estate_property.xml",
        # Menus
        "views/estate_menus.xml",
    ],
    "auto_install": False,
    "application": True,
    "installable": True,

    # Advanced
    "version": "1.0",
    "description": "Basic use Odoo version odoo/15.0",
    "author": "LKD",
    "website": "",
    "license": "LGPL-3",
    "category": "Real Estate/Brokerage",
    "demo": [
        "demo/estate_property_tag.xml",
        "demo/estate_property.xml",
        "demo/estate_property_offer.xml",
    ],
    "external_dependencies": {},
    "assets": {},
    "maintainer": "",
    "pre_init_hook": "",
    "post_init_hook": "",
    "uninstall_hook": "",
}