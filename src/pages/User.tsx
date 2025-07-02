import { AddUserModal } from "@/components/module/users/AddUserModal";
import UserCard from "@/components/module/users/UserCard";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";


const Users = () => {
    const users = useAppSelector(selectUsers);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
                <h2 className="font-semibold mb-3">Users</h2>
                <div className="flex items-center gap-3">
                    <AddUserModal />
                </div>
            </div>
            <div className="space-y-3 grid grid-cols-3 gap-3 mt-5">
                {users.map(user => <UserCard user={user} key={user.id} />)}
            </div>
        </div>
    );
};

export default Users;