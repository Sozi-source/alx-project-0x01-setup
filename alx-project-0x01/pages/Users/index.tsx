import { useState } from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps, UserData} from "@/interfaces/index";
import UserModal from "@/components/common/UserModal";

const Users: React.FC<{users:UserProps[]}> =({users: firstUser})=>{
  const [users, setUsers] = useState<UserProps[]>(firstUser)
  const [isModalOpen, setModalOpen]= useState(false)


  const handleAddUser = (newUser: UserData) => {
    setUsers(prev => [
      { ...newUser, id: prev.length + 1 },
      ...prev,
    ]);
  };

return(

<div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-semibold">Users</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-700 text-white px-4 py-2 rounded"
        >
          Add User
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export default Users;
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users: UserProps[] = await response.json()

  return {
    props: {
    users
    }
  }
}