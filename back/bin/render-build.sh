#!/usr/bin/env bash
 # exit on error
 set -o errexit

 bundle exec rails db:migrate
 bundle exec rails db:seed