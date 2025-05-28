#!/bin/bash

set -e

PROJECT_NAME="myapp"

echo "Creating new React Native app with TypeScript..."
# avoids issues with the latest version of react-native-cli
npm uninstall -g react-native-cli @react-native-community/cli
npx @react-native-community/cli@latest init $PROJECT_NAME

cd $PROJECT_NAME
cd ios
pod install
cd ..

