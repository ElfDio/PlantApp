import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const questionsSlice = createSlice({
    name: 'questions',
    initialState: [],
    reducers: {
        getListQuestion: (state, action: PayloadAction) => action.payload,
    },
})

export const { getListQuestion } = questionsSlice.actions
export default questionsSlice.reducer