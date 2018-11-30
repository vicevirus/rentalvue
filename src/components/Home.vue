<template>

<div v-if="$mq.phone" v-bind:style="{ 'background-image': 'url(' + imgPath + ')' }">

  <center><b-jumbotron bg-variant="danger" text-variant="white">
  <template slot="header">
    Car Rental
  </template>
  <template slot="lead">
    Renting a car have never been easier
  </template>

  <center>
   <b-card style="width: auto;height: auto;color: black">
    <h1>Pick location</h1>
    <gmap-autocomplete placeholder="Pickoff location" style="width:auto;border-radius: 7px;" @place_changed="setPlace"></gmap-autocomplete>
    <h5>Drop Location</h5><gmap-autocomplete placeholder="Dropoff location" style="width:auto;border-radius: 7px;" @place_changed="setPlace"></gmap-autocomplete>
    <h5>Pickoff date</h5><b-form-input type="date"></b-form-input>
    <h5>Dropoff date</h5><b-form-input type="date"> </b-form-input>
    
    <h5>Start time and end time</h5>
    <el-time-picker style="width: auto;height: auto" is-range v-model="value4" range-separator=">" start-placeholder="Start time" end-placeholder="End time">
  </el-time-picker>

 <button class="ui primary button" onclick='location.href="/#/Car"' style="margin:30px">
   Search for your desired car
   </button>
   </b-card>
  </center>

</b-jumbotron></center>
  </b-card>

  </div>
  <div v-else class="hello" v-bind:style="{ 'background-image': 'url(' + imgPath + ')' }">



<center><b-jumbotron bg-variant="danger" text-variant="white">
  <template slot="header">
    Car Rental
  </template>
  <template slot="lead">
    Renting a car have never been easier
  </template>
</b-jumbotron></center>

        
 <center>
   <b-card style="width: 600px;height: 436px;text-align: center">
    <h5>Pick location</h5><gmap-autocomplete style="width:550px;border-radius: 7px;" @place_changed="setPlace"></gmap-autocomplete>
    <h5>Drop Location</h5><gmap-autocomplete style="width:550px;border-radius: 7px;" @place_changed="setPlace"></gmap-autocomplete>
    <h5>Pickoff date</h5><b-form-input type="date"></b-form-input>
    <h5>Dropoff date</h5><b-form-input type="date"> </b-form-input>
    
    <h5>Start time and end time</h5>
    <el-time-picker is-range v-model="value4" range-separator=">" start-placeholder="Start time" end-placeholder="End time">
  </el-time-picker>

 <button class="ui primary button" onclick='location.href="/#/Car"' style="margin:30px">
   Search for your desired car
   </button>
   </b-card>
  </center>
  
  </div>

  

</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      imgPath: "https://images.unsplash.com/photo-1457419655743-2e0acc6b5122?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&dl=samuel-zeller-72120-unsplash.jpg",
      value4: [new Date(2018, 0, 0, 0, 0), new Date(2018, 0, 0, 0, 0)],
      value5: [new Date(2018, 0, 0, 0, 0), new Date(2018, 0, 0, 0, 0)]
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
