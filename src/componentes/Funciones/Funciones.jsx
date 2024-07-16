import axios from 'axios'

const listaVideos = async (state) => {
    const peticion = await axios.get ('https://my-json-server.typicode.com/suarezdiaz/aluraflix-api/videos')
    state(peticion.data)

}

export  {listaVideos}