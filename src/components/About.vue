<template>
  <div class="Home" v-bind:style="{ 'background-image': 'url(' + imgPath + ')' }">
    <center><b-jumbotron bg-variant="danger" text-variant="white">
  <template slot="header">
    About our website
  </template>
</b-jumbotron></center>
<b-card style="width: 1000px;height: 467px;text-align: center;margin:auto">
  <b-jumbotron>
  <template slot="lead">
    <h1>Car Rental is a website that will help you find your desired car in a certain area.It will not only ease the process but it will also save your time searching for your desired car.
      It will also simplify the transaction proccess for achieving your goal which is to rent a car.You wont need to waste energy going to a rental shop etc.
      Everything will be done in few minutes.
    </h1>
  </template>
  </b-jumbotron>
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
