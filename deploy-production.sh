#!bin/bash

npm install
npm run build
cp -a build/. /var/www/html/
echo "Deploy production mode successfully"
# run deploy command