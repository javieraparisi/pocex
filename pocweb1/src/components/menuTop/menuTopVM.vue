<script>
  import services from './menuTopServices.vue';
  import spinner from '@/libs/spinner';
  import moment from 'moment';
  export default {
    name: 'menuTop',
    data() {
      return {
        services: services,
        user:null,
        moment:moment
        //last_name:"",
        //last_login:""
      }
    },
    created(){
      const self=this;
      self._load();
    },
    methods:{
      _load(){
        const self=this;
        let idSpinner = spinner.show();
        self.services.getUser().then((user)=>{
          self.user = user;
          //self.last_name=user.last_name;
          //self.last_login = moment(user.last_login).format("L, HH:MM");
          spinner.hide(idSpinner);
        });
      }
    }
  }
</script>