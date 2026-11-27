#!/usr/bin/env bash
# Publishes the forwarder to cojamz/cojamz.github.io (the user site): every old https://cojamz.github.io/patrons/... link
# lands on the same page under /cults/. 404.html catches deep links; the index files answer the common ones with 200.
set -euo pipefail
HERE=$(cd "$(dirname "$0")" && pwd)
TMP=$(mktemp -d "${TMPDIR:-/tmp}/forward-site.XXXXXX"); trap 'rm -rf "$TMP"' EXIT
git clone -q https://github.com/cojamz/cojamz.github.io.git "$TMP/site" 2>/dev/null || { mkdir "$TMP/site"; git -C "$TMP/site" init -q -b main; git -C "$TMP/site" remote add origin https://github.com/cojamz/cojamz.github.io.git; }
cd "$TMP/site"
touch .nojekyll
cp "$HERE/forward.html" 404.html
for d in patrons patrons/play patrons/play/members patrons/rules; do mkdir -p "$d"; cp "$HERE/forward.html" "$d/index.html"; done
[ -f index.html ] || cp "$HERE/forward.html" index.html
git add -A
git diff --cached --quiet && { echo 'Forwarder already up to date'; exit 0; }
git -c user.name="${GIT_AUTHOR_NAME:-Claude}" -c user.email="${GIT_AUTHOR_EMAIL:-noreply@anthropic.com}" commit -qm 'Forward old /patrons links to /cults'
git push -q origin HEAD:main && echo 'Forwarder pushed to cojamz/cojamz.github.io'
