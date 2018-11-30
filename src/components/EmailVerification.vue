<template>
  <div class="Home" v-bind:style="{ 'background-image': 'url(' + imgPath + ')' }">
    <center><b-jumbotron bg-variant="danger" text-variant="white">
  <template slot="header">
    Email Verification
  </template>
</b-jumbotron></center>
<b-card style="width: 1000px;height: 467px;text-align: center;margin:auto">
  <h1>Please check your email for verification and you may proceed</h1>

  <button class="ui primary button" onclick='location.href="/#/Car"' style="margin:30px">
   Rent A Car Now
   </button>
   <button class="ui primary button" onclick='location.href="/#/Profile"' style="margin:30px">
   Visit your profile
   </button>
</b-card>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      imgPath: "https://images.unsplash.com/photo-1457419655743-2e0acc6b5122?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&dl=samuel-zeller-72120-unsplash.jpg"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
