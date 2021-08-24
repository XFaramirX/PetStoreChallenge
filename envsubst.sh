#!/bin/bash
source ./.env | envsubst < postman_env.json > postman_env_exec.json
