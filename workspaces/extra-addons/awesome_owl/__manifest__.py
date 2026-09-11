{
    "name": "Awesome Owl",
    "summary": """
        Starting module for "Discover the JS framework, chapter 1: Owl components"
    """,
    "description": """
        Starting module for "Discover the JS framework, chapter 1: Owl components"
    """,
    "author": "Maker64 - IT Team",
    "website": "https://www.erp.maker64.net/",
    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    "category": "Tutorials/AwesomeOwl",
    "version": "18.0",  # Previous version 0.1
    # any module necessary for this one to work correctly
    "depends": ["base", "web"],
    "application": True,
    "installable": True,
    "data": [
        "views/templates.xml",
    ],
    "assets": {
        "awesome_owl.assets_playground": [
            ("include", "web._assets_helpers"),
            "web/static/src/scss/pre_variables.scss",
            "web/static/lib/bootstrap/scss/_variables.scss",
            "web/static/lib/bootstrap/scss/_maps.scss",
            ("include", "web._assets_bootstrap"),
            ("include", "web._assets_bootstrap_backend"),
            ("include", "web._assets_core"),
            "web/static/src/libs/fontawesome/css/font-awesome.css",
            "awesome_owl/static/src/js/*",
            "awesome_owl/static/src/xml/*",
        ],
        "awesome_owl.assets_playground_todolist": [
            ("include", "web._assets_helpers"),
            "web/static/src/scss/pre_variables.scss",
            "web/static/lib/bootstrap/scss/_variables.scss",
            "web/static/lib/bootstrap/scss/_maps.scss",
            ("include", "web._assets_bootstrap"),
            ("include", "web._assets_bootstrap_backend"),
            ("include", "web._assets_core"),
            "web/static/src/libs/fontawesome/css/font-awesome.css",
            "awesome_owl/static/src/todolist/*",
        ],
    },
    "license": "LGPL-3",
}
