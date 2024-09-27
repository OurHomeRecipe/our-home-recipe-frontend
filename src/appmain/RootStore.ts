import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {persistReducer} from "redux-persist";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import logger from "redux-logger";                          // redux-logger는 상태 변경 시 콘솔에 로그를 찍기 위한 미들웨어
import storage from "redux-persist/lib/storage";            // 기본적으로 localStorage를 사용하여 상태를 저장

const persistConfig = {
    key: "root",                                            // 상태 저장의 루트 키
    storage,
    blacklist: []                                           // 이 배열에 추가된 reducer는 persist 대상에서 제외됨
}

// reducer 등록: 이곳에 각 slice reducer를 결합하여 사용
const reducers = combineReducers({
})

const persistedReducer = persistReducer(persistConfig, reducers);

const RootStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(logger)
});

export type RootState = ReturnType<typeof RootStore.getState>;
export type AppDispatch = typeof RootStore.dispatch;
//React 컴포넌트에서 dispatch 함수를 사용하기 위한 커스텀 훅
export const useAppDispatch: () => AppDispatch = useDispatch;
//React 컴포넌트에서 상태를 조회할 때 사용할 커스텀 타입의 selector 훅
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;

export default RootStore;