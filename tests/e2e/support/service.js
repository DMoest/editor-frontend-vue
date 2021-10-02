import axios from 'axios'

export const createDocument = async (documentDetails) => {
    await axios.post('http://localhost:8081/document', documentDetails)
}
