/**
 * Card Component
 */

import {Animated, StyleSheet} from 'react-native';
import View = Animated.View;
import React from 'react';
import Row from './Row.tsx';

const Card = ({children}: {children: React.ReactNode}) => {
    return (
        <View style={styles.cardContainer}>
            <Row>
                {children}
            </Row>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFFFFF',
        // iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        // Android
        elevation: 3,
        borderRadius: 8,
        padding: 16,
        margin: 8,
    },
});

export default Card;
