<script>
  import Vue from 'vue'
  import VM from './portfolioVM.vue';
  import View from './portfolioView.vue';
  export default Vue.extend({
    mixins: [VM, View]
  });
</script>