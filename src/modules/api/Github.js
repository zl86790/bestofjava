import axios from "axios";

const topJavaUrl =
  "https://api.github.com/search/repositories?q=language:java&sort=stars&order=desc";

const topJavaSpringUrl =
  "https://api.github.com/search/repositories?q=language:java+topic:spring&sort=stars&order=desc";

const topJavaMavenUrl =
  "https://api.github.com/search/repositories?q=language:java+topic:maven&sort=stars&order=desc";

export const getTopJava = async () => {
  return await axios.get(topJavaUrl);
};

export const getTopJavaSpring = async () => {
  return await axios.get(topJavaSpringUrl);
};

export const getTopJavaMaven = async () => {
  return await axios.get(topJavaMavenUrl);
};

export const getTopJavaTopic = async topic => {
  return await axios.get(
    "https://api.github.com/search/repositories?q=language:java+topic:" +
      topic +
      "&sort=stars&order=desc"
  );
};
