#!/bin/bash
set -e

ODOO_HOME="${ODOO_HOME}"
PYTHON_VENV="${ODOO_HOME}/venv/bin/python3"
ODOO_BIN="${ODOO_HOME}/workspaces/odoo/odoo-bin"
ODOO_RC="${ODOO_HOME}/config/odoo.conf"

VENV_SITE_PACKAGES="$($PYTHON_VENV -c 'import sysconfig; print(sysconfig.get_path("purelib"))')"
export PYTHONPATH="${VENV_SITE_PACKAGES}:${PYTHONPATH:-}"

DEV_MODE="${DEV_MODE:-normal}"

case "$DEV_MODE" in
    "debug")
        echo "Starting Odoo in DEBUG mode"
        exec "$PYTHON_VENV" \
            -m debugpy \
            --listen 0.0.0.0:5678 \
            "$ODOO_BIN" \
            -c "$ODOO_RC"
        ;;
    "hot-reload")
        echo "Starting Odoo in DEV mode"
        exec "$PYTHON_VENV" \
            "$ODOO_BIN" \
            -c "$ODOO_RC" \
            --dev=xml,reload
        ;;
    *)
        echo "Starting Odoo in NORMAL mode"
        exec "$PYTHON_VENV" \
            "$ODOO_BIN" \
            -c "$ODOO_RC"
        ;;
esac
