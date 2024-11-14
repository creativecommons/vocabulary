# https://docs.docker.com/engine/reference/builder/

# https://hub.docker.com/_/httpd
FROM httpd:2.4

# Override graceful stop in httpd:2.4
STOPSIGNAL SIGTERM

# Update Apache2 configuration
# 1. Set ServerName to prevent warning
# 2. Enable mod_rewrite
#    https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html
RUN sed \
    -e's/^#ServerName.*/ServerName static/' \
    -e's/^#LoadModule rewrite/LoadModule rewrite/' \
    -i'' /usr/local/apache2/conf/httpd.conf

# Append include site configuration
RUN echo 'Include conf/config/site.conf' \
    | tee -a /usr/local/apache2/conf/httpd.conf

# Configure service startup
COPY dev/start.sh /start.sh
CMD ["/start.sh"]
