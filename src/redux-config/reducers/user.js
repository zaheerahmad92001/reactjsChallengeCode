import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name:'',
  sectors:'',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserInfo: (state,{payload}) => ({
        ...state,
        name:payload.name,
        sectors:payload.sectors
  }),
  },
})

// Action creators are generated for each case reducer function
export const { updateUserInfo, } = userSlice.actions

export default userSlice.reducer