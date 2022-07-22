import { useEffect } from "react";
import { fetchPosts } from "../Reducers/ReducerThunkSlice";
import { getPostsError, getPostsStatus, selectAllPosts, useAppDispatch, useAppSelector } from "../Store/Store";
import { post } from "../Types/types";

function ViewThunk() {

    const dispatch = useAppDispatch();

    const posts = useAppSelector(selectAllPosts);
    const status = useAppSelector(getPostsStatus);
    const error = useAppSelector(getPostsError);

    useEffect(()=>{
        if(status === "idle"){
            dispatch(fetchPosts());
        }
    },[dispatch, status]);

    let content;
    if(status === "loading"){
        content = <div>Loading...</div>;
    }
    else if(status === "succeeded"){
        content = 
            <div>{
                posts.map((p:post) => {
                    // Ternary operator so that only the first 10 get rendered
                    // NOTICE that like this all of them still get fetched
                    return(
                        p.id < 10 ?
                        <div key={p.id}>{p.title}<p>{p.body}</p><br/><br/></div> :
                        null
                    )
                })}
            </div>;
    }
    else{
        content = <div>Error: {error}</div>;
    }

    return (
        <div>
            {content}
        </div>
    );
}

export default ViewThunk;