import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppDispatch } from "@/redux/hooks";
import { Trash2 } from "lucide-react";
import { deleteUser } from "@/redux/features/user/userSlice";
import type { IUser } from "@/types";

interface UserCardProps {
    user: IUser
}
const UserCard = ({ user }: UserCardProps) => {
    const dispatch = useAppDispatch();
    return (
        <Card className="w-full h-fit shadow-md border border-gray-200">
            <CardHeader className="flex flex-row justify-between items-start gap-4">
                <div>
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                        <h1>{user.name}</h1>
                    </CardTitle>
                </div>
                <div className="flex items-center gap-3">
                    <Trash2 size="20px" onClick={() => dispatch(deleteUser(user.id))} />
                </div>
            </CardHeader>
        </Card>
    );
};

export default UserCard;