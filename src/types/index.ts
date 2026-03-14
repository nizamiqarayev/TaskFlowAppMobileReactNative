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

export { Task, TaskItemProps };
