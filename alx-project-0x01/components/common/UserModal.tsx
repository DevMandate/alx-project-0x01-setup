// components/common/UserModal.tsx

import React, { useState } from 'react';
import { UserModalProps, UserProps } from '@/interfaces';

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserProps>({
    id: Date.now(),
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: ''
      }
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add User</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-2 mb-2 border"
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full p-2 mb-2 border"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-2 border"
          onChange={handleChange}
        />
        <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded mr-2">
          Submit
        </button>
        <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UserModal;
