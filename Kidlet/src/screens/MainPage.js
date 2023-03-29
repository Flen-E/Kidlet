/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function MainPage({navigation}) {
  return (
    <View style = {styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps = "handled"
        contentContainerStyle={{
          flex : 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
            <View style = {styles.mainHeader}>
              <Text style = {styles.titleStyle}>
                안녕하세요, 반갑습니다!
              </Text>
              <Text style = {styles.subTitleStyle}>
                KIDLET에 오신 것을 환영합니다.
              </Text>
            </View>
           
            <TouchableOpacity
              style={styles.buttonStyleLogin}
              activeOpacity={0.5}
              // onPress={handleSubmitPress}
              >
              <Text style={styles.buttonTextStyle}>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyleRegister}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('StudentSignUp')}
              >
              <Text style={styles.buttonTextStyle}>학생회원가입</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyleRegister}
              activeOpacity={0.5}
              // onPress={handleSubmitPress}
              >
              <Text style={styles.buttonTextStyle}>교사회원가입</Text>
            </TouchableOpacity>
            
            <View style ={{alignItems: 'center'}}>
              <Image
                source = {require('../assets/images/welcome-img.png')}
                style={{
                  width: '100%',
                  height : 250,
                  marginTop : 60,
                  marginBottom : -180,
                }}
              />
            </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
  },
  mainHeader : {
    marginBottom : 100,
    margin: 10,
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  titleStyle : {
    fontSize: 33,
    fontWeight : 'bold',
    color: 'black',
  },
  subTitleStyle : {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  buttonStyleLogin: {
    backgroundColor: '#f64f69',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 50,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 30,
  },
  buttonStyleRegister: {
    backgroundColor: '#636363',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 50,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 30,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 7,
    fontSize: 25,
  },
});

export default MainPage;
