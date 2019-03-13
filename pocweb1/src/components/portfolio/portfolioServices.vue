<script>
import axios from 'axios';
const config = require('../../../config/config.json');

export default {
  getPortfolio(uuid) {
    return axios.get(config.urlServices + "/getPortfolio?uuid=" + uuid).then((obj) => {
      return obj.data;
    });
  },
  getTransfers() {
    return axios.get(config.urlServices + "/getTransfers").then((obj) => {
      return obj.data;
    });
  }
}
</script>