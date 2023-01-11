import axios from "axios";

const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

const fetchNewsList = () => {
  return axios.get(`${config.baseUrl}/news/1.json`);
};

export {fetchNewsList};

// fetchNewsList.then().catch();
// .then((response) => (vm.users = response.data))
//       .catch((error) => console.log(error));
