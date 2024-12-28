/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme, View,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <View style={backgroundStyle}>
        <View style={styles.primaryContainer}>
          <View style={styles.secondaryContainer}>
            <Text>
              Hello World
            </Text>
          </View>
        </View>
      </View>
  );
}

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
});

export default App;
