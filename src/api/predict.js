import axios from 'axios';

const predict = async ({data, type}) => {
  const formData = new FormData();
  formData.append('image', data);
  formData.append('algorithm', type);

  const config = {
    method: 'post',
    // url: 'https://handwrittendigitdetection.azurewebsites.net/predict',
    url: 'https://khangnt.space/predict',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
  };

  const response = await axios(config);
  console.log({data: response.data});
  return response.data;
};

export default predict;
