

import React, { useState } from 'react';

import {
  
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';

const App=()=> {
  const [name,setName]=useState();

  return (
  <View>
    <Text style={{fontSize:30}}>Handle Text Input</Text>
    <Text style={{fontSize:30}}>Your Name Is:{name}</Text>
    <TextInput style={styles.textInput}
    placeholder='Enter your Name'
    value={name}
    onChangeText={(text)=>setName(text)}
    />
    <Button title='Clear Input Value' onPress={()=>setName('')}/>
  </View>
       
  );
}

const styles = StyleSheet.create({
  textInput:{
    fontSize:20,
    color:'orange',
    borderWidth:2,
    borderColor:'blue',margin:10
  }
 
});

export default App;
