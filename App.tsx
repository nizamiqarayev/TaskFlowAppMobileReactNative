import { TaskProvider } from "./src/context/TaskContext";
import TaskScreen from "./src/screens/TasksScreen";

export default function App() {
  return (
    <TaskProvider>
      <TaskScreen />
    </TaskProvider>
  );
}

