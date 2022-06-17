import { createSlice } from '@reduxjs/toolkit';


export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    items: [],
    filtered: '',
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    deleteNote: (state, action) => {
      const id = action.payload;
      const index = state.items.findIndex(item => item.id === id);
      state.items.splice(index, 1)
    },
    filterNote: (state, action) => {
      state.filtered = action.payload
    }
  }
}
);

export default notesSlice.reducer;
export const { addNote, deleteNote, filterNote } = notesSlice.actions;