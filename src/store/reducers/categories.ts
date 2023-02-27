import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: [],
    reducers: {
        getListCategories: (state, action: PayloadAction) => action.payload,
    },
})

export const { getListCategories } = categoriesSlice.actions
export default categoriesSlice.reducer