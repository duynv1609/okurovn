import { createSlice } from '@reduxjs/toolkit';


const initialState =  null;
const LANGUAGE = [
    { id: 0, logo: "logoVN_circle.svg", content: "Tiếng Việt" },
    { id: 1, logo: "logoEN_circle.svg", content: "Tiếng Anh" },
];

export const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        lang: (state, action) => {
            return action.payload;
        },
        vi: () => null,
        update: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

// Action creators are generated for each case reducer function
const langReducer = langSlice.reducer;
const langActions = langSlice.actions;

export default langReducer;
export { langActions };
