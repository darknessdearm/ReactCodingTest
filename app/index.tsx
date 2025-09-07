import React, { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";

import ScrollView from "@/components/ScrollView";
import TaskItem from "@/components/TaskItem";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const mockData = [
  {
    id: "ITEM_01",
    title: "React Native Project",
    isChecked: false,
  },
  {
    id: "ITEM_02",
    title: "Have a Header: To-Do List",
    isChecked: false,
  },
  {
    id: "ITEM_03",
    title: "Add UI component",
    isChecked: false,
  },
];

export default function HomeScreen() {
  const [newItem, setNewItem] = useState("");
  const [data, setData] = useState(mockData);

  // this function will toggle the checked state of an item
  const handleCheck = (id: string, checked: boolean) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isChecked: checked } : item
      )
    );
  };

  // this function will add a new item to the list
  const handleAddItem = () => {
    if (!newItem.trim()) return;
    setData((prev) => [
      ...prev,
      {
        id: `ITEM_${prev.length + 1}`,
        title: newItem,
        isChecked: false,
      },
    ]);
    setNewItem("");
  };

  // this function will delete an item from the list
  const handleDeleteItem = (id: string) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ScrollView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Here is your To-do List!</ThemedText>
      </ThemedView>
      {/* this section is add new task section */}
      <ThemedText type="subtitle">Add new task</ThemedText>
      <View style={styles.addItemContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter new task name"
          value={newItem}
          onChangeText={setNewItem}
        />
        <Button title="Add" onPress={handleAddItem} />
      </View>
      {/* this section is task list section */}
      <ThemedText type="subtitle">Task Item List</ThemedText>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <TaskItem
            title={`${(index + 1).toString()} - ${item.title}`}
            id={item.id}
            isChecked={item.isChecked}
            onValueChange={(checked) => handleCheck(item.id, checked)}
            onDelete={() => handleDeleteItem(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  addItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 8,
    gap: 8,
  },
  inputText: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
    backgroundColor: "#fff",
  },
});
