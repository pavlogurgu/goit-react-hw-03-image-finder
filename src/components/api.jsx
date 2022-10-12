import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/'
const MY_ACCESS_KEY = '29499906-22b38502364cbc24023c0b9e4'
const perPage = 12;

export const fetchImages = async (query, page) => {
    const response = await axios.get(
      `?key=${MY_ACCESS_KEY}&q=${query}&image_type=photo&page=${page}&orientation=horizontal&per_page=${perPage}`,
    )
    return response.data
  }