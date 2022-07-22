import "./App.css";
import ViewApiSlice from "./Views/ViewApiSlice";
import ViewEntityAdapter from "./Views/ViewEntityAdapter";
import NormalSlice from "./Views/ViewNormalSlice";

function App() {
    return (
        <div className="App">
            <div
                style={{
                    backgroundColor: "#48b1e0",
                    padding: "5px",
                    margin: "10px",
                    borderRadius: "20px",
                }}
            >
                <h1>Normal Slice</h1>
                <NormalSlice />
            </div>
            
            <div
                style={{
                    backgroundColor: "#48b1e0",
                    padding: "5px",
                    margin: "10px",
                    borderRadius: "20px",
                }}
            >
                <h1>API Slice</h1>
                <ViewApiSlice />
            </div>
            
            <div
                style={{
                    backgroundColor: "#48b1e0",
                    padding: "5px",
                    margin: "10px",
                    borderRadius: "20px",
                }}
            >
                <h1>Entity adapter</h1>
                <ViewEntityAdapter />
            </div>

        </div>
    );
}

export default App;
