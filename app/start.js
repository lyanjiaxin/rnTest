/* 
*为了兼容android与ios设置的统一程序入口
*/

import React, {Component} from "react";
import {AppRegistry} from "react-native";

//import HelloWorld from './helloworld/HelloWorld';
import FetchNetData from './fetch_demo/FetchNetData';



//AppRegistry.registerComponent('Test', () => HelloWorld);
AppRegistry.registerComponent('Test', ()=>FetchNetData);