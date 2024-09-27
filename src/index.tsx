import React from 'react';
import './index.css';

import {createRoot} from 'react-dom/client';
import App from './App';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {persistStore} from "redux-persist";
import RootStore from "./appmain/RootStore";
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter} from "react-router-dom";

// React Query의 QueryClient 생성
const queryClient = new QueryClient();

const container = document.getElementById('root')!;
const root = createRoot(container);
const persistor = persistStore(RootStore);

root.render(
    <Provider store={RootStore}>
        <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </QueryClientProvider>
        </PersistGate>
    </Provider>
);