#!/bin/bash
if [ -e ".env" ] ; then
  sed -i '' "s/NG_APP_VERSION=.*/NG_APP_VERSION=$(git rev-parse --short HEAD),/" .env
fi

