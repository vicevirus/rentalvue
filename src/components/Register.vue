<template>
  <div v-if="$mq.phone" v-bind:style="{ 'background-image': 'url(' + imgPath + ')' }">

<center><b-jumbotron bg-variant="danger" text-variant="white">
  <template slot="header">
    We need your details
  </template>
</b-jumbotron></center>
<center>
   <b-card style="width: auto;height: auto;text-align: center;color: white" v-bind:style="{ 'background-image': 'url(' + imgPath + ')' }" >
    <h5>Full Name</h5><b-form-input type="text"></b-form-input>
    <h5>Email</h5><b-form-input type="email"></b-form-input>
    <h5>Password</h5><b-form-input type="password"></b-form-input>
    <h5>Confirm Password</h5><b-form-input type="password"></b-form-input>
    <h5>IC/Passport Number</h5><b-form-input type="number"></b-form-input>
    <h5>Birth date</h5><b-form-input type="date"></b-form-input>
    <h5>License Number</h5><b-form-input type="number"></b-form-input>
    <h5>License Expiration</h5><b-form-input type="date"></b-form-input>

 <button class="ui primary button" onclick='location.href="/#/EmailVerification"' style="margin:30px">
   Submit
   </button>
   </b-card>
  </center>

  </div>
  <div v-else class="Register" v-bind:style="{ 'background-image': 'url(' + imgPath + ')' }">
    <center><b-jumbotron bg-variant="danger" text-variant="white">
  <template slot="header">
    We need your details
  </template>
</b-jumbotron></center>
<center>
   <b-card style="width: 600px;height: 625px;text-align: center">
    <h5>Full Name</h5><b-form-input type="text"></b-form-input>
    <h5>Email</h5><b-form-input type="email"></b-form-input>
    <h5>Password</h5><b-form-input type="password"></b-form-input>
    <h5>Confirm Password</h5><b-form-input type="password"></b-form-input>
    <h5>IC/Passport Number</h5><b-form-input type="number"></b-form-input>
    <h5>Birth date</h5><b-form-input type="date"></b-form-input>
    <h5>License Number</h5><b-form-input type="number"></b-form-input>
    <h5>License Expiration</h5><b-form-input type="date"></b-form-input>

 <button class="ui primary button" onclick='location.href="/#/EmailVerification"' style="margin:30px">
   Submit
   </button>
   </b-card>
  </center>

  </div>
</template>

<script>
export default {
  name: 'Register',
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
