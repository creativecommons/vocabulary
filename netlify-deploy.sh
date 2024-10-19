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


remove_previous_from_docs() {
    # shellcheck disable=SC2016
    print_header 'Remove previous publish from the `docs/` directory'
    rm -rf docs/_redirects docs/specimen docs/vocabulary
    mkdir -p docs/specimen docs/vocabulary
    echo 'done.'
    echo
}


publish_to_docs() {
    # shellcheck disable=SC2016
    print_header 'Publish to the `docs/` directory'
    cp -a _redirects docs/
    cp -a specimen/* docs/specimen/
    cp -a src/* docs/vocabulary/
    echo 'done.'
    echo
}


#### MAIN #####################################################################

remove_previous_from_docs
publish_to_docs
