#!/bin/bash
if [ -e "src/environments/environment.ts" ] ; then
  sed -i '' "s/version:.*/version: \'$(git rev-parse --short HEAD)\',/" src/environments/environment.ts
fi

