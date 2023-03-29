import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonGrey2(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.인증번호보내기}>인증번호 보내기</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8E8E93",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  인증번호보내기: {
    color: "#fff",
    fontSize: 10
  }
});

export default CupertinoButtonGrey2;
