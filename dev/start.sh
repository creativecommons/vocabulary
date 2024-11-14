#!/usr/bin/env bash
set -o errexit
set -o nounset

# https://en.wikipedia.org/wiki/ANSI_escape_code
E0="$(printf "\e[0m")"        # reset
E1="$(printf "\e[1m")"        # bold

# Apache gets grumpy about PID files pre-existing
rm -f /usr/local/apache2/logs/httpd.pid

/usr/local/apache2/bin/httpd -v
echo "${E1}Starting webserver: http://127.0.0.1:8080${E0}"
exec /usr/local/apache2/bin/httpd -D FOREGROUND
