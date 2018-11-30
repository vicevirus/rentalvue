<template>
<div class="hello" v-bind:style="{ 'background-image': 'url(' + imgPath + ')' }">
<center><el-card style="width: 600px"><h1>Is this the car you are looking for? </h1></el-card></center>
<center><b-card style="width: 1000px;height: 1070px;text-align: center;margin:auto">
    <h4 slot="header"><b>Proton Saga</b></h4>
    <center><b-card no-body
            style="width: 600px"
            img-src="https://i.ytimg.com/vi/UZY8JUi2uZM/hqdefault.jpg"
            img-alt="Image"
            img-top>
        
        <b-card-body>
            <h4 class="card-text">
                Car manufactured by Proton that is resilient and well suited for long rides.
            </h4>
        </b-card-body>
        <h4 class="card-text"><b>
                Features</b>
            </h4>
        <b-list-group flush>
            <b-list-group-item>4 Seater</b-list-group-item>
            <b-list-group-item>Manual Transmission</b-list-group-item>
            <b-list-group-item>Fuel Saving</b-list-group-item>
            <b-list-group-item>Air-conditioned</b-list-group-item>
        </b-list-group>
        <h4 class="card-text"><b>
                Price per hour</b>
            </h4>
            <b-list-group-item>RM1829</b-list-group-item>
    </b-card></center>
    <button class="ui primary button" onclick='location.href="/#/Payment"' style="margin:30px">
   Rent
   </button>
<h4 class="card-text">
                If you would like to rent this car please <a href="/#/Login">Login</a> or <a href="#/Register">Register</a> first.
            </h4>
        </b-card-body>
    </b-card></center>

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