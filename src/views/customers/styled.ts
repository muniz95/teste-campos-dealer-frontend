import styled from "styled-components"

export const ItemCardContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ItemCard = styled.div`
  height: 150px;
  display: flex;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 50%;
  }
  @media screen and (min-width: 1024px) {
    width: 25%;
  }
`;

export const ItemCardBody = styled.div`
  width: 80%;
  background-color: #00ff00;
  margin: 5px;
  border-radius: 5px;
`;

export const ItemCardActions = styled.div`
  width: 20%;
  margin-top: 5px;
  margin-bottom: 5px;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
`;

export const ItemCardActionEdit = styled.div`
  width: 20%;
  background-color: #0000ff;
`;

export const ItemCardActionDelete = styled.div`
  width: 20%;
  background-color: #ff0000;
`;

export default {
  ItemCard,
  ItemCardBody,
  ItemCardContainer,
  ItemCardActions,
  ItemCardActionEdit,
  ItemCardActionDelete,
}