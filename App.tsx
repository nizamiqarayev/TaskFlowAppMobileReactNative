import React, { useState } from "react";
import { Task, TaskItemProps } from "./src/types";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState<string>("");

  const addTask = () => {
    if (text.trim().length === 0) return;
    const newTask: Task = {
      id: Date.now().toString(),
      title: text.trim(),
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const TaskItemView = ({ item, onToggle, onDelete }: TaskItemProps) => (
    <View style={styles.taskItem}>
      <TouchableOpacity onPress={() => onToggle(item.id)} style={{ flex: 1 }}>
        <Text
          style={{
            textDecorationLine: item.completed ? "line-through" : "none",
          }}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <Text style={{ color: "red" }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todays Tasks</Text>
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "60%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <View>
              <Text>No tasks yet</Text>
            </View>
          }
          renderItem={({ item }) => (
            <TaskItemView
              item={item}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          )}
        />
      </View>

      <StatusBar />
      <TextInput
        style={styles.input}
        placeholder="Add a task"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
  },
  taskItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    width: "100%",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
