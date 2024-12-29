/**
 * Spacer Component
 */

import {StyleProp, View, ViewStyle} from 'react-native';

const Spacer = ({style}: {style: StyleProp<ViewStyle>}) => {
    return (
        <View style={style}/>
    );
};

export default Spacer;
