#!/usr/bin/env bash

set -uo pipefail

TARGET_CONTAINER="${TARGET_CONTAINER:-kocker}"
TARGET_SHELL="${TARGET_SHELL:-bash}"
TARGET_USER="${TARGET_USER:-}"   # rỗng = không chỉ định, dùng user mặc định của image

while true; do

    clear

    echo "====================================="
    echo " Ghostty Terminal Service"
    echo "====================================="
    echo ""
    echo "Container : ${TARGET_CONTAINER}"
    echo "User      : ${TARGET_USER:-<default>}"
    echo "Shell     : ${TARGET_SHELL}"
    echo ""

    running="$(docker inspect -f '{{.State.Running}}' "${TARGET_CONTAINER}" 2>/dev/null || echo "false")"

    if [[ "${running}" == "true" ]]; then

        # Build lệnh exec động — chỉ thêm -u nếu TARGET_USER có giá trị
        exec_args=(docker exec -it)
        if [[ -n "${TARGET_USER}" ]]; then
            exec_args+=(-u "${TARGET_USER}")
        fi
        exec_args+=("${TARGET_CONTAINER}" "${TARGET_SHELL}")

        exec "${exec_args[@]}"

    fi

    echo "Container '${TARGET_CONTAINER}' is not running."
    echo ""
    echo "Retrying in 3 seconds..."

    sleep 3
done