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

export class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "LoginScreen",
    drawerIcon: <Icon name="person" color="#00aced" />
  };

  // navigate = this.props.navigation.actions.navigate;

  _handleSubmit = async (values, bag) => {
    AuthServices.login(values)
      .then(res => {
        bag.setSubmitting(false);
        this.props.dispatch(storeAuthInfo(res.authToken));
        this.props.navigation.navigate("Main");
      })
      .catch(err => {
        bag.setSubmitting(false);
        this.setState({ error: true });
      });
  };

  render() {
    console.log('------------------------------------');
    console.log('login props', this.props.loggedIn);
    console.log('------------------------------------');
    // if (this.props.loggedIn) {
    //   this.props.navigation.push("Main");
    // }

    return (
      <View>
        <View style={styles.container}>
          <Formik
            initialValues={{
              username: "",
              password: ""
            }}
            onSubmit={this._handleSubmit}
            validationSchema={Yup.object().shape({
              username: Yup.string().required("Username is required"),
              password: Yup.string()
                .min(6)
                .required("Password is required")
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

export default connect(mapStateToProps)(LoginScreen);
