import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    category: <any>[],
    active: ''
}

export const categorySlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        SET_CATEGORY: (state, action) => {
            state.category = action.payload
        },
        SET_ACTIVE: (state, action) => {
            state.active = action.payload
        }
    },
})

export const { SET_CATEGORY,SET_ACTIVE } = categorySlice.actions
export default categorySlice.reducer