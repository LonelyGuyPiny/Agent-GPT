import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';

import { history } from '_helpers';
import { Nav, PrivateRoute } from '_components/layout';
import { Home } from '_components/home';
import { Login } from '_components/authentication';
import Chat from '_components/dashboard/Chat';
import Footer from '_components/layout/Footer';
import Pricing from '_components/pricing/Pricing';
import SignUp from '_components/authentication/SignUp';

export { App };

function App() {
    // init custom history object to allow navigation from 
    // anywhere in the react app (inside or outside components)
    history.navigate = useNavigate();
    history.location = useLocation();

    return (
        <div className="app-container bg-light">
            <Nav />
            <div className="container pt-4 pb-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/dashboard/chat" element={<Chat />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}
