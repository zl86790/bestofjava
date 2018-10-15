import axios from "axios";

const topJavaUrl =
  "https://api.github.com/search/repositories?q=language:java&sort=stars&order=desc";

export const getTopJava = async () => {
  return await axios.get(topJavaUrl);
};
