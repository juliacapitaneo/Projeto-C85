import React, { Component } from "react";
import BottomTabNavigator from "./components/BottomTabNavigator";
import {createSwitchNavigator, createAppContainer } from "react-navigation”;

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppSwitchNavigator = createSwitchNavigator(
  {
  Login: { screen: LoginScreen},
  BottomTab: { screen: BottomTabNavigator }
  },
  {
  initialRouteName: "Login"
  }

)

const AppContainer = createAppContainer(AppSwitchNavigator);
