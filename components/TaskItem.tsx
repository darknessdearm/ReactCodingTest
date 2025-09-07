import Checkbox from "expo-checkbox";
import { Button, StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";

type ItemProps = {
  title: string;
  id: string;
  isChecked: boolean;
  onValueChange: (checked: boolean) => void;
  onDelete: () => void;
};

export default function TaskItem({
  title,
  id,
  isChecked,
  onValueChange,
  onDelete,
}: ItemProps) {
  return (
    <View style={styles.item}>
      <View style={styles.itemText}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={onValueChange}
          color={isChecked ? "#4630EB" : undefined}
        />
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </View>
      <Button title="Delete" color="#d11a2a" onPress={onDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
  itemText: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    margin: 8,
  },
});
