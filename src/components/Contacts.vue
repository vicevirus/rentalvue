<template>
<div v-if="$mq.phone" v-bind:style="{ 'background-image': 'url(' + imgPath + ')' }">

<center><b-jumbotron bg-variant="danger" text-variant="white" >
  <template slot="header">
    Want to contact us directly?
  </template>
  <template slot="lead">
    You can call using the phone number shown below or PM us through social media.
  </template>
  <hr class="my-4">
  <h3>
    <b>0140402040</b> <b>(Puan Salman Ali)</b>
    or
    <b>0140432432</b> <b>(Encik Salu Almi)</b>
  </h3>
</b-jumbotron></center>
     <center><el-card class="box-card" style="width: auto;height: auto;text-align: center">
  <h1 class="card-text"><b>
    Our Social Media Accounts
  </b></h1>
  <center>
  <h5 class="card-text" style="color:#38A1F3"><b>
    Twitter <img src="https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png" style="width:30px;height:30px"> </img>
  </b></h5></center>
  <b-button href="twitter.com" variant="primary">Mark Adam</b-button>
  <b-button href="twitter.com" variant="primary">Siti Salmah</b-button>
  <center><h5 class="card-text" style="color:#3B5998;"><b>
    Facebook <img src="https://blog.addthiscdn.com/wp-content/uploads/2015/11/facebook_2.png" style="width:30px;height:30px"> </img>
  </b></h5></center>
  <b-button href="twitter.com" variant="success">Mark Adam</b-button>
  <b-button href="twitter.com" variant="success">Siti Salmah</b-button>
  <center><h5 class="card-text" style="color:#db4a39;"><b>
    Google+ <img src="https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_videoposter_006.jpg" style="width:80px;height:40px"> </img>
  </b></h5></center>
  <b-button href="twitter.com" variant="warning">Mark Adam</b-button>
  <b-button href="twitter.com" variant="warning">Siti Salmah</b-button>
  <center><h5 class="card-text" style="color:#bc2a8d;"><b>
    Instagram <img src="https://instagram-brand.com/wp-content/uploads/2016/11/app-icon2.png" style="width:30px;height:30px"> </img>
  </b></h5></center>
  <b-button href="twitter.com" variant="secondary">Mark Adam</b-button>
  <b-button href="twitter.com" variant="secondary">Siti Salmah</b-button>
     </el-card></center>


  </div>

  <div v-else class="Home" v-bind:style="{ 'background-image': 'url(' + imgPath + ')' }">
    <center><b-jumbotron bg-variant="danger" text-variant="white" >
  <template slot="header">
    Want to contact us directly?
  </template>
  <template slot="lead">
    You can call using the phone number shown below or PM us through social media.
  </template>
  <hr class="my-4">
  <h3>
    <b>0140402040</b> <b>(Puan Salman Ali)</b>
    or
    <b>0140432432</b> <b>(Encik Salu Almi)</b>
  </h3>
</b-jumbotron></center>
     <center><el-card class="box-card" style="width: 600px;height: 363px;text-align: center">
  <h1 class="card-text"><b>
    Our Social Media Accounts
  </b></h1>
  <center>
  <h5 class="card-text" style="color:#38A1F3"><b>
    Twitter <img src="https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png" style="width:30px;height:30px"> </img>
  </b></h5></center>
  <b-button href="twitter.com" variant="primary">Mark Adam</b-button>
  <b-button href="twitter.com" variant="primary">Siti Salmah</b-button>
  <center><h5 class="card-text" style="color:#3B5998;"><b>
    Facebook <img src="https://blog.addthiscdn.com/wp-content/uploads/2015/11/facebook_2.png" style="width:30px;height:30px"> </img>
  </b></h5></center>
  <b-button href="twitter.com" variant="success">Mark Adam</b-button>
  <b-button href="twitter.com" variant="success">Siti Salmah</b-button>
  <center><h5 class="card-text" style="color:#db4a39;"><b>
    Google+ <img src="https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_videoposter_006.jpg" style="width:80px;height:40px"> </img>
  </b></h5></center>
  <b-button href="twitter.com" variant="warning">Mark Adam</b-button>
  <b-button href="twitter.com" variant="warning">Siti Salmah</b-button>
  <center><h5 class="card-text" style="color:#bc2a8d;"><b>
    Instagram <img src="https://instagram-brand.com/wp-content/uploads/2016/11/app-icon2.png" style="width:30px;height:30px"> </img>
  </b></h5></center>
  <b-button href="twitter.com" variant="secondary">Mark Adam</b-button>
  <b-button href="twitter.com" variant="secondary">Siti Salmah</b-button>
     </el-card></center>

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
