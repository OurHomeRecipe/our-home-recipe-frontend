import { createSlice } from "@reduxjs/toolkit"

interface SidebarState {
  show: boolean;  // 사이드바 표시 여부
}

const initialState: SidebarState = {
  show: false, // 사이드바는 기본적으로 표시되지 않음
};

const sidebarSlice = createSlice({

    name: 'sidebar',
    initialState,
    reducers: {
      /**
       * 사이드바 표시 여부 토글
       * @param state - 현재 상태 (true 또는 false)
       * @description 클릭할 때마다 상태가 바뀜
       */
      toggleSidebar: (state) => {
        state.show = !state.show;
      },
    },
  });
  
export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
