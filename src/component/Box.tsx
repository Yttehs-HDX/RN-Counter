/**
 * Box Component
 */

import {StyleSheet, View} from 'react-native';
import React from 'react';

const Box = ({children}: {children: React.ReactNode}) => {
    return (
        <View style={styles.boxDefault}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    boxDefault: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Box;
