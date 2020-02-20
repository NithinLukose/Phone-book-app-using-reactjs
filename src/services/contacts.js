import axios from 'axios'

const baseURL = 'http://localhost:3001/contacts'

const getAll = async () => {
    
    const res = await axios.get(baseURL)
    return res.data
    
}

const createNew = async (contact) => {
    
    const object = contact
    const res = await axios.post(baseURL,object)
    return res.data
    
}

export default {
    getAll,
    createNew
}