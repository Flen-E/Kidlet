import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import CupertinoHeaderWithAddButton from "../components/CupertinoHeaderWithAddButton";
import CupertinoButtonGrey1 from "../components/CupertinoButtonGrey1";
import CupertinoButtonGrey2 from "../components/CupertinoButtonGrey2";
import CupertinoButtonLight1 from "../components/CupertinoButtonLight1";

function StudentSignUp(props) {
  return (
    <View style={styles.container}>
      <CupertinoHeaderWithAddButton
        style={styles.cupertinoHeaderWithAddButton}
      ></CupertinoHeaderWithAddButton>
      <Text style={styles.signUp}>학생 회원가입</Text>
      <View style={styles.rect}></View>
      <View style={styles.idRow}>
        <Text style={styles.id}>아이디</Text>
        <Text style={styles.아이디를입력해주세요}>아이디를 입력해주세요</Text>
        <CupertinoButtonGrey1
          style={styles.cupertinoButtonGrey1}
        ></CupertinoButtonGrey1>
      </View>
      <View style={styles.passwordRow}>
        <Text style={styles.password}>비밀번호</Text>
        <Text style={styles.비밀번호를입력해주세요6자리이상}>
          비밀번호를 입력해주세요(6자리이상)
        </Text>
      </View>
      <View style={styles.닉네임Row}>
        <Text style={styles.닉네임}>닉네임</Text>
        <Text style={styles.닉네임또는이름을입력해주세요}>
          닉네임 또는 이름을 입력해주세요
        </Text>
      </View>
      <View style={styles.이메일Row}>
        <Text style={styles.이메일}>이메일</Text>
        <Text style={styles.exAbcdef1234}>ex)abcdef1234</Text>
        <Text style={styles.loremIpsum}>@</Text>
        <Text style={styles.exNaverCom}>ex)naver.com</Text>
      </View>
      <CupertinoButtonGrey2
        style={styles.cupertinoButtonGrey2}
      ></CupertinoButtonGrey2>
      <View style={styles.인증번호Row}>
        <Text style={styles.인증번호}>인증번호</Text>
        <Text style={styles.인증번호를입력해주세요}>
          인증번호를 입력해주세요
        </Text>
      </View>
      <ImageBackground
        source={require("../assets/images/register.png")}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <CupertinoButtonLight1
          style={styles.cupertinoButtonLight1}
        ></CupertinoButtonLight1>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoHeaderWithAddButton: {
    height: 44,
    width: 360,
    marginTop: 24
  },
  학생회원가입: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 47,
    width: 360,
    textAlign: "center",
    fontSize: 25,
    marginTop: 13
  },
  rect: {
    width: 360,
    height: 1,
    backgroundColor: "rgba(10,10,10,1)",
    marginTop: 4
  },
  id: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 20,
    width: 48
  },
  아이디를입력해주세요: {
    fontFamily: "roboto-regular",
    color: "rgba(108,108,108,1)",
    height: 20,
    width: 201,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3,
    fontSize: 12,
    marginLeft: 4
  },
  cupertinoButtonGrey1: {
    width: 51,
    height: 20,
    marginLeft: 4
  },
  idRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 74,
    marginLeft: 39,
    marginRight: 13
  },
  password: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 20,
    width: 59
  },
  비밀번호를입력해주세요6자리이상: {
    fontFamily: "roboto-regular",
    color: "rgba(108,108,108,1)",
    height: 20,
    width: 201,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3,
    fontSize: 12,
    marginLeft: 4
  },
  passwordRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 28,
    marginRight: 68
  },
  닉네임: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 20,
    width: 59
  },
  닉네임또는이름을입력해주세요: {
    fontFamily: "roboto-regular",
    color: "rgba(108,108,108,1)",
    height: 20,
    width: 201,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3,
    fontSize: 12,
    marginLeft: 4
  },
  닉네임Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 28,
    marginRight: 68
  },
  이메일: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 20,
    width: 59
  },
  exAbcdef1234: {
    fontFamily: "roboto-regular",
    color: "rgba(108,108,108,1)",
    height: 20,
    width: 103,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3,
    fontSize: 12,
    marginLeft: 4
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 20,
    width: 16,
    marginLeft: 4
  },
  exNaverCom: {
    fontFamily: "roboto-regular",
    color: "rgba(108,108,108,1)",
    height: 20,
    width: 85,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3,
    fontSize: 12
  },
  이메일Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 28,
    marginRight: 61
  },
  cupertinoButtonGrey2: {
    height: 20,
    width: 79,
    marginTop: 4,
    marginLeft: 221
  },
  인증번호: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 20,
    width: 59
  },
  인증번호를입력해주세요: {
    fontFamily: "roboto-regular",
    color: "rgba(108,108,108,1)",
    height: 20,
    width: 201,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3,
    fontSize: 12,
    marginLeft: 4
  },
  인증번호Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 28,
    marginRight: 68
  },
  image: {
    width: 413,
    height: 319,
    marginTop: 26,
    marginLeft: -27
  },
  image_imageStyle: {},
  cupertinoButtonLight1: {
    height: 44,
    width: 100,
    marginLeft: 157
  }
});

export default StudentSignUp;
