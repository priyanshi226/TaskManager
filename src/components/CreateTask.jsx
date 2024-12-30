import React, { useState, useEffect } from 'react';

const CreateTask = ({ onClose, onAddTask, onUpdateTask, taskToEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('To-Do');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setPriority(taskToEdit.priority);
      setStatus(taskToEdit.status);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      const task = {
        id: taskToEdit?.id || Date.now(),
        title,
        description,
        priority,
        status,
      };

      if (taskToEdit) {
        onUpdateTask(task);
      } else {
        onAddTask(task);
      }
      onClose();
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]"
    >
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4 text-black">
          {taskToEdit ? 'Edit Task' : 'Create New Task'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-semibold mb-2 text-black">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-semibold mb-2 text-black">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="priority" className="block text-sm font-semibold mb-2 text-black">
              Priority
            </label>
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-black"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block text-sm font-semibold mb-2 text-black">
              Status
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-black"
            >
              <option value="To-Do">To-Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="flex justify-between items-center">
            <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>
              Close
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              {taskToEdit ? 'Update Task' : 'Add Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
