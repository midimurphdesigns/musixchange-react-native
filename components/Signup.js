import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, FormLabel, FormInput, FormValidationMessage } from "react-native-elements";

export class Signup extends React.Component {

  static navigationOptions = {
    title: 'Signup',
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.boxContainerText}>
          <Text style={styles.text}>Login</Text>
        </View>

        <View style={styles.boxContainerText}>
          <FormLabel>Username</FormLabel>
          <FormLabel>Password</FormLabel>
          <FormInput />
          <FormValidationMessage>Error message</FormValidationMessage>
          <Button
            onPress={() => navigate('Login')}
            backgroundColor="blue"
            large
            raised
            iconRight={{
              name: "sign-in",
              type: "font-awesome",
              buttonStyle: styles.boxContainer
            }}
            title="Signup"
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    // justifyContent: "center"
  },
  boxContainer: {
    padding: 20,
    flex: 1,
    justifyContent: "space-around"
  },
  boxContainerText: {
    // padding: 20,
    alignItems: "center",
    flex: 4,
    justifyContent: "center"
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    // margin: 20,
  }
});