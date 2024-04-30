
import React, { useState } from 'react';
import './App.css';

function App() {
  // Initial data array
  const initialData = [
    {
      "id": 1,
      "first_name": "Evelin",
      "last_name": "Adenet",
      "email": "eadenet0@thetimes.co.uk",
      "gender": "Male",
      "fee_balance": 4274
    }, {
      "id": 2,
      "first_name": "Cosme",
      "last_name": "Vollam",
      "email": "cvollam1@netvibes.com",
      "gender": "Male",
      "fee_balance": 2748
    }, {
      "id": 3,
      "first_name": "Worthington",
      "last_name": "McKiddin",
      "email": "wmckiddin2@e-recht24.de",
      "gender": "Male",
      "fee_balance": 4578
    }, {
      "id": 4,
      "first_name": "Noel",
      "last_name": "Whybrow",
      "email": "nwhybrow3@reuters.com",
      "gender": "Male",
      "fee_balance": 2315
    }, {
      "id": 5,
      "first_name": "Danella",
      "last_name": "Skehan",
      "email": "dskehan4@cnn.com",
      "gender": "Female",
      "fee_balance": 2193
    }, {
      "id": 6,
      "first_name": "Shanta",
      "last_name": "Hentzeler",
      "email": "shentzeler5@sakura.ne.jp",
      "gender": "Female",
      "fee_balance": 4290
    }, {
      "id": 7,
      "first_name": "Scotti",
      "last_name": "Pigeram",
      "email": "spigeram6@vinaora.com",
      "gender": "Male",
      "fee_balance": 4191
    }, {
      "id": 8,
      "first_name": "Ludovico",
      "last_name": "Hurren",
      "email": "lhurren7@dailymotion.com",
      "gender": "Genderfluid",
      "fee_balance": 4712
    }, {
      "id": 9,
      "first_name": "Cale",
      "last_name": "Kapelhoff",
      "email": "ckapelhoff8@com.com",
      "gender": "Male",
      "fee_balance": 2498
    }, {
      "id": 10,
      "first_name": "Stephi",
      "last_name": "Kember",
      "email": "skember9@unc.edu",
      "gender": "Female",
      "fee_balance": 748
    }]
  // State variables
  const [data, setData] = useState(initialData);
  const [formData, setFormData] = useState({
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    fee_balance: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (Create/Update)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Update data
      const updatedData = data.map(item =>
        item.id === formData.id ? { ...item, ...formData } : item
      );
      setData(updatedData);
    } else {
      // Add new data
      const newData = [...data, { ...formData, id: data.length + 1 }];
      setData(newData);
    }
    // Clear form data
    setFormData({
      id: '',
      first_name: '',
      last_name: '',
      email: '',
      gender: '',
      fee_balance: ''
    });
    setIsEditing(false);
  };

  // Handle edit button click
  const handleEdit = (id) => {
    const itemToEdit = data.find(item => item.id === id);
    setFormData(itemToEdit);
    setIsEditing(true);
  };

  // Handle delete button click
  const handleDelete = (id) => {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
  };

  return (
    <div className="App">
      <h1>CRUD App</h1>
      {/* Form for adding/editing data */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" required />
        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender" required />
        <input type="number" name="fee_balance" value={formData.fee_balance} onChange={handleChange} placeholder="Fee Balance" required />
        <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
      </form>
      {/* List of data items */}
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <p>Name: {item.first_name} {item.last_name}</p>
            <p>Email: {item.email}</p>
            <p>Gender: {item.gender}</p>
            <p>Fee Balance: {item.fee_balance}</p>
            {/* Edit and Delete buttons */}
            <button onClick={() => handleEdit(item.id)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


