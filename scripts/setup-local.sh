#!/bin/bash
if [ ! -e "src/environments/environment.ts" ] ; then
    cp src/environments/environment.example.ts src/environments/environment.ts
fi

sh scripts/update-version.sh
nvm use
