import React, { useState } from "react";

interface EditNoteFormProps {
  note: {
    id: string;
    message: string;
    date: string;
    deadline: string;
  };
  onSave: (editedNote: { id: string; message: string; date: string; deadline: string }) => void;
  onCancel: () => void;
}

const EditNoteForm: React.FC<EditNoteFormProps> = ({ note, onSave, onCancel }) => {
  const [message, setMessage] = useState(note.message);
  const [deadline, setDeadline] = useState(note.deadline);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: note.id,
      message,
      date: note.date, // Keep the date unchanged
      deadline,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Note</h2>
      <div>
        <label>Message:</label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div>
        <label>Deadline:</label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditNoteForm;
