import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Icon, Container, Header, Content, Left } from "native-base";
import { Button } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from "yup";

import { storeAuthInfo } from "../actions/auth";
import { AuthServices } from "../services/api";
import Input from "../commons/Input";

export class SignupScreen extends React.Component {
  static navigationOptions = {
    title: "SignupScreen",
    drawerIcon: <Icon name="person" color="#00aced" />
  };

  _handleSubmit = async (values, bag) => {
    console.log('submit this.props', this.props);
    AuthServices.signup(values)
      .then(res => {
        bag.setSubmitting(false);
        this.props.dispatch(storeAuthInfo(res.authToken));
        this.props.navigation.navigate("PostsScreen");
      })
      .catch(err => {
        bag.setSubmitting(false);
        this.setState({ error: true });
      });
  };

  render() {
    if (this.props.loggedIn) {
      return this.props.navigation.actions.navigate("OnboardingScreen");
    }

    return (
      <View>
        {/* <Header style={styles.header}>
          <Left>
            <Icon
              name="ios-menu"
              onPress={() => {
                this.props.navigation.openDrawer();
              }}
            />
          </Left>
        </Header> */}
        <View style={styles.container}>
          <Formik
            initialValues={{
              email: "",
              username: "",
              password: "",
              confirmPassword: ""
            }}
            onSubmit={this._handleSubmit}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Invalid email")
                .required("Email is required"),
              username: Yup.string().required("Username is required"),
              password: Yup.string()
                .min(6)
                .required("Password is required"),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref("password", null)], "Password must match")
                .required("Password confirmation is required")
            })}
            render={({
              values,
              handleSubmit,
              setFieldValue,
              errors,
              touched,
              setFieldTouched,
              isValid,
              isSubmitting
            }) => (
              <React.Fragment>
                <Input
                  label="Email"
                  autoCapitalize="none"
                  value={values.email}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="email"
                  error={touched.email && errors.email}
                />
                <Input
                  label="Username"
                  autoCapitalize="none"
                  value={values.username}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="username"
                  error={touched.username && errors.username}
                />
                <Input
                  label="Password"
                  autoCapitalize="none"
                  secureTextEntry
                  value={values.password}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="password"
                  error={touched.password && errors.password}
                />
                <Input
                  label="Confirm Password"
                  autoCapitalize="none"
                  secureTextEntry
                  value={values.confirmPassword}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="confirmPassword"
                  error={touched.confirmPassword && errors.confirmPassword}
                />
                <Button
                  onPress={handleSubmit}
                  buttonStyle={styles.button}
                  title="Submit"
                  disabled={!isValid || isSubmitting}
                  loading={isSubmitting}
                />
              </React.Fragment>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    // flex: 1,
  },
  button: {
    backgroundColor: "blue",
    marginTop: 20,
    width: "100%"
  }
});

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignupScreen);
