/**
 * About Screen
 */

import Card from '../component/Card.tsx';
import {Animated, StyleSheet, Text, View} from 'react-native';
import Image = Animated.Image;
import Box from '../component/Box.tsx';
import Icon from '@react-native-vector-icons/material-icons';
import Spacer from '../component/Spacer.tsx';

export const AboutScreen = () => {
    return (
        <View>
            <AppInfo/>
            <Card>
                <Icon name="cloud" size={20}></Icon>
                <Spacer style={styles.spacer}/>
                <Text>Yttehs-HDX@Github</Text>
            </Card>
            <Card>
                <Icon name="info" size={20}></Icon>
                <Spacer style={styles.spacer}/>
                <Text>Version: 1.0.0</Text>
            </Card>
        </View>
    );
};

const AppInfo = () => {
    return (
        <Card>
            <Image source={require('../../assets/images/ic_launcher_round.png')}></Image>
            <Box>
                <Text style={styles.appName}>Counter</Text>
            </Box>
        </Card>
    );
};

const styles = StyleSheet.create({
    appName: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    spacer: {
        width: 16,
    },
});
