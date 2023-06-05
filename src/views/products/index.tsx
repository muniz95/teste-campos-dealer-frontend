import React from "react";
import service from "../../services/product.service"
import Product from "../../models/Product";
import S from "./styled"
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import Popup from "../../components/Popup";
import { Button } from "@mui/material";

const Products = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [total, setTotal] = React.useState<number>(0);
  const navigate = useNavigate();

  const handleEditClick = (id: number) => {
    navigate(`${id}`)
  }

  const handleDeleteClick = async (id: number) => {
    // toast("Tem certeza que deseja excluir esse registro?");
    confirmAlert({
      customUI: ({ onClose }) => <Popup 
        message="Deseja realmente remover este registro?" 
        acceptTitle="Sim"
        declineTitle="Não"
        onClose={onClose}
        onConfirm={async () => {
          try {
            const response = await service.deleteProduct(id);
            if (response === 200) {
              alert("Cliente removido com sucesso.");
              onClose();
              setTotal(products.length - 1);
              setProducts(products.filter(x => x.id != id));
            }
          }
          catch(error) {
            console.error(error);            
          }
        }} />
    });
  }

  React.useEffect(() => {
    service.getProducts().then(response => {
      setProducts(response);
      setTotal(response.length);
    });
  }, []);

  return <React.Fragment>
    <strong>Total: {total}</strong>
    <S.ItemCardContainer>
      { products.map((product: Product) =>
        <S.ItemCard key={product.id}>
          <S.ItemCardBody>
            <strong>{product.name}</strong>
            <h6>{product.city}</h6>
          </S.ItemCardBody>
          <S.ItemCardActions>
            <FontAwesomeIcon icon={faPencil} onClick={() => handleEditClick(product.id!)} />
            <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteClick(product.id!)} />
          </S.ItemCardActions>
        </S.ItemCard>,
      ) }
    </S.ItemCardContainer>
    <Button variant="contained" onClick={() => navigate("/produtos/novo")}>Novo</Button>
  </React.Fragment>
}

export default Products