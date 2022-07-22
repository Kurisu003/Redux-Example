import { useFetchAlbumsQuery } from "../Reducers/ReducerApiSlice";

function ViewApiSlice() {
    const { data, isFetching } = useFetchAlbumsQuery();

    if (isFetching) {
        return <div>Loading...</div>;
    } else if (data) {
        return (
            <div>
                <ul>
                    {/* Ternary operator so only the first 10 get displayed */}
                    {/* NOTE that like this still all of them get fetched */}
                    {data.map((album) => (album.id < 10 ? <li key={album.id}>{album.title}</li> : null))}
                </ul>
                <button onClick={()=>{useFetchAlbumsQuery()}} >Fetch Albums</button>
            </div>
        );
    } else {
        return <div>Error</div>;
    }
}

export default ViewApiSlice;
