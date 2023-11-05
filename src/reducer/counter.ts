import { createSlice } from '@reduxjs/toolkit';

export interface dynamicTxt {
  value: string;
}

const initialState: dynamicTxt = {
  value: '',
};

export const dynamicSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    main: (state, action) => {
      const initState = state;
      initState.value = action.payload;
    },

    project: (state, action) => {
      const initState = state;
      initState.value = action.payload;
    },

    workspace: state => {
      const initState = state;
      initState.value = 'WorkSpace';
    },
  },
});

export const { main, project, workspace } = dynamicSlice.actions;
export default dynamicSlice.reducer;
