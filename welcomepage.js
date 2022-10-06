import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Flatbuttonn from './buttonn';
import Signup from './signup';



const App = () => {
  return (
    <SafeAreaView>
      
    <View style={styles.body}>
      <Text style={styles.text1}>Welcome</Text>
      <Text style={styles.text2}>Please login or sign up to continue using our App.</Text>
      </View>
      <View>
      <Image style={styles.image1} source={require('foodblu/image/foodblu.png')}/>
      </View>
      <View style={styles.body}><Flatbuttonn text='Sign Up'  onPress={()=> Signup}/>
      <Text style={styles.text3}>You Already have an Account?  <Text style={{color: '#391593'}}>Log in</Text></Text>
    </View>
    </SafeAreaView>
  );
  };



const styles = StyleSheet.create({
  body: {
    justifyContent:'center',
  },
  text1: {
    marginTop: 40,
    marginLeft: 10,
    color: '#391593',
    fontSize: 40,
    fontWeight:'bold',
  },
  input: {
    marginTop: 120,
    color: '#391593',
  },
  text2:{
    color:'#1E1E1E',
    fontSize: 20,
    fontWeight:'italics',
    margin: 10,
    //color: '#391593'

  },
  text3:{
    color:'#1E1E1E',
    fontSize: 20,
    fontWeight:'italics',
    marginTop:35,
    marginLeft: 40,
    margin: 8,
    //color: '#391593'
},
image1:{
  width: 450, 
  height: 300,
  marginLeft:-25,
},
});

export default App;