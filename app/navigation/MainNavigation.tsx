import React from "react";

import SigninScreen from "../screens/SigninScreen";
import TabNavigation from "./TabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import SignupScreen from "../screens/SignupScreen";
import { createStackNavigator } from "@react-navigation/stack";

const MainNavigation = () => {
  const { user } = useContext(AuthContext);

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          <>
            <Stack.Screen name="Signin" component={SigninScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        ) : (
          <Stack.Screen name="Tab" component={TabNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
