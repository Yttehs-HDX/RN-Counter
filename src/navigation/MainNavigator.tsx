/**
 * App Navigator
 */

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DestinationsConfig} from './destinations.ts';
import {HomeScreen} from '../screen/HomeScreen.tsx';
import {AboutScreen} from '../screen/AboutScreen.tsx';
import Icon from '@react-native-vector-icons/material-icons';

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
                        tabBarIcon: ({color, size}) => (
                            <Icon name="home" color={color} size={size} />
                        ),
                    }}/>
                <Tab.Screen
                    name={DestinationsConfig.About.route}
                    component={AboutScreen}
                    options={{
                        tabBarLabel: DestinationsConfig.About.title,
                        tabBarIcon: ({color, size}) => (
                            <Icon name="info" color={color} size={size} />
                        ),
                    }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};
