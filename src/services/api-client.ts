import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:'210dbb12c804424d8b17ea6d6473fd04'
    }
  })