// components/common/UserModal.tsx

import { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    id: Date.now(), // temporary id
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev: any) => {
      const updated = { ...prev };

      if (name.startsWith("address.")) {
        const key = name.split(".")[1];
        updated.address[key] = value;
      } else if (name.startsWith("geo.")) {
        const key = name.split(".")[1];
        updated.address.geo[key] = value;
      } else if (name.startsWith("company.")) {
        const key = name.split(".")[1];
        updated.company[key] = value;
      } else {
        updated[name] = value;
      }

      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-2 max-h-[70vh] overflow-y-auto">
          <input name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="username" placeholder="Username" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="address.street" placeholder="Street" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="address.suite" placeholder="Suite" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="address.city" placeholder="City" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="address.zipcode" placeholder="Zipcode" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="geo.lat" placeholder="Latitude" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="geo.lng" placeholder="Longitude" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="phone" placeholder="Phone" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="website" placeholder="Website" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="company.name" placeholder="Company Name" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="company.catchPhrase" placeholder="Catch Phrase" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="company.bs" placeholder="BS" onChange={handleChange} className="w-full p-2 border rounded" />

          <div className="flex justify-end mt-4 gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-400 rounded text-white">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 rounded text-white">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
