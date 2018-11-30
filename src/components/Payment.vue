<template>
  <div class="Home" v-bind:style="{ 'background-image': 'url(' + imgPath + ')' }">
    <center><b-jumbotron bg-variant="danger" text-variant="white">
  <template slot="header">
    Payment
  </template>
</b-jumbotron></center>
<b-card style="width: 1000px;height: 467px;text-align: center;margin:auto">
  <h1 class="card-text"><b>
                Checkout list</b>
            </h1>
        <b-list-group flush>
            <b-list-group-item><h3><b>Proton Saga Booking</b></h3> <h1>RM1829.00</h1></b-list-group-item>
        </b-list-group>
        <h1 class="card-text"><b>
                Grand total <h1><b>RM1829.00</b></h1></b>
            </h1>
            <h1 class="card-text">
                You can pay through these portals
            </h1>
            <a href="https://www.paynet.my/business-fpx.html"><img src="https://www.maybank2u.com.my/WebBank/fpx_lg.jpg" style="width:100px"/></a>
            <a href="https://cimbclicks.com.my"><img src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0016/4723/brand.gif?itok=XfB0zFbw" style="width:100px"/></a>
            <a href="https://maybank.com.my"><img src="https://assets.nst.com.my/images/articles/maybank_13_1513248610.jpg" style="width:100px"/></a>
            <a href="https://ambank.com.my"><img src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/032011/ambank.png?itok=1JWJzr2D" style="width:100px"/></a>

            <h1 class="card-text">
                Thanks for renting with us!
            </h1>
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
