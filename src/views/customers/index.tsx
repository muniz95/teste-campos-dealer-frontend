import React from "react";
import service from "../../services/customer.service"
import Customer from "../../models/Customer";
import S from "./styled"
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Popup from "../../components/Popup";
import { Button } from "@mui/material";

const Customers = () => {
  const [customers, setCustomers] = React.useState<Customer[]>([]);
  const [total, setTotal] = React.useState<number>(0);
  const navigate = useNavigate();

  const handleEditClick = (id: number) => {
    navigate(`${id}`)
  }

  const handleDeleteClick = async (id: number) => {
    confirmAlert({
      customUI: ({ onClose }) => <Popup 
        message="Deseja realmente remover este registro?" 
        acceptTitle="Sim"
        declineTitle="Não"
        onClose={onClose}
        onConfirm={async () => {
          try {
            const response = await service.deleteCustomer(id);
            if (response === 200) {
              alert("Cliente removido com sucesso.");
              onClose();
              setTotal(customers.length - 1);
              setCustomers(customers.filter(x => x.id != id));
            }
          }
          catch(error) {
            console.error(error);            
          }
        }} />
    });
  }

  React.useEffect(() => {
    service.getCustomers().then(response => {
      setCustomers(response);
      setTotal(response.length);
    });
  }, []);

  return <React.Fragment>
    <strong>Total: {total}</strong>
    <S.ItemCardContainer>
      { customers.map((customer: Customer) =>
        <S.ItemCard key={customer.id}>
          <S.ItemCardBody>
            <strong>{customer.name}</strong>
            <h6>{customer.city}</h6>
          </S.ItemCardBody>
          <S.ItemCardActions>
            <FontAwesomeIcon icon={faPencil} onClick={() => handleEditClick(customer.id!)} />
            <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteClick(customer.id!)} />
          </S.ItemCardActions>
        </S.ItemCard>,
      ) }
    </S.ItemCardContainer>
    <Button variant="contained" onClick={() => navigate("/clientes/novo")}>Novo</Button>
  </React.Fragment>
}

export default Customers