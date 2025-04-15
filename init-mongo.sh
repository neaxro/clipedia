#!/bin/bash

# Wait for MongoDB to fully start
sleep 5

echo "Importing commands..."
mongoimport --username root --password pass --authenticationDatabase admin \
  --db clipedia --collection commands --file /data/import/clipedia.commands.json --jsonArray

echo "Importing groups..."
mongoimport --username root --password pass --authenticationDatabase admin \
  --db clipedia --collection groups --file /data/import/clipedia.groups.json --jsonArray
