import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './pages/app/App';
import { BrowserRouter } from 'react-router-dom';
import "./firebase";
import './index.css';
import './normalize.css';
import { Wrapper } from './hoc/Wrapper';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>

                <App />

            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
