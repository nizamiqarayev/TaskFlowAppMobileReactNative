import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TaskItemProps } from "../types";
import { Link } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export const TaskItem = ({ item, onToggle, onDelete }: TaskItemProps) => (
  <View style={styles.taskItem}>
    <TouchableOpacity style={styles.checkbox} onPress={() => onToggle(item.id)}>
      <MaterialIcons
        name={item.completed ? "check-box" : "check-box-outline-blank"}
        size={24}
        color={item.completed ? "#4CAF50" : "#757575"}
      />
    </TouchableOpacity>
    <Link href={`/task/${item.id}`} asChild>
      <TouchableOpacity style={styles.content}>
        <Text style={[styles.title, item.completed && styles.titleCompleted]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    </Link>
    <TouchableOpacity
      onPress={() => onDelete(item.id)}
      style={styles.deleteBtn}
    >
      <Text style={styles.deleteText}>Delete</Text>
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
  checkbox: {
    width: 20,
    height: 20,

    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    color: "#333",
  },
  titleCompleted: {
    textDecorationLine: "line-through",
    color: "#999",
  },
  deleteBtn: {
    padding: 8,
    backgroundColor: "#FFEBEE",
    borderRadius: 6,
  },
  deleteText: {
    color: "#D32F2F",
    fontWeight: "600",
    fontSize: 12,
  },
});
