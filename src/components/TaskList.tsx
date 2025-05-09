import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../types/Task';

type TaskListProps = {
  tasks: Task[];
  filter: 'all' | 'low' | 'medium' | 'high';
};

const TaskList: React.FC<TaskListProps> = ({ tasks, filter }) => {
  const filteredTasks = filter === 'all' ? tasks : tasks.filter((task) => task.priority === filter);

  return (
    <div className="task-list">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
