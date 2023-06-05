import styled from "styled-components"

export const PopupBody = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`

export const ButtonsContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-around;
`

export const Button = styled.button`
  /* display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%; */
`

export default {
  PopupBody,
  ButtonsContainer,
  Button
}