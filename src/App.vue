<template>
  <div v-if="$mq.phone" v-bind:style="{ 'background-image': 'url(' + imgPath + ')' }">
    <center><b-navbar-brand style="color:#DC3546" href="#/">Car Rental</b-navbar-brand></center>
    <el-menu> 
      <el-submenu index="1">
        <template slot="title">Menu</template>
     <el-menu-item index="2"><a href="#/">Home</a></el-menu-item>
     <el-menu-item index="3"><a href="#/About">About</a></el-menu-item>
     <el-menu-item index="4"><a href="#/Contacts">Contacts</a></el-menu-item>
     <el-menu-item index="5"><a href="#/Login">Login</a></el-menu-item>
     <el-menu-item index="6"><a href="#/Register">Register</a></el-menu-item>
     <el-menu-item index="6"><a href="#/Profile">Profile</a></el-menu-item>
      </el-submenu>
     
</el-menu>

<router-view/>
  </div>
  <div v-else id="app">
    
    <b-navbar toggleable="md" type="dark" variant="danger" style="width:auto">
   
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#/">Car Rental</b-navbar-brand>

    <b-navbar-nav style="width:auto">
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
  components: {
    app
  }
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
