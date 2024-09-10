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
    <div style={{ backgroundColor: isDeadlineReached ? '#F4F9F3' : '#FEF4F3', padding: '1rem', margin: '0.5rem' }}>
      {isEditing ? (
        <>
          <textarea value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
          <input type="date" value={newDeadline} onChange={(e) => setNewDeadline(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p>{message}</p>
          <p>Created: {date}</p>
          <p>Deadline: {deadline}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default StickyNote;
