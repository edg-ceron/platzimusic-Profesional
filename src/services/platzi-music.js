import trae from 'trae'
import configServices from './config'

const platziMusicServices = trae.create({
  baseUrl:configServices.apiUrl
})

export default platziMusicServices
