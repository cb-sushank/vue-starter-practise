<template>
  <center>
  <div class="loading-outer">
    <div class="loading-inner"></div>
  </div>
  </center>
</template>

<script lang="ts">
import router from '@/router';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: "Loading",
  mounted(){
    document.title="Loading";
    setTimeout(() => {this.$router.push("./InviteMembers");}, 2000);
  },
})
export default class SampleTemplate extends Vue {
  
}
</script>

<style scoped lang="scss">
  * {
    padding: 0;
    margin: 0;
  }

  body {
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    display: grid;
    place-items: center;
  }

  .loading-outer{
    margin-top: 250px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 8px solid rgba($color: rgb(240, 110, 23), $alpha: .8);;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left-color: transparent;
    border-right-color: transparent;
    animation: rotate-outer 1.5s linear infinite forwards;
    position: relative;
    .loading-inner{
      width: 70px;
      height: 70px;
      border-radius: inherit;
      border: 8px solid rgba($color: rgb(240, 110, 23), $alpha: .8);;
      border-top-color: transparent;
      border-bottom-color: transparent;
      animation: rotate-inner 1.5s linear infinite forwards;
      position: absolute;
    }
  }

  @keyframes rotate-outer {
    50%{
      transform: rotate(200deg);
    }
  }

  @keyframes rotate-inner {
    50%{
      transform: rotate(-400deg);
    }
  }
</style>
