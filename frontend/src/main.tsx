import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from '@gravity-ui/uikit';
import App from './App';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider theme="dark">
            <App />
        </Provider>
    </React.StrictMode>
);