FROM debian:trixie

# 1. Desktop ảo + window manager + VNC
RUN apt-get update && apt-get install -y --no-install-recommends \
    xvfb \
    dbus-x11 \
    xfce4 xfce4-terminal \
    x11vnc \
    supervisor \
    curl ca-certificates git \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# 2. noVNC — cho phép xem qua trình duyệt
RUN git clone https://github.com/novnc/noVNC.git /opt/novnc && \
    git clone https://github.com/novnc/websockify /opt/novnc/utils/websockify

# 3. Docker CLI (để bạn exec vào container khác, giống setup cũ)
RUN apt-get update && apt-get install -y docker.io && apt-get clean

# 4. Ghostty (dùng đúng script bạn đã có)
RUN /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/mkasberg/ghostty-ubuntu/HEAD/install.sh)"

# 5. xfreerdp
RUN apt-get update && apt-get install -y --no-install-recommends freerdp3-x11 && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# # 6. VSCode (bản .deb chính thức)
# RUN curl -fsSL https://code.visualstudio.com/sha/download?build=stable\&os=linux-deb-x64 -o /tmp/vscode.deb && \
#     apt-get install -y /tmp/vscode.deb && rm /tmp/vscode.deb

# 7. Cấu hình supervisord để khởi động tất cả cùng lúc
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 6080
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]