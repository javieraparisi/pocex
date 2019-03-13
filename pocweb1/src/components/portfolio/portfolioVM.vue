<script>
  import services from './portfolioServices.vue';
  import spinner from '@/libs/spinner';
  import currency from 'currency.js'
  import moment from 'moment';
  import masters from '../../../config/masters.json';
  
  export default {
    name: 'portfolio',
    components:{
      menuTop:() => import(/* webpackChunkName: "ChunkMenuTop" */ '../menuTop/menuTop.vue')
    },
    data() {
      return {
        services: services,
        portfolioData:null,
        listTransfers:[],
        currency:currency,
        moment:moment,
        masters:masters,
        modalDetail:null
      }
    },
    created(){
      const self=this;
      let idSpinner = spinner.show();
      let promiseGetPortfolio = self.services.getPortfolio('245b536c-6047-4e4e-8832-8cda83481301').then((portfolioData)=>{
        self.portfolioData = portfolioData;
      });
      let promiseGetTransfers = self.services.getTransfers().then((listTransfers)=>{
        self.listTransfers = listTransfers;
      });
      let promiseAll = Promise.all([promiseGetPortfolio, promiseGetTransfers]);
      promiseAll.then(()=>{
        spinner.hide(idSpinner);
      });
    },
    methods:{
      showModalDetail(detail){
        const self=this;
        self.modalDetail = detail;
        self.$modal.show('detail-dialog');
      }
    }
  }
</script>
