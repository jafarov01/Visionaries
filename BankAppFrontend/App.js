import { StyleSheet } from "react-native";
import { Flex, NativeBaseProvider } from "native-base";
import MainPageScreen from "./src/MainPage/screens/MainPageScreen";
import QR from "./src/GroupPage/components/QR";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GroupPageMain from "./src/GroupPage/screens/GroupPageMain";
import CreateGroup from "./src/GroupPage/components/CreateGroup";
import QRCodeShow from "./src/GroupPage/components/QRCodeShow";
import AddBill from "./src/GroupPage/components/AddBill";
import GroupJarMain from "./src/GroupJar/screens/GroupJarMain";
import { store } from "./src/store/store";
import { Provider } from "react-redux";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Provider store={store}>
          <Flex backgroundColor={"#f2f5f7"} safeAreaTop>
            <Flex height={"100%"} width={"100%"}>
              <Stack.Navigator
                initialRouteName={"MainPage"}
                screenOptions={{
                  headerShown: false,
                }}
              >
                <Stack.Screen
                  name="MainPage"
                  component={MainPageScreen}
                ></Stack.Screen>
                <Stack.Screen
                  name="GroupPageMain"
                  component={GroupPageMain}
                ></Stack.Screen>
                <Stack.Screen name="QR" component={QR}></Stack.Screen>
                <Stack.Screen
                  name="CreateGroup"
                  component={CreateGroup}
                ></Stack.Screen>
                <Stack.Screen
                  name="QRCodeShow"
                  component={QRCodeShow}
                ></Stack.Screen>
                <Stack.Screen name="AddBill" component={AddBill}></Stack.Screen>
                <Stack.Screen
                  name="GroupJarMain"
                  component={GroupJarMain}
                ></Stack.Screen>
              </Stack.Navigator>
            </Flex>
          </Flex>
        </Provider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
