// import React, { useState } from 'react';

// function Item({ item, onUpdate, onDelete }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedItem, setEditedItem] = useState(item);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setEditedItem({ ...editedItem, [name]: value });
//   };

//   const handleSave = () => {
//     onUpdate(editedItem);
//     setIsEditing(false);
//   };
 

//   return (
//     <div>
//       {isEditing ? (
//         <div>
//           <input type="text" name="first_name" value={editedItem.first_name} onChange={handleChange} />
//           <input type="text" name="last_name" value={editedItem.last_name} onChange={handleChange} />
//           <input type="email" name="email" value={editedItem.email} onChange={handleChange} />
//           <button onClick={handleSave}>Save</button>
//         </div>
//       ) : (
//         <div>
//           <span>{item.first_name} {item.last_name}</span>
//           <span>{item.email}</span>
//           <button onClick={() => setIsEditing(true)}>Edit</button>
//           <button onClick={() => onDelete(item.id)}>Delete</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Item;

import React, { useState } from 'react';

function Item({ item, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onUpdate(editedItem);
    setEditing(false);
  };

  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <li>
      {editing ? (
        <>
          <input
            type="text"
            value={editedItem.first_name}
            onChange={(e) =>
              setEditedItem({ ...editedItem, first_name: e.target.value })
            }
          />
          {/* Add other fields for editing */}
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {item.first_name} {/* Display other fields */}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
}

export default Item;
