import CommonAPI from "./api/queries/commonApi";
import Router from "./routes/Router";

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Router/>
            <CommonAPI/>
        </div>
    )
}

export default App;