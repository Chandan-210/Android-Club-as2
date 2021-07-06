import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useIsFocused } from '@react-navigation/core';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  navigation.setOptions({
    headerRight: () => (
      <Button
        title="Save"
        onPress={() => {
          //save the changes
          navigation.replace("Home");
        }}
      />
    )
  });
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>HomeScreen</Text>
      <Button
        title="19BCE1004- SETTINGS"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};
const SettingsScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: isFocused ? "green" : "black" }}>
        SettingsScreen
      </Text>
      <Button title="19BCE1004 - HOME SCREEN" onPress={() => navigation.goBack()} />
    </View>
  );
};
export default function App() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ title: "19BCE1004 - HOME" }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffF',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
