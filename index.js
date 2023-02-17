const axios = require('axios');
const FormData = require('form-data');
require('dotenv').config()

const token = process.env['TOKEN']
const password = process.env['PASSWORD']

const postData = new FormData();
postData.append('network_api_id', '1');
postData.append('mobile_number', '08130190612');
postData.append('data_api_id', '6');
postData.append('validatephonenetwork', 'false');
postData.append('duplicate_check', 'false');
postData.append('action', 'buy_data');

axios.post('https://megasubplug.com/API?action=buy_data', postData, {
  headers: {
    'Authorization': `Token ${token}`,
    'Password': password,
    'Content-Type': 'multipart/form-data'
  }
})
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
