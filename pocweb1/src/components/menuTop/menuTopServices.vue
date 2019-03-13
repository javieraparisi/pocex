<script>
import axios from 'axios';
const config = require('../../../config/config.json');
//import config from "@/config/config.json";

export default {
  getUser() {
    return axios.get(config.urlServices + "/getUser").then((obj) => {
      return obj.data;
    });
  }
}
</script>