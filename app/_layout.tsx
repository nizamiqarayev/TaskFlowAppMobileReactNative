import { Stack } from "expo-router";
import { TaskProvider } from "../src/context/TaskContext";

export default function RootLayout() {
  return (
    <TaskProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "My Tasks" }} />
      </Stack>
    </TaskProvider>
  );
}
