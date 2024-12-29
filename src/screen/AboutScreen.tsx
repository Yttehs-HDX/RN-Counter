/**
 * About Screen
 */

import Card from '../component/Card.tsx';
import {Animated, Text, View} from 'react-native';
import Image = Animated.Image;

export const AboutScreen = () => {
    return (
        <View>
            <Card>
                <Image source={require('../../assets/images/ic_launcher_round.png')}></Image>
            </Card>
            <Card>
                <Text>Counter</Text>
            </Card>
            <Card>
                <Text>Yttehs-HDX@Github</Text>
            </Card>
        </View>
    );
};
