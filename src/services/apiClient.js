import axios from "axios";

export default axios.create({
  params: {
    key: "e9be2e9916994e4eabf44956dbe3cef5",
  },
  baseURL: "https://api.rawg.io/api",
});
