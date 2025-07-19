import Header from "@/components/layout/Header";
import { useState } from "react";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

const UsersPage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState<UserData[]>([]);

  const handleAddUser = (newUser: UserData) => {
    setUsers((prev) => [...prev, newUser]);
    setModalOpen(false);
  };

  return (
    <div className="p-6">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <button
        onClick={() => setModalOpen(true)}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        Add User
      </button>

      {/* Show modal */}
      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}

      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="border p-4 rounded shadow-sm">
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Company: {user.company.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
