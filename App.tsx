import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { CheckBox } from "react-native-elements";

export default function App() {
  const [emailValue, onChangeEmailText] = React.useState("Your Email");
  const [passowdValue, onChangePasswordText] = React.useState("Password");

  return (
    <View style={styles.container}>
      <View style={{ width: 300 }}>
        <View style={{ width: "100%" }}>
          <TextInput
            style={{
              height: 40,
              width: "100%",
              borderColor: "gray",
              borderWidth: 1,
              paddingLeft: 10,
              marginBottom: 5,
            }}
            onChangeText={(text) => onChangeEmailText(text)}
            value={emailValue}
          />
          <TextInput
            style={{
              height: 40,
              width: "100%",
              borderColor: "gray",
              borderWidth: 1,
              paddingLeft: 10,
              marginTop: 5,
            }}
            onChangeText={(text) => onChangePasswordText(text)}
            value={passowdValue}
          />
        </View>
        <View
          style={[
            {
              width: "100%",
              marginTop: 20,
            },
          ]}
        >
          <Button onPress={onPressSubmit} title="Submit" />
        </View>
        <View style={{ width: "100%", marginTop: 20 }}>
          <Separator />
        </View>
        <View
          style={{
            alignSelf: "center",
          }}
        >
          <CheckBox
            iconRight
            title="Keep me Logged in"
            checked={state.checked}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <Button onPress={onPressForgotPassword} title="FORGOT PASSWORD" />
          </View>
          <View
            style={{
              flex: 1,
            }}
          >
            <Button onPress={onPressRegister} title="REGISTER" />
          </View>
        </View>
      </View>
    </View>
  );

  function onPressSubmit() {}
  function onPressForgotPassword() {}
  function onPressRegister() {}

  function Separator() {
    return <View style={styles.separator} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
const state = {
  checked: true,
};
