import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID b89ddd2ba05585bc2d7b95004139cef52c2437a2bd51523694efe6d144a493a7'
  }
})