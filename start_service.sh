#!/bin/bash

BIN_ROOT="/usr/bin"
APPLICATION_ROOT="/home/pi/ishetonline"

# Start application
echo "Starting Is Het Online application"
NODE_ENV=production $BIN_ROOT/node $APPLICATION_ROOT/server.js
