#!/usr/bin/env bash
#
# create a json file with build data and commit hash needed for the status page
#


set -o errexit
set -o pipefail
set -o nounset

echo "{\"commit\":\"$(git rev-parse --short HEAD)\",\"lastmod\":\"$(date -u  +%Y-%m-%dT%H:%M:%SZ)\"}" >build.json
exit 0


echo '{}' \
    | jq --arg COMMIT $(git rev-parse --short HEAD) '.commit|=$COMMIT' \
    | jq --arg LASTMOD $(date -u  +%Y-%m-%dT%H:%M:%SZ) '.lastmod|=$LASTMOD' \
    | jq --sort-keys . \
    > "./build.json"

cat ./build.json
