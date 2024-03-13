#!/usr/bin/env bash
# Install and update Node.js and npm
sudo apt update && sudo apt install nodejs npm

# Install pm2 - production process manager for Node.js
sudo npm install -g pm2

# Change directory to SimpleApplication
cd SimpleApplication/

# Install all dependencies
npm install

# Save private key and the certificate
echo $PRIVATE_KEY > privatekey.pem
echo $SERVER > server.crt

# Start the app using pm2
pm2 start ./bin/www --name simple_app