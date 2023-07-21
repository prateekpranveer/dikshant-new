import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    top: <any>[],
    mid: <any>{},
    bottom: <any>[]
}

export const homeSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        SET_TOP: (state, action) => {
            state.top = action.payload
        },
        SET_MID: (state, action) => {
            state.mid = action.payload
        },
        SET_BOTTOM: (state, action) => {
            state.bottom = action.payload
        }
    },
})

export const { SET_TOP, SET_MID, SET_BOTTOM } = homeSlice.actions
export default homeSlice.reducer