import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import { useTaskContext } from "../../src/context/TaskContext";

export default function TaskDetailScreen() {
  // This hook grabs the [id] from the URL!
  const { id } = useLocalSearchParams();
  const { tasks } = useTaskContext();

  // Find the specific task
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return <Text style={styles.error}>Task not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Task Details" }} />
      <Text style={styles.title}>{task.title}</Text>
      <Text>Status: {task.completed ? "✅ Done" : "❌ Pending"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  error: { fontSize: 18, color: "red", marginTop: 20, textAlign: "center" },
});
