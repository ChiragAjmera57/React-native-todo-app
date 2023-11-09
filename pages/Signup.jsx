import React, { useEffect, useRef, useState } from "react";
import {
  BackHandler,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SvgXml } from "react-native-svg";
import { svgXmlData, svglock, userLogo } from "../assets/svgs";
import { Bar } from "../component/Bar";
import { ComponentPop } from "../component/ComponentPop";
import { BlurView } from "@react-native-community/blur";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const inputref = useRef(null);
  const handleLogin = () => {
    console.log("Logging in with:", username, password);
  };

  const handleGoogleLogin = () => {
    // Implement Google login here
    console.log("Logging in with Google");
  };

  const handleAppleLogin = () => {
    // Implement Apple login here
    console.log("Logging in with Apple");
  };

  const handleForgotPassword = () => {
    // Implement your "Forgot Password" logic here
    console.log("Forgot Password");
  };
  const handleBackButton = () => {
    console.log(`back clicked`);
    Keyboard.dismiss(() => {
      inputref.current.blur();
    });
    // Handle your back button logic (e.g., navigate back)
    return false; // Return false to prevent the default behavior
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, []);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <LinearGradient colors={["#1253AA", "#05243E"]} style={styles.container}>
      <Bar />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
       
        onRequestClose={() => setModalVisible(false)}
      >
      

          <ComponentPop />
       
       
      </Modal>
      <View style={[styles.view1,modalVisible?{display:'none'}:{}]}>
        <Image style={styles.img} source={require("../img/Checkmark.png")} />
        <Text style={styles.head}>Welcome to DO IT </Text>
        <Text style={styles.head2}>create an account and Join us now!</Text>
      </View>
      <KeyboardAvoidingView style={[styles.inputsBox, { zIndex: 5 },modalVisible?{display:'none'}:{}]}>
        <View style={[styles.inputContainer]}>
          <View style={styles.inputWrapper}>
            <SvgXml xml={userLogo} width="20" height="20" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              autoCapitalize="none"
              maxLength={30}
              placeholderTextColor="rgba(0, 0, 0, 0.44)"
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={[styles.inputWrapper]}>
            <SvgXml
              xml={svgXmlData}
              width="20"
              height="20"
              style={styles.icon}
            />
            <TextInput
              ref={inputref}
              style={styles.input}
              placeholder="Email Address"
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="rgba(0, 0, 0, 0.44)"
              maxLength={30}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <SvgXml xml={svglock} width="20" height="20" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize="none"
              maxLength={30}
              placeholderTextColor="rgba(0, 0, 0, 0.44)"
            />
          </View>
        </View>

        <TouchableOpacity onPress={()=>setModalVisible(true)}  style={styles.btn}>
          <Text style={{ color: "white" }}>Sign up</Text>
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            textAlign: "center",
            marginTop: 15,
            color: "white",
          }}
        >
          Already have an account? sign in
        </Text>
      </KeyboardAvoidingView>
      <View
        style={[styles.view3, isKeyboardVisible ? { display: "none" } : {},modalVisible?{display:'none'}:{}]}
      >
        <View
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            height: "30%",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "Poppins-Regular" }}>Sign In with:</Text>
          <View style={styles.imgContainer}>
            <Image
              style={styles.bottomLogo}
              source={require("../img/Apple-Logo.png")}
            />
          </View>
          <View style={styles.imgContainer}>
            <Image
              style={styles.bottomLogo}
              source={require("../img/Google.png")}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    textTransform: "none",
    // display:'none'
  },
  head: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "500",
    fontFamily: "Poppins-SemiBold",
    textAlign: "left",
  },
  view1: {
    width: "100%",
    gap: 15,
    alignItems: "center",
    flex: 1,
    marginTop: 50,
    textAlign: "left",
    marginBottom: 15,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    height: 40,
    backgroundColor: "white",
    padding: 10,
    marginBottom: 30,
  },
  head2: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Poppins-Light",
    textAlign: "left",
  },
  img: { width: 70, height: 70 },
  input: {
    color: "rgba(0, 0, 0, 0.8)",
    padding: -7,
    fontSize: 15,
    marginLeft: 5,
    height: 40,
    width: "90%",
  },

  btn: {
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
    width: "95%",
    justifyContent: "center",
    backgroundColor: "#0EA5E9",
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },

  inputsBox: {
    width: "90%",
    marginBottom: 10,
    padding: 10,
    textAlign: "center",
    flex: 2,
  },
  view3: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    flex: 1,
  },
  bottomLogo: {
    padding: 5,
  },
  imgContainer: {
    width: 35,
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 7,
    marginLeft: 25,
  },
});
