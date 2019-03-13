<template>
  <div class="dvMenuTop" v-if="user">
    <div class="user">
      <div class="user_welcome">
        {{$t('menutop.welcome')}}
      </div>
      <div class="user_name">
        {{user.last_name}}
      </div>
    </div>
    <div class="last_login">
      <div class="icon">
        <img src="../../assets/image-login.png"/>
      </div>
      <div class="text">
        {{$t('menutop.lastLogin')}}{{moment(user.last_login).format("L, HH:MM")}}{{$t('menutop.letterHour')}}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import './menuTop.less';
</style>
