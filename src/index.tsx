import React from 'react';
import './index.css';

import { createRoot } from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// React Query의 QueryClient 생성
const queryClient = new QueryClient();

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
);