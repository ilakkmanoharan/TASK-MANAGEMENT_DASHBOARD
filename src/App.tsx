import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import Layout from './components/Layout';
import { Task } from './types/Task';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'all' | 'low' | 'medium' | 'high'>('all');

  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <Layout>
      <TaskForm onAddTask={addTask} />
      <FilterBar onFilterChange={setFilter} />
      <TaskList tasks={tasks} filter={filter} />
    </Layout>
  );
};

export default App;
