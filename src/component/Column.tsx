/**
 * Column Component
 */

import {StyleSheet, View} from 'react-native';
import React from 'react';

const Column = ({children}: {children: React.ReactNode}) => {
    return (
        <View style={styles.columnDefault}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    columnDefault: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
});

export default Column;
