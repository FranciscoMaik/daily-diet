import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "@screens/Home";
import Statistics from "@screens/Statistics";
import NewDiet from "@screens/NewDiet";
import Details from "@screens/Details";
import EditDiet from "@screens/EditDiet";

import type { PublicStack } from "./types";

const Stack = createNativeStackNavigator<PublicStack>();

const Public: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="statistics" component={Statistics} />
        <Stack.Screen name="newDiet" component={NewDiet} />
        <Stack.Screen name="details" component={Details} />
        <Stack.Screen name="editDiet" component={EditDiet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Public;
