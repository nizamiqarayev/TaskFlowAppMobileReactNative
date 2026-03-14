import { useTaskContext } from "../context/TaskContext";
import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import { TaskItem } from "../components/TaskItem";

function TaskScreen() {
  const { tasks, addTask, toggleTask, deleteTask } = useTaskContext();
  const [text, setText] = useState<string>("");
  const handleAdd = () => {
    if (text.trim().length === 0) return;
    addTask(text.trim());
    setText("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Tasks</Text>
      <View style={{ flex: 1, width: "100%" }}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={{ textAlign: "center", marginTop: 20 }}>
              No tasks yet
            </Text>
          }
          renderItem={({ item }) => (
            <TaskItem item={item} onToggle={toggleTask} onDelete={deleteTask} />
          )}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Add a task"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
      <StatusBar />
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

export default TaskScreen;
