import S from "./styled"

const Navbar = () => {
  return <S.Nav>
    <S.Ul>
      <li><a href="/clientes">Clientes</a></li>
      <li><a href="/produtos">Produtos</a></li>
      <li><a href="/vendas">Vendas</a></li>
    </S.Ul>
  </S.Nav>
}

export default Navbar