import React, { useState } from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

export default function App() {

  const [outputText ,setOutputText ] = useState('Hello World !');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title = "Change Text" onPress = {() => setOutputText('Hello Naveen')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
