import React, { useState } from "react";

export const Edit = ({ id, initialContent, onUpdate }) => {
  const [editMode, setEditMode] = useState(false);
  const [newContent, setNewContent] = useState(initialContent);

  const handleEdit = () => {
    fetch(`/api/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        content: newContent, // Include the updated content
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        onUpdate(data); // Notify the parent component of the update
        setEditMode(false); // Disable edit mode after editing
      });
  };

  return (
    <div>
      {editMode ? (
        <>
          <input
            type="text"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </>
      ) : (
        <button onClick={() => setEditMode(true)}>Edit</button>
      )}
    </div>
  );
};
