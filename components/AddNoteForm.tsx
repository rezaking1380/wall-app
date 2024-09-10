import React, { useState } from "react";

interface AddNoteFormProps {
  addNote: (message: string, date: string, deadline: string) => void;
}

const AddNoteForm: React.FC<AddNoteFormProps> = ({ addNote }) => {
  const [message, setMessage] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentDate = new Date().toISOString();
    addNote(message, currentDate, deadline);
    setMessage("");
    setDeadline("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Note Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 mb-2"
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="border p-2 mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Note
      </button>
    </form>
  );
};

export default AddNoteForm;
