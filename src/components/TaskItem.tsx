import React from 'react';
import { Task } from '../types/Task';

type TaskItemProps = {
    task: Task;
   // onToggleComplete: (id: number) => void;
    //onDeleteTask: (id: number) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
    return (
        <div className={`task ${task.priority}`}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span className={`priority ${task.priority}`}>{task.priority}</span>
        </div>
    );
};

export default TaskItem;