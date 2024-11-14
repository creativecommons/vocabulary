#!/bin/sh
# (POSIX / Dash compatible)
set -o errexit
set -o nounset

# https://en.wikipedia.org/wiki/ANSI_escape_code
E0="$(printf "\033[0m")"        # reset
E30="$(printf "\033[30m")"      # black foreground
E107="$(printf "\033[107m")"    # bright white background

#### FUNCTIONS ################################################################


print_header() {
    # Print 80 character wide black on white heading with time
    printf "${E30}${E107}# %-69s$(date '+%T') ${E0}\n" "${@}"
}


restart_docker_service() {
    print_header 'Restart docker service'
    docker compose restart --timeout=15 static
    echo
}


#### MAIN #####################################################################

./netlify-deploy.sh
restart_docker_service
