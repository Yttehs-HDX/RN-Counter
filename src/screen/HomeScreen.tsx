/**
 * Home Screen
 */

import {Animated, StyleSheet, Text, TouchableOpacity} from 'react-native';
import View = Animated.View;
import React from 'react';
import numViewModel from '../viewmodel/NumberViewModel.ts';
import {observer} from 'mobx-react-lite';

export const HomeScreen = observer(() => {
    const num = numViewModel.getNum();
    return (
        <View style={styles.primaryContainer}>
            <NumberButton num={num.getNum()} onPress={numViewModel.increaseNum}/>
        </View>
    );
});

type NumberButtonProps = {
    num: number,
    onPress: () => void,
};

const NumberButton = (props: NumberButtonProps) => {
    return (
        <TouchableOpacity
            style={styles.secondaryContainer}
            onPress={props.onPress}>
            <Text style={styles.buttonText}>
                {props.num}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondaryContainer: {
        backgroundColor: 'lightblue',
        padding: 30,
        borderRadius: 90,
        overflow: 'hidden',
    },
    buttonText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});
