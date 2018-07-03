import React from "react";
import { Formik } from 'formik';
import * as Yup from 'yup'
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button, FormLabel, FormInput, FormValidationMessage } from "react-native-elements";
import { Icon, Container, Header, Content, Left } from 'native-base';

export class SignupScreen extends React.Component {

  static navigationOptions = {
    title: 'Signup',
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon name="ios-menu" onPress={() => {
              this.props.navigation.openDrawer()
            }} />
          </Left>
        </Header>
        <Formik
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required('Dont forget to enter a valid email'),
            username: Yup.string()
              .min(3)
              .required("Don't forget to enter a valid username"),
            password: Yup.string()
              .min(6)
              .required("Don't forget to enter a valid password"),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref('password'), null], 'Passwords must match')
              .required("Don't forget to confirm your password"),
          })}
          initialValues={{
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={this._handleSubmit}
          render={({
            handleSubmit,
            isSubmitting,
            handleChange,
            errors,
            touched,
            handleBlur,
            isValid,
          }) => (
              <View className="input-container">
                <Text>Signup</Text>
                <FormInput>
                  <TextInput
                    className="single-input"
                    onChange={handleChange}
                    name="email"
                    label="Email"
                    placeholder="Email here..."
                    onBlur={handleBlur}
                  />
                  {errors.email &&
                    touched.email && (
                      <View className="error-messages">{errors.email}</View>
                    )}
                  <TextInput
                    className="single-input"
                    onChange={handleChange}
                    name="username"
                    label="Username"
                    placeholder="Username here..."
                    onBlur={handleBlur}
                  />
                  {errors.username &&
                    touched.username && (
                      <View className="error-messages">{errors.username}</View>
                    )}
                  <TextInput
                    className="single-input"
                    onChange={handleChange}
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="Password here"
                    onBlur={handleBlur}
                  />
                  {errors.password &&
                    touched.password && (
                      <View className="error-messages">{errors.password}</View>
                    )}
                  <TextInput
                    type="password"
                    className="single-input"
                    onChange={handleChange}
                    name="confirmPassword"
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    onBlur={handleBlur}
                  />
                  {errors.confirmPassword &&
                    touched.confirmPassword && (
                      <View className="error-messages">
                        {errors.confirmPassword}
                      </View>
                    )}
                  <Button
                    onPress={this.props.handleSubmit}
                    className="submit blue push_button"
                    disabled={!isValid}>
                    Submit
                </Button>
                </FormInput>
              </View>
            )}
        />
      </Container>
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