<template>
  <div id="app">
    <router-view/>
    <div class="dvSpinner" v-if="$store.state.showSpinner">
      <img src="@/assets/spinner.gif"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import './sharedLess/App.less';
  @import './sharedLess/colors.less';
  @import './sharedLess/spinner.less';
</style>
