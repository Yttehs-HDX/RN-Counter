/**
 * About Screen
 */

import Card from '../component/Card.tsx';
import {Animated, StyleSheet, Text, View} from 'react-native';
import Image = Animated.Image;
import Box from '../component/Box.tsx';

export const AboutScreen = () => {
    return (
        <View>
            <AppInfo/>
            <Card>
                <Text>Yttehs-HDX@Github</Text>
            </Card>
            <Card>
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
});
