import { todoSlice } from "../Reducers/ReducerEntitySlice";
import { todoSelectors, useAppDispatch, useAppSelector } from "../Store/Store";

function ViewEntityAdapter() {
    const dispatch = useAppDispatch();
    const todos = useAppSelector(todoSelectors.selectAll);

    dispatch(
        todoSlice.actions.addTodos([
            {
                id: 1,
                title: "Learn React",
                completed: true,
            },
            {
                id: 2,
                title: "Learn TypeScript",
                completed: false,
            },
            {
                id: 3,
                title: "Learn Redux",
                completed: false,
            },
        ])
    );

    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title}{" "}
                        <p>{todo.completed ? "Done" : "Still todo"}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ViewEntityAdapter;
