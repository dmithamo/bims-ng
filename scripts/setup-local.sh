#!/bin/bash
# Use the node version specified in .nvmrc
nvm use

# Copy the example environment file if it doesn't exist
if [ ! -e "src/environments/environment.ts" ] ; then
    cp src/environments/environment.example.ts src/environments/environment.ts
fi

# Create the SSL certificate if it doesn't exist
if [ ! -e "local.bims.dmithamo.dev" ] ; then
  brew install mkcert # requires homebrew, and runs in sudo
  mkcert -install
  mkcert local.bims.dmithamo.dev
fi

sh scripts/update-version.sh
