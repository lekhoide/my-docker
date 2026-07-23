# Ghostty Service Container

## Overview

This project provides a dedicated Ghostty container.

Ghostty is NOT installed inside your Linux development container.

Instead, Ghostty connects to an already running Linux container using Docker.

Architecture:

Host Machine
|
+-- ghostty-service
|       |
|       +-- Ghostty GUI
|       |
|       +-- ghostty-shell.sh
|               |
|               +-- docker exec -it linux-dev zsh
|
+-- linux-dev (already running)


## Requirements

1. Docker installed.

2. A Linux container is already running.

Example:

    linux-dev

Verify:

    docker ps

Example output:

    CONTAINER ID    NAMES
    xxxxxxxxxxxx    linux-dev


## Build Image

Build the image:

    docker build -t ghostty-service .


## Run Container

Run the Ghostty service container:

    docker run -d \
        --name ghostty-service \
        -v /var/run/docker.sock:/var/run/docker.sock \
        ghostty-service


The Docker socket is required because Ghostty uses:

    docker exec

to connect to other containers.


## Access the Container

Open a shell:

    docker exec -it ghostty-service bash


Verify Ghostty:

    ghostty --version


## Launch Ghostty

Run:

    ghostty

Ghostty will automatically execute:

    /usr/local/bin/ghostty-shell


Which will connect to:

    linux-dev


## Changing the Target Container

By default:

    TARGET_CONTAINER=linux-dev

Modify the following line in:

    ghostty-shell.sh

Example:

    TARGET_CONTAINER=odoo-dev

or:

    TARGET_CONTAINER=d365-dev


## Changing the Target Shell

Default:

    TARGET_SHELL=zsh

Examples:

    TARGET_SHELL=bash

or:

    TARGET_SHELL=fish


## Advantages

- Dedicated Ghostty container.
- Lightweight Debian Trixie base image.
- No Ghostty installation required inside development containers.
- Easy to reuse with multiple Linux containers.
- Ghostty can be upgraded independently.
- No Zig compiler or source build required.
- Minimal maintenance.


## Recommended Usage

Use Ghostty as a GUI terminal service only.

Do not install Ghostty inside:

- linux-dev
- odoo-dev
- d365-dev

Keep your development containers focused on development tools and use Ghostty as the terminal layer.