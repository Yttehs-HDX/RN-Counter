/**
 * App Navigator
 */

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DestinationsConfig} from './destinations.ts';
import {HomeScreen} from './screen/HomeScreen.tsx';
import {AboutScreen} from "./screen/AboutScreen.tsx";

const Tab = createBottomTabNavigator();

export const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={DestinationsConfig.Home.route}
                screenOptions={{
                    headerShown: false,
                }}>
                <Tab.Screen
                    name={DestinationsConfig.Home.route}
                    component={HomeScreen}
                    options={{
                        tabBarLabel: DestinationsConfig.Home.title,
                    }}/>
                <Tab.Screen
                    name={DestinationsConfig.About.route}
                    component={AboutScreen}
                    options={{
                        tabBarLabel: DestinationsConfig.About.title,
                    }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};
