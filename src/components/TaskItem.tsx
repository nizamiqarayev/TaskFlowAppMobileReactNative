import { View, Text } from "react-native";
import React from "react";
import { TaskItemProps } from "../types";

const TaskItem = ({ item, onToggle, onDelete }: TaskItemProps) => {
  return (
    <View>
      <Text>TaskItem</Text>
    </View>
  );
};

export default TaskItem;
