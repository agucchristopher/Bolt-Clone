import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../assets/data";

const index = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text
        style={{
          textAlign: "center",
          marginTop: 45,
          fontFamily: "PBold",
          fontSize: 20,
        }}
      >
        Enter your number
      </Text>
      <View
        style={{
          alignSelf: "center",
          backgroundColor: "#F4F4F6",
          width: "90%",
          height: 60,
          marginTop: 15,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignContent: "center",
          borderRadius: 10,
        }}
      >
        <TouchableOpacity style={{ justifyContent: "center" }}>
          <Image
            source={require("../assets/ng.png")}
            style={{
              height: 35,
              width: 35,
              marginLeft: 15,
            }}
          />
        </TouchableOpacity>
        <TextInput
          style={{
            // backgroundColor: "purple",
            width: "85%",
            height: 55,
            paddingLeft: 15,
            fontFamily: "PMedium",
            fontSize: 18,
            includeFontPadding: true,
            alignSelf: "center",
          }}
          maxLength={11}
          keyboardType="number-pad"
          placeholder="+234"
        ></TextInput>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.primary,
          alignSelf: "center",
          width: "90%",
          height: 60,
          marginTop: 20,
          borderRadius: 55,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            justifyContent: "center",
            color: "white",
            fontFamily: "PBold",
            fontSize: 20,
          }}
        >
          Sign in
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          marginTop: 25,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            // borderTopWidth: 0.75,
            width: "40%",
            height: 1,
            alignContent: "center",
            justifyContent: "center",
            height: 30,
            // backgroundColor: "red",
          }}
        >
          <View
            style={{
              borderTopWidth: 0.75,
              width: "100%",
              height: 1,
              alignContent: "center",
              justifyContent: "center",
            }}
          />
        </View>

        <Text
          style={{
            fontFamily: "PMedium",
            fontSize: 16,
            // alignContent: "center",
            // justifyContent: "center",
            width: "10%",
            textAlign: "center",
            // backgroundColor: "red",
            height: "100%",
          }}
        >
          OR
        </Text>
        <View
          style={{
            // borderTopWidth: 0.75,
            width: "40%",
            height: 1,
            alignContent: "center",
            justifyContent: "center",
            height: 30,
            // backgroundColor: "red",
          }}
        >
          <View
            style={{
              borderTopWidth: 0.75,
              width: "100%",
              height: 1,
              alignContent: "center",
              justifyContent: "center",
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
