interface Task {
  id: string;
  title: string;
  completed: boolean;
}
interface TaskItemProps {
  item: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export { Task, TaskItemProps, TaskContextType };
