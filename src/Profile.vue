<template>
  <h1> {{ profile }}'s profile page</h1>
</template>
<script>
import { useRoute } from 'vue-router';

export default {
  name: 'Profile',
  data() {
    return {
      profile: ''
    }
  },
  mounted() {
    const route = useRoute();
    this.profile = route.params.name;
  }

}
</script>
<!-- <template>
    <router-link to="/">Home</router-link> <br>
    <router-link to="/login">Login</router-link><br>
    <router-link to="/profile/samar">samar's Profile</router-link> <br>
    <router-link to="/profile/aniket">aniket's Profile</router-link> <br>
    <router-link to="/profile/dhoni">dhoni's Profile</router-link> <br>
  
    <router-view></router-view>
  
  </template>
  <script> -->

<!-- // export default {
// name: "App",
// watch: {
// // Watch for changes in the route
// $route(to, from) {
// console.log("Route changed:");
// console.log("From:", from.fullPath); // Previous route
// console.log("To:", to.fullPath); // Current route

// // Example action: Scroll to top on route change
// window.scrollTo(0, 0);
// }
// }

// } -->
<!-- </script> -->