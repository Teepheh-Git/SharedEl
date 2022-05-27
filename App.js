import {StyleSheet} from 'react-native';
import {enableScreens} from "react-native-screens";
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Home from "./src/screens/firstTest/Home";
import Details from "./src/screens/firstTest/Details";
import Menu from "./src/screens/menu";
import LeagueMain from "./src/screens/leagueOfLegends/LeagueMain";
import LeagueDetails from "./src/screens/leagueOfLegends/LeagueDetails";

enableScreens()
const Stack = createSharedElementStackNavigator();


export default function App() {
    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>

                <Stack.Screen name={"Menu"} component={Menu} options={{
                    headerShown: true
                }}/>
                <Stack.Screen name={"Home"} component={Home}/>
                <Stack.Screen name={"LeagueMain"} component={LeagueMain}/>
                <Stack.Screen name={"LeagueDetails"} component={LeagueDetails}


                              sharedElements={(route, otherRoute, showing) => {
                                  // const {item} = route.params;
                                  return [{id: route.params.item.id, animation: 'move',}];
                                  // return [route.params.item.id,];
                              }}

                              options={() => ({
                                  // gestureEnabled: false,
                                  transitionSpec: {
                                      open: {animation: "timing", config: {duration: 500}},
                                      close: {animation: "timing", config: {duration: 500}}
                                  },
                                  cardStyleInterpolator: ({current: {progress}}) => {
                                      return {
                                          cardStyle: {
                                              opacity: progress
                                          }
                                      }
                                  }
                              })}
                />
                <Stack.Screen name={"Details"} component={Details}

                              sharedElements={(route, otherRoute, showing) => {
                                  // const {item} = route.params;
                                  // return [{id: route.params.item.id, animation: 'fade-in',}];
                                  return [route.params.item.id,];
                              }}

                              options={() => ({
                                  gestureEnabled: false,
                                  transitionSpec: {
                                      open: {animation: "timing", config: {duration: 500}},
                                      close: {animation: "timing", config: {duration: 500}}
                                  },
                                  cardStyleInterpolator: ({current: {progress}}) => {
                                      return {
                                          cardStyle: {
                                              opacity: progress
                                          }
                                      }
                                  }
                              })}/>

            </Stack.Navigator>

        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
