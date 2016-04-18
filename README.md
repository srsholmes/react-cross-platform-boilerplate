# react-hybrid-starter

The Boilerplate acts as a way for you to share code between a React web application and a React Native application, using redux for state management. Testing framework has been ommitted as everyone has a personal preference (mine is [Tape](https://github.com/substack/tape)).

### Getting up and running for web.

1. Run `npm i` from the root directory
2. Run `npm start`

### Getting up and running for React-Native.

0. Make sure you have all the relevant packages installed, follow [this setup guide](https://facebook.github.io/react-native/docs/getting-started.html#content)
1. Run `npm i` from `ApplicationNative/ApplicationNative` directory.
2. Run `npm install -g react-native-cli`.  
3. Run `react-native run-ios` for a first time set up which will compile the app for iOS simulator.
4. Run `react-native run-android` for a first time set up which will compile the app android simulator.

### Watch and rebuild for react-native
1. After you have run the above tasks you can run `npm native-start` to build the app for iOS and Android and watch/recompile the files on save. You will be able to access the project in the relevant simulator / device. 

### Screenshots

#### Web
![alt text](http://i.imgur.com/elYpFsr.jpg "Web React ")
#### Android
![alt text](http://i.imgur.com/asIGDlp.jpg "Android React Native")
#### iOS
![alt text](http://i.imgur.com/Gp3LDzh.jpg "iOS react Native")
