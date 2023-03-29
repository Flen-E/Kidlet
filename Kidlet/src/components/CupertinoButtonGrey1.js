import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonGrey1(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.중복확인2}>중복확인</Text>
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
  중복확인2: {
    color: "#fff",
    fontSize: 10
  }
});

export default CupertinoButtonGrey1;
