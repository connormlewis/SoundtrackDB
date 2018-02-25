#!/usr/bin/env bash

docker run -v "`pwd`":/src/ -w /src/ idb_backend ./run-tests.sh