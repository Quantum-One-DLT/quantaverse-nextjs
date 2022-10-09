#!/usr/bin/env bash
docker build -t auth0-nextjs-01-login .
docker run --init -p 3002:3002 -p 3003:3003 -it auth0-nextjs-01-login
