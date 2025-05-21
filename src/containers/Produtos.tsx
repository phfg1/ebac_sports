import Produto from '../components/Produto'

import * as S from './styles'

import { useGetProdutosQuery } from '../store/services/produtosApi'

const ProdutosComponent = () => {
  const { data: produtos, error, isLoading } = useGetProdutosQuery()

  if (isLoading) {
    return <h2>Carregando produtos...</h2>
  }

  if (error) {
    return <h2>Ocorreu um erro ao carregar os produtos.</h2>
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
