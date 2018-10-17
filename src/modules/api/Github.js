import axios from "axios";

const topJavaUrl =
  "https://api.github.com/search/repositories?q=language:java&sort=stars&order=desc";

export const getTopJava = async () => {
  return await axios.get(topJavaUrl);
};

export const getTopJavaTopic = async (language, topic) => {
  let url = "https://api.github.com/search/repositories?q=";
  if (language) {
    url += "language:" + language;
  }
  if (topic) {
    url += "topic:" + topic;
  }
  url += "&sort=stars&order=desc";
  return await axios.get(url);
};
