import S from "./styled"

interface IProps {
  message: string
  declineTitle: string
  acceptTitle: string
  onClose: () => void
  onConfirm: () => void
}

const Popup = ({ message, declineTitle, acceptTitle, onClose, onConfirm }: IProps) => {
  return <S.PopupBody>
    <h1>{message}</h1>
    <S.ButtonsContainer>
      <S.Button onClick={onClose}>{declineTitle}</S.Button>
      <S.Button onClick={onConfirm}>{acceptTitle}</S.Button>
    </S.ButtonsContainer>
  </S.PopupBody>
}

export default Popup