import React, { useState } from 'react';

interface StickyNoteProps {
  id: string;
  message: string;
  date: string;
  deadline: string;
  onDelete: (id: string) => void;
  onEdit: (id: string, newMessage: string, newDeadline: string) => void;
}

const StickyNote: React.FC<StickyNoteProps> = ({ id, message, date, deadline, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newMessage, setNewMessage] = useState(message);
  const [newDeadline, setNewDeadline] = useState(deadline);

  const handleSave = () => {
    onEdit(id, newMessage, newDeadline);
    setIsEditing(false);
  };

  const isDeadlineReached = new Date(deadline) < new Date();

  return (
    <div className='flex rounded-md' style={{ backgroundColor: isDeadlineReached ? '#F4F9F3' : '#FEF4F3', padding: '1rem', margin: '0.5rem' }}>
      {isEditing ? (
        <div className='flex flex-wrap font-IranX items-center justify-between w-full'>
          <textarea value={newMessage} onChange={(e) => setNewMessage(e.target.value)} className='border-gray-400 border rounded-md p-2 font-IranX w-full md:w-1/2 mb-6 md:mb-0' />
          <input type="date" value={newDeadline} onChange={(e) => setNewDeadline(e.target.value)} />
          <button onClick={handleSave} className='border border-green-400 px-2 bg-green-300 py-1 rounded-md'>Save</button>
        </div>
      ) : (
        <div className='flex flex-wrap font-IranX items-center justify-between w-full'>
          <div className='flex flex-wrap gap-4 w-full'>
          <p className='text-lg break-all w-full'>{message}</p>
          <p>Created: {date}</p>
          <p>Deadline: {deadline}</p>
          </div>
          <div className='flex gap-10 mt-6'>
          <button onClick={() => setIsEditing(true)} className='border border-yellow-400 bg-yellow-200 px-2 py-1 rounded-md'>Edit</button>
          <button onClick={() => onDelete(id)} className='border border-red-400 px-2 bg-red-300 py-1 rounded-md'>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StickyNote;
