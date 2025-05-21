import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
import favoritarReducer from './reducers/favoritos'
import { produtosApi } from './services/produtosApi'

const rootReducer = {
  carrinho: carrinhoReducer,
  favoritos: favoritarReducer,
  [produtosApi.reducerPath]: produtosApi.reducer
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtosApi.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
