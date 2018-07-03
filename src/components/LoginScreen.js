import React from "react";
import { Formik } from 'formik';
import * as Yup from 'yup'
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button, FormLabel, FormInput, FormValidationMessage } from "react-native-elements";
import { Icon, Container, Header, Content, Left } from 'native-base';

import { storeAuthInfo } from '../actions/auth';
import { AuthServices } from '../services/api';

export class LoginScreen extends React.Component {

  static navigationOptions = {
    title: 'LoginScreen',
  };

  state = {
    error: false,
  };

  _handleSubmit = (values, bag) => {
    AuthServices.login(values)
      .then(res => {
        bag.setSubmitting(false);
        this.props.dispatch(storeAuthInfo(res.authToken));
      })
      .catch(err => {
        bag.setSubmitting(false);
        this.setState({ error: true });
      });
  };

  render() {
    if (this.state.error) {
      return (
        <Container>

          <Header>
            <Left>
              <Icon name="ios-menu" onPress={() => {
                this.props.navigation.openDrawer()
              }} />
            </Left>
          </Header>

          <Text>Something went wrong</Text>
        </Container>

      );
    }
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
            username: Yup.string()
              .min(3)
              .required("Don't forget to enter a valid username"),
            password: Yup.string()
              .min(6)
              .required("Don't forget to enter a valid password"),
          })}
          initialValues={{
            username: '',
            password: '',
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
                <Text>Login</Text>
                <Text>username: demo</Text>
                <Text>password: password123</Text>
                <FormInput>
                  <TextInput
                    onChangeText={text => this.props.setFieldValue('username', text)}
                    // error={errors.username && touched.username}
                    // value={this.props.values.username}
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
                    onChangeText={text => this.props.setFieldValue('password', text)}
                    // value={this.props.values.password}
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="Password here"
                    onBlur={handleBlur}
                  // error={errors.password && touched.password}
                  />
                  {errors.password &&
                    touched.password && (
                      <View className="error-messages">{errors.password}</View>
                    )}
                  <Button
                    onPress={this.props.handleSubmit}
                    title="Submit"
                    className="submit blue push_button"
                    disabled={!isValid}
                  // loading={isSubmitting}
                  >Submit</Button>
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