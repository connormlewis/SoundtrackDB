#!/usr/bin/env bash

echo "Running frontend tests"
docker run -v "`pwd`/frontend":/src/ -w /src/ idb_frontend yarn test
echo "Frontend tests complete"
echo "Running backend tests"
docker run -v "`pwd`/backend":/src/ -w /src/ idb_backend ./tests.sh
echo "Backend tests complete"