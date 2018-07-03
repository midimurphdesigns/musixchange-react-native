import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { FormInput, FormLabel, FormValidationMessage } from 'react-native-elements';

class Input extends PureComponent {
  state = {};
  render() {
    const { label, ...rest } = this.props;
    return (
      <View style={styles.root}>
        <FormLabel>{label}</FormLabel>
        <FormInput placeholder={label} {...rest} />
        <FormValidationMessage>Error</FormValidationMessage>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  root: {
    width: '90%',
    alignSelf: 'center',
  }
})

export default Input;