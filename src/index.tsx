import React from 'react';
import './index.css';

import {createRoot} from 'react-dom/client';
import App from './App';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {persistStore} from "redux-persist";
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter} from "react-router-dom";
import RootStore from './RootStore';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// React Query의 QueryClient 생성
const queryClient = new QueryClient(
    {
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60,  // 데이터가 신선한 시간 (1분)
        gcTime: 1000 * 60 * 5, // 가비지 컬렉션 되기 전까지 캐시되는 시간 (5분)
      }
    },
}
);

const container = document.getElementById('root')!;
const root = createRoot(container);
const persistor = persistStore(RootStore);

root.render(
    <Provider store={RootStore}>
        <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={true} />
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </QueryClientProvider>
        </PersistGate>
    </Provider>
);