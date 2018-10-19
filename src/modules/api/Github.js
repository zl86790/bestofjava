import axios from "axios";

const topJavaUrl = "http://lizhe.name:3001/?language=&topic=";

export const getTopJava = async () => {
  return await axios.get(topJavaUrl);
};

export const getTopJavaTopic = async (language, topic) => {
  //let url = "https://api.github.com/search/repositories?q=";
  let url = "http://lizhe.name:3001/?";
  if (language) {
    url += "language=" + language;
  }
  if (topic) {
    url += "&topic=" + topic;
  }

  url += "&sort=stars&order=desc";
  return await axios.get(url);
};
