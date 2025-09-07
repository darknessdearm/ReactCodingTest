import { Button, StyleSheet, TextInput, useColorScheme } from "react-native";

import ScrollView from "@/components/ScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";

const colorScheme = useColorScheme();

export default function TabThirdScreen() {
  const [name, setName] = useState<string | undefined>("John");
  const [currentName, setCurrentName] = useState<string | undefined>("John");
  const handleOnPress = (value: string | undefined) => {
    setCurrentName(value);
  };
  const handleOnChange = (value: string | undefined) => {
    setName(value);
  };

  return (
    <ScrollView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">User Profile</ThemedText>
      </ThemedView>
      <ThemedText>Here is your profile, {currentName}</ThemedText>
      <ThemedText type="defaultSemiBold">Name</ThemedText>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleOnChange(value)}
        placeholder="Enter your username"
        defaultValue={name}
      />
      <Button onPress={() => handleOnPress(name)} title="Update" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: colorScheme === "dark" ? "#555" : "#ccc",
    borderRadius: 8,
    backgroundColor: colorScheme === "dark" ? "#333" : "#f9f9f9",
    color: colorScheme === "dark" ? "#fff" : "#222",
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
});
