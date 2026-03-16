import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TaskItemProps } from "../types";
import { Link } from "expo-router";

export const TaskItem = ({ item, onToggle, onDelete }: TaskItemProps) => (
  <View style={styles.taskItem}>
    <Link href={`/task/${item.id}`} asChild>
      <TouchableOpacity style={{ flex: 1 }}>
        <Text
          style={{
            textDecorationLine: item.completed ? "line-through" : "none",
          }}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
    </Link>
    <TouchableOpacity onPress={() => onDelete(item.id)}>
      <Text style={{ color: "red" }}>Delete</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  taskItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
});
