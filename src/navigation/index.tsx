import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { ContactScreen } from "../screen/Contact";
import { ContactListScreen } from "../screen/ContactList";

const Stack = createStackNavigator();

const Navigation = ({ }) => {
    const routeNameRef = React.useRef();
    const navigationRef = React.useRef();
  
    return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName="ContactScreen">
           <Stack.Screen
              name="ContactScreen"
              component={ContactScreen}
              options={{
                animationTypeForReplace: "push",
              }}
            />
            <Stack.Screen
              name="ContactListScreen"
              component={ContactScreen}
              options={{
                animationTypeForReplace: "push",
              }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default Navigation;