import { createSlice } from '@reduxjs/toolkit';

export interface dynamicTxt {
  value: string;
}

const initialState: dynamicTxt = {
  value: 'About',
};

export const dynamicSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    about: state => {
      const initState = state;
      initState.value = 'About';
    },

    project: state => {
      const initState = state;
      initState.value = 'Project';
    },

    workspace: state => {
      const initState = state;
      initState.value = 'WorkSpace';
    },
  },
});

export const { about, project, workspace } = dynamicSlice.actions;
export default dynamicSlice.reducer;
