import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload
      const itemFavoritado = state.itens.find((f) => f.id === favorito.id)

      if (itemFavoritado) {
        state.itens = state.itens.filter((f) => f.id !== favorito.id)
      } else {
        state.itens.push(favorito)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
