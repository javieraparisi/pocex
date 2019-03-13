<script>
  import Vue from 'vue'
  import VM from './menuTopVM.vue';
  import View from './menuTopView.vue';
  export default Vue.extend({
    mixins: [VM, View]
  });
</script>