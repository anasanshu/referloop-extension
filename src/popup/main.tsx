import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import RequestReferral from './RequestReferral';
import ReferralDetails from './ReferralDetails';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/request" element={<RequestReferral />} />
                <Route path="/details/:id" element={<ReferralDetails />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>
);
