#!/bin/bash
# Use the node version specified in .nvmrc
#!/bin/bash
#source ~/.nvm/nvm.sh  # Adjust the path if your nvm installation is in a different location
#nvm use // has to be run manually, because CI runs it too

# Copy the example environment file if it doesn't exist
if [ ! -e "src/environments/environment.ts" ] ; then
    cp src/environments/environment.example.ts src/environments/environment.ts
fi

# Create the SSL certificate if it doesn't exist
if [ ! -e "local.bims.dmithamo.dev.pem" ] ; then
  brew install mkcert nss # requires homebrew, and runs in sudo
  mkcert -install
  mkcert local.bims.dmithamo.dev
fi
