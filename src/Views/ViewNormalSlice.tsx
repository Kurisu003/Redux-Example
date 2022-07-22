import { useEffect } from "react";
import { addUsers, removeUser } from "../Reducers/ReducerNormalSlice";
import { useAppDispatch, useAppSelector } from "../Store/Store";

function ViewNormalSlice() {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.users);

    useEffect(() => {
        dispatch(
            addUsers([
                {
                    id: 1,
                    username: "user1",
                    email: "dani003@outlook.com",
                    name: "Daniel",
                    city: "Barcelona",
                },
                {
                    id: 2,
                    username: "user2",
                    email: "test@gmail.com",
                    name: "Test",
                    city: "Madrid",
                },
                {
                    id: 3,
                    username: "user3",
                    email: "test2@gmail.com",
                    name: "Test2",
                    city: "Madrid",
                },
            ])
        );
    }, [dispatch]);

    return (
        <div>
            {users.map((user) => (
                <div
                    style={{
                        backgroundColor: "#3e3e3e",
                        padding: "5px",
                        margin: "10px",
                        borderRadius: "20px",
                    }}
                    key={user.id}
                >
                    <h3>{user.username}</h3>
                    <h4>{user.email}</h4>
                    <h5>{user.name}</h5>
                    <h5>{user.city}</h5>
                    <button
                        onClick={() => {
                            dispatch(removeUser(user.id));
                        }}
                    >
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ViewNormalSlice;
