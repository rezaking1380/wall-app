'use client'
import React, { useState } from 'react';
import StickyNote from './StickyNote';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

interface Note {
  id: string;
  message: string;
  date: string;
  deadline: string;
}

const StickyNotesWall: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [newDeadline, setNewDeadline] = useState('');

  const addNote = () => {
    if (!newMessage || !newDeadline) return;
    const newNote: Note = {
      id: `${notes.length + 1}`,
      message: newMessage,
      date: new Date().toLocaleDateString(),
      deadline: newDeadline,
    };
    setNotes([...notes, newNote]);
    setNewMessage('');
    setNewDeadline('');
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const editNote = (id: string, newMessage: string, newDeadline: string) => {
    setNotes(notes.map(note => (note.id === id ? { ...note, message: newMessage, deadline: newDeadline } : note)));
  };

  const handleOnDragEnd = (result: DropResult) => {
    console.log(result)
    if (!result.destination) return;
    const updatedNotes = Array.from(notes);
    const [reorderedNote] = updatedNotes.splice(result.source.index, 1);
    updatedNotes.splice(result.destination.index, 0, reorderedNote);
    setNotes(updatedNotes);
  };
  console.log(notes)
  return (
    <div className='lg:mx-24 mx-6 my-10 flex flex-col gap-6'>
      <h1 className='text-center text-[48px] font-bold font-IranX'>Wall App</h1>
      <div className=' flex gap-6 items-center justify-between'>
        <textarea
          placeholder="New message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className='border-gray-400 border rounded-md p-2 font-IranX w-1/2'
        />
        <input
          type="date"
          value={newDeadline}
          onChange={(e) => setNewDeadline(e.target.value)}
        />
        <button onClick={addNote} disabled={newMessage && newDeadline ? false : true} className='px-6 py-2 rounded-md disabled:bg-gray-300 border-green-300 bg-green-200 text-gray-500 hover:text-black'>Add Note</button>
      </div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="notes1">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {notes.map((note, index) => (
                <Draggable key={note.id} draggableId={note.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <StickyNote
                        id={note.id}
                        message={note.message}
                        date={note.date}
                        deadline={note.deadline}
                        onDelete={deleteNote}
                        onEdit={editNote}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default StickyNotesWall;
