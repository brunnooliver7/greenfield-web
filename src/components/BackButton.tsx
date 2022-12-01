import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { observer } from 'mobx-react-lite'

interface BackButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      className="inline-flex items-center justify-center w-10 h-10 mr-2 m-5 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200 absolute"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faArrowLeft} className="text-gray-400" />
    </button>
  )
}

export default observer(BackButton)
