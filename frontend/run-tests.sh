#!/usr/bin/env bash

docker run -v "`pwd`":/src/ -w /src/ idb_frontend yarn test