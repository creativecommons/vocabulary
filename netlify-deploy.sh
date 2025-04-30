#!/bin/sh
# (POSIX / Dash compatible)
set -o errexit
set -o nounset

# https://en.wikipedia.org/wiki/ANSI_escape_code
E0="$(printf "\033[0m")"        # reset
E30="$(printf "\033[30m")"      # black foreground
E107="$(printf "\033[107m")"    # bright white background

#### FUNCTIONS ################################################################

build_specimen_index() {
    print_header 'Build Vocabulary Specimens index'
    build_specimen_index_file > docs/specimen/index.html
    echo 'done.'
    echo
}

build_specimen_index_file() {
    local _file _relative
    head -n12 specimen/index.html
    for _file in docs/specimen/contexts/*.html
    do
        _relative="${_file#docs/specimen/}"
        echo "      <li><a href='${_relative}'>${_relative}</a></li>"
    done
    echo "    </ul>\n  </main>\n</body>\n</html>"
}

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
build_specimen_index
