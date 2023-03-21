#!bin/bash

yarn
yarn build
cp -a build/. /var/www/html/
echo "Deploy production mode successfully"
# run deploy command