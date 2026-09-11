# -*- coding: utf-8 -*-
{
    # Basic
    "name": "Customize Field",
    "depends": [
        "estate"
    ],
    "data": [
        "views/estate_property_views.xml",
    ],
    "auto_install": False,
    "application": True,
    "installable": True,

    # Advanced
    "version": "1.0",
    "author": "LKD",
    "website": "",
    "license": "LGPL-3",
    "category": "Tools",
    "demo": [],
    "external_dependencies": {},
    "assets": {
        'web.assets_backend': [
            'customize_field/static/src/**/*',
        ],
    },
    "maintainer": "",
    "pre_init_hook": "",
    "post_init_hook": "",
    "uninstall_hook": "",
}