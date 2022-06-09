import axios /*, { AxiosError, AxiosResponse }*/ from "axios";

export const baseURL = "https://api.nasa.gov/";

const get = async (path) => {
  const response = await axios.get(baseURL + path);

  return response;
};

// const Article = getArticle()

const agent = {
  // Article,
  get,
};

export default agent;
