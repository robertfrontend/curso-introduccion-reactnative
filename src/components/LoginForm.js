import React from "react";
import PropTypes from "prop-types";
import { TextInput, Button, Text, View } from "react-native";

export default function LoginForm(props) {
  const { name } = props;

  return (
    <>
      <View>
        <Text>{name}</Text>
        <TextInput placeholder="placeholder..." />
        <Button title="Enviar" onPress={() => console.log("hola world")} />
      </View>
    </>
  );
}

LoginForm.PropTypes = {
  name: PropTypes.string,
};

LoginForm.defaultProps = {
  name: "Login Form",
};
