import { Route, Routes} from "react-router-dom";
import LoginPage from "./appmain/LoginPage";
import LoginPage2 from "./appmain/LoginPage2";
import SignupPage from "./appmain/SignupPage";
import Router from "./routes/Router";

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Router/>
            {/* <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="login2" element={<LoginPage2 />} />
                <Route path="signup" element={<SignupPage />} />
            </Routes> */}
        </div>
    )
}

export default App;