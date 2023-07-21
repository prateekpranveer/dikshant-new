import { configureStore } from '@reduxjs/toolkit'
import categoryData from './reducers/categoryData'
import homeData from './reducers/homeData'

export const store = configureStore({
  reducer: {
    category: categoryData,
    home: homeData
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch