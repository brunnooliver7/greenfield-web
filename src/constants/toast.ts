import { toast } from 'react-toastify'

const medicoSalvoToastOptions = {
  type: toast.TYPE.SUCCESS,
  hideProgressBar: false,
  position: toast.POSITION.TOP_CENTER,
}

const medicoFalhaToastOptions = {
  type: toast.TYPE.ERROR,
  hideProgressBar: false,
  position: toast.POSITION.TOP_CENTER,
}

export { medicoSalvoToastOptions, medicoFalhaToastOptions }
