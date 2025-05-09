import React, { useState } from 'react';
import { Task } from '../types/Task';

type TaskFormProps = {
    onAddTask: (task: Task) => void;
};

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('low');
const [completed, setCompleted] = useState<boolean>(false);
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
        id: Date.now(),
        title,
        description,
        priority,
    };
    onAddTask(newTask);
    setTitle('');
    setDescription('');
    setPriority('low');
};

return (
    <form onSubmit={handleSubmit}>
    <div>
      <input
         type="text"
         placeholder="Task Title"
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         required
         />
    </div>
    <div>
     <textarea
     placeholder="Task Description"
     value={description}
     onChange={(e) => setDescription(e.target.value)}
        required
        />
    </div>
    <div>
        <select value={priority} onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
    </div>
    <button type="submit">Add Task</button>
    </form>
);
};

export default TaskForm;