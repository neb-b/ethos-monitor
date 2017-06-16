import React, { Component } from 'react';
import { AppRegistry, Platform } from 'react-native';
import App from "./src/app"

global.OS = Platform.OS;

AppRegistry.registerComponent('ethOSMonitor', () => App);
