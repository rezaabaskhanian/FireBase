/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';

const App =  () => {
  const [users,setUsers]=useState([]);
  const fetchPost = async () => {
       
    await firestore().collection('users').get()
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => doc.data());
                setUsers(newData);                
        })
   
}
  useEffect(() => {
    fetchPost()
  }, [])
  
  return (
    <SafeAreaView >
      <ScrollView  >
        <View>
            {users.map ((user ,i)=> ( 
                <View key={i}>
                  <Text>{user.username}</Text>
                  <Text>{user.email}</Text>
                </View>
            )
            )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;
