/*            {children}
*
 * Row Component
 */

import {StyleSheet, View} from 'react-native';
import React from 'react';

const Row = ({children}: {children: React.ReactNode}) => {
    return (
        <View style={styles.rowDefault}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    rowDefault: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
});

export default Row;
