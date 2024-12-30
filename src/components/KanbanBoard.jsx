import React from 'react';

const KanbanBoard = ({ tasks, onTaskClick, onDeleteTask }) => {
  
  const todoTasks = tasks.filter((task) => task.status === 'To-Do');
  const inProgressTasks = tasks.filter((task) => task.status === 'In Progress');
  const completedTasks = tasks.filter((task) => task.status === 'Completed');

  return (
    <div className="kanban-board flex justify-between mt-6 mx-4 space-x-4">
      
      <div className="kanban-column bg-blue-100 p-4 rounded shadow-md w-1/3">
        <h3 className="text-xl font-semibold text-center mb-4">To-Do</h3>
        {todoTasks.map((task) => (
          <div
            key={task.id}
            className="task-card bg-white p-4 rounded mb-4 shadow-sm relative cursor-pointer"
          >
            <div
              className="absolute top-2 right-2"
              onClick={(e) => {
                e.stopPropagation(); 
                onDeleteTask(task.id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500 hover:text-red-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-label="Delete Task"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-1 12a2 2 0 01-2 2H8a2 2 0 01-2-2L5 7m5 4v6m4-6v6M4 7h16M10 4h4m-4 0a1 1 0 00-1-1h-2a1 1 0 00-1 1h8a1 1 0 00-1-1h-2a1 1 0 00-1 1z"
                />
              </svg>
            </div>
            <div onClick={() => onTaskClick(task)} className="flex-1">
              <h4 className="font-bold">{task.title}</h4>
              <p>{task.description}</p>
              <span className="text-sm text-gray-500">{task.priority}</span>
            </div>
          </div>
        ))}
      </div>


      <div className="kanban-column bg-yellow-100 p-4 rounded shadow-md w-1/3">
        <h3 className="text-xl font-semibold text-center mb-4">In Progress</h3>
        {inProgressTasks.map((task) => (
          <div
            key={task.id}
            className="task-card bg-white p-4 rounded mb-4 shadow-sm relative cursor-pointer"
          >
            <div
              className="absolute top-2 right-2"
              onClick={(e) => {
                e.stopPropagation(); 
                onDeleteTask(task.id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500 hover:text-red-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-label="Delete Task"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-1 12a2 2 0 01-2 2H8a2 2 0 01-2-2L5 7m5 4v6m4-6v6M4 7h16M10 4h4m-4 0a1 1 0 00-1-1h-2a1 1 0 00-1 1h8a1 1 0 00-1-1h-2a1 1 0 00-1 1z"
                />
              </svg>
            </div>
            <div onClick={() => onTaskClick(task)} className="flex-1">
              <h4 className="font-bold">{task.title}</h4>
              <p>{task.description}</p>
              <span className="text-sm text-gray-500">{task.priority}</span>
            </div>
          </div>
        ))}
      </div>


      <div className="kanban-column bg-green-100 p-4 rounded shadow-md w-1/3">
        <h3 className="text-xl font-semibold text-center mb-4">Completed</h3>
        {completedTasks.map((task) => (
          <div
            key={task.id}
            className="task-card bg-white p-4 rounded mb-4 shadow-sm relative cursor-pointer"
          >
            <div
              className="absolute top-2 right-2"
              onClick={(e) => {
                e.stopPropagation(); 
                onDeleteTask(task.id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500 hover:text-red-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-label="Delete Task"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-1 12a2 2 0 01-2 2H8a2 2 0 01-2-2L5 7m5 4v6m4-6v6M4 7h16M10 4h4m-4 0a1 1 0 00-1-1h-2a1 1 0 00-1 1h8a1 1 0 00-1-1h-2a1 1 0 00-1 1z"
                />
              </svg>
            </div>
            <div onClick={() => onTaskClick(task)} className="flex-1">
              <h4 className="font-bold">{task.title}</h4>
              <p>{task.description}</p>
              <span className="text-sm text-gray-500">{task.priority}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
