<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="danger" style="width:auto">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#/">Car Rental</b-navbar-brand>

    <b-navbar-nav>
      <b-nav-item href="#/About"><b>About</b></b-nav-item>
      <b-nav-item href="#/Contacts"><b>Contacts</b></b-nav-item>

      <div class="right">
  <b-nav-item href="#/Login"><b>Login</b></b-nav-item>
  </div>
  <div class="middle">
  <b-nav-item href="#/Profile"><b>Profile</b></b-nav-item>
  </div>
  <div class="left">
  <b-nav-item href="#/Register"><b>Register</b></b-nav-item>
</div>
    </b-navbar-nav>

</b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.right {
    position: absolute;
    right: 0px;
    width: 60px;
    padding: 0px;
}

.middle {
    position: absolute;
    right: 60px;
    width: 60px;
    padding: 0px;
}

.left {
    position: absolute;
    right: 135px;
    width: 60px;
    padding: 0px;
}
</style>
