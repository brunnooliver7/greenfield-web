import { createContext } from 'react'

class ImgStore {
  obterImgHomem = () => {
    let link = 'https://randomuser.me/api/portraits/men/'
    const min = 0
    const max = 99
    const random = Math.floor(Math.random() * (+max - +min)) + +min
    link = link.concat(random.toString())
    link = link.concat('.jpg')
    return link
  }

  obterImgMulher = () => {
    let link = 'https://randomuser.me/api/portraits/women/'
    const min = 0
    const max = 99
    const random = Math.floor(Math.random() * (+max - +min)) + +min
    link = link.concat(random.toString())
    link = link.concat('.jpg')
    return link
  }
}

export default createContext(new ImgStore())
