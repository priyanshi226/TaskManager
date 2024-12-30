import React, { useState } from 'react';
import CreateTask from './CreateTask';

const Header = ({ onAddTask }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleOpenPopup = () => setIsPopupVisible(true);
  const handleClosePopup = () => setIsPopupVisible(false);

  return (
    <header
      className="py-4 px-6 shadow-lg flex justify-between items-center"
      style={{ backgroundColor: '#3D52A0' }}
    >
      <h1 className="text-lg font-bold text-white">
        Kanban Board
      </h1>
      <button
        className="px-4 py-2 rounded shadow hover:bg-gray-200"
        style={{
          backgroundColor: '#ffffff',
          color: '#2c3e50',
          border: '1px solid #2c3e50',
        }}
        onClick={handleOpenPopup}
      >
        Create
      </button>

      {isPopupVisible && (
        <CreateTask onClose={handleClosePopup} onAddTask={onAddTask} />
      )}
    </header>
  );
};

export default Header;
