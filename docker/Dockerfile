FROM ubuntu:24.04
LABEL maintainer="lekhoide@gmail.com"

# variable to build
ARG ODOO_USER=odoo
ARG ODOO_HOME=/opt/odoo19
ARG ODOO_VERSION=19.0

ENV ODOO_HOME=${ODOO_HOME}

RUN userdel -r ubuntu

# create group and create folder and update group
RUN mkdir -p ${ODOO_HOME}/config
RUN mkdir -p ${ODOO_HOME}/scripts
RUN mkdir -p ${ODOO_HOME}/workspaces
RUN mkdir -p ${ODOO_HOME}/data

RUN if id ubuntu &>/dev/null; then \
        userdel -r ubuntu 2>/dev/null || true; \
    fi \
    && groupadd -g 1000 "${ODOO_USER}" \
    && useradd -m -d "${ODOO_HOME}" -u 1000 -g 1000 "${ODOO_USER}" \
    && chown -R ${ODOO_USER}:${ODOO_USER} ${ODOO_HOME}

COPY --chown=${ODOO_USER}:${ODOO_USER} ./workspaces/odoo \
    ${ODOO_HOME}/workspaces/odoo
COPY --chown=${ODOO_USER}:${ODOO_USER} --chmod=755 ./docker/entrypoint.sh \
    ${ODOO_HOME}/scripts/entrypoint.sh
COPY --chown=${ODOO_USER}:${ODOO_USER} --chmod=644 ./config/odoo.conf \
    ${ODOO_HOME}/config/odoo.conf

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    build-essential \
    python3-dev \
    python3-venv \
    python3-pip \
    curl \
    ca-certificates \
    libldap2-dev \
    libpq-dev \
    libsasl2-dev \
    wkhtmltopdf \
    && bash "${ODOO_HOME}/workspaces/odoo/setup/debinstall.sh" \
    && rm -rf /var/lib/apt/lists/*

RUN python3 -m venv "${ODOO_HOME}/venv" \
    && "${ODOO_HOME}/venv/bin/pip" install --upgrade pip wheel setuptools \
    && "${ODOO_HOME}/venv/bin/pip" install --no-cache-dir \
        -r "${ODOO_HOME}/workspaces/odoo/requirements.txt" \
    && "${ODOO_HOME}/venv/bin/pip" install debugpy==1.8.5 \
        inotify\
    && chown -R "${ODOO_USER}:${ODOO_USER}" "${ODOO_HOME}/venv"

USER ${ODOO_USER}

ENTRYPOINT $ODOO_HOME/scripts/entrypoint.sh
CMD []