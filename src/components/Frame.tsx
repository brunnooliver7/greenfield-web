import { ReactNode } from 'react'

const Frame = (props: { children: ReactNode }) => {
  return (
    <div
      id="frame"
      className="h-95 w-95 font-sans flex align-center justify-center rounded-3xl bg-gray-100 shadow-lg"
    >
      {props.children}
    </div>
  )
}

export default Frame
