FROM gitpod/workspace-full

USER root

# install via Ubuntu's APT:
# * Apache - the web server
# * Multitail - see logs live in the terminal
RUN apt-get update \
 && apt-get -y install apache2 multitail libapache2-mod-php7.2 mcrypt \
 && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/*

# 1. give write permission to the gitpod-user to apache directories
# 2. let Apache use apache.conf and apache.env.sh from our /workspace/<myproject> folder
RUN chown -R gitpod:gitpod /var/run/apache2 /var/lock/apache2 /var/log/apache2 \
 && echo "include \${GITPOD_REPO_ROOT}/apache.conf" > /etc/apache2/apache2.conf \
 && echo ". \${GITPOD_REPO_ROOT}/apache.env.sh" > /etc/apache2/envvars