FROM debian:trixie

ARG GHOSTTY_USER=dekute
ARG GHOSTTY_UID=1000
ARG GHOSTTY_GID=1000

LABEL org.opencontainers.image.title="ghostty-service"
LABEL org.opencontainers.image.description="Dedicated Ghostty terminal service"

# curl/ca-certificates để tải Ghostty; docker.io để có docker CLI cho docker exec
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        curl \
        ca-certificates \
        docker.io && \
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/mkasberg/ghostty-ubuntu/HEAD/install.sh)" && \
    apt-get clean && rm -rf /var/lib/apt/lists/*
# Lưu ý: KHÔNG rm -rf apt lists trước khi cài .deb ở trên — đó là nguyên nhân gây lỗi build của bạn.
# (docker.io chỉ dùng để lấy binary `docker` CLI, ta sẽ không chạy dockerd trong container này)

# Tạo user và thêm vào group docker (để dùng docker.sock)
RUN groupadd -g ${GHOSTTY_GID} ${GHOSTTY_USER} && \
    useradd -m \
        -u ${GHOSTTY_UID} \
        -g ${GHOSTTY_GID} \
        -s /bin/bash \
        ${GHOSTTY_USER} && \
    usermod -aG docker ${GHOSTTY_USER}

COPY ghostty-shell.sh /usr/local/bin/ghostty-shell
RUN chmod +x /usr/local/bin/ghostty-shell
RUN chmod 755 /usr/local/bin/ghostty-shell

RUN mkdir -p /home/${GHOSTTY_USER}/.config/ghostty
# COPY config.ghostty /home/${GHOSTTY_USER}/.config/ghostty/config
RUN chown -R ${GHOSTTY_USER}:${GHOSTTY_USER} /home/${GHOSTTY_USER}

USER ${GHOSTTY_USER}
WORKDIR /home/${GHOSTTY_USER}

# Ghostty tự đọc command từ config.ghostty (xem bên dưới), không cần đối số
CMD ["ghostty"]