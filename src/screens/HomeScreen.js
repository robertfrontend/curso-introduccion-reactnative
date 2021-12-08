import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToPage = (page) => {
    navigation.navigate(page);
  };
  const openNavigation = () => {
    navigation.openDrawer();
  };

  return (
    <SafeAreaView>
      <Text>Estamos en Home Screen</Text>
      <Text>Estamos en Home Screen</Text>
      <Text>Estamos en Home Screen</Text>
      <Text>Estamos en Home Screen</Text>
      <Text>Estamos en Home Screen</Text>
      <Text>Estamos en Home Screen</Text>
      <Text>Estamos en Home Screen</Text>
      <Text>Estamos en Home Screen</Text>
      <Text>Estamos en Home Screen</Text>
      <Text>Estamos en Home Screen</Text>
      <Text>Estamos en Home Screen</Text>
      <Button onPress={() => goToPage("Settings")} title="Ajustes" />
      <Button onPress={() => openNavigation()} title="Open Navigation" />
    </SafeAreaView>
  );
}
