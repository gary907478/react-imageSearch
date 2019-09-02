import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      ' Client-ID d07f56b5c936108b9e133dfa418408088637f9db58b0ac250c3cc802f39378b9'
  }
});
