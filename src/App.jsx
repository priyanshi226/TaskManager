import { useState } from 'react';
import Header from './Components/Header';
import './App.css';
import KanbanBoard from './components/KanbanBoard';
import CreateTask from './components/CreateTask';

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('kanbanTasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('kanbanTasks', JSON.stringify(updatedTasks));
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('kanbanTasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('kanbanTasks', JSON.stringify(updatedTasks));
  };

  const [selectedTask, setSelectedTask] = useState(null);
  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleClosePopup = () => {
    setSelectedTask(null);
  };

  return (
    <div className="App min-h-screen flex flex-col">
      <Header onAddTask={addTask} />
      <div className="kanban-container flex-grow mt-6 mx-auto w-full max-w-screen-lg">
        <KanbanBoard tasks={tasks} onTaskClick={handleTaskClick} onDeleteTask={deleteTask} />
      </div>
      {selectedTask && (
        <CreateTask
          onClose={handleClosePopup}
          taskToEdit={selectedTask}
          onAddTask={addTask}
          onUpdateTask={updateTask}
        />
      )}
    </div>
  );
}

export default App;
