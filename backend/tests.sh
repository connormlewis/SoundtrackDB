#!/usr/bin/env bash

py.test --cov=app --cov-report term-missing --cov-fail-under 95 --color=yes tests.py
pylint app/