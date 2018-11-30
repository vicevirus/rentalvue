<template>
<div id="profile" v-bind:style="{ 'background-image': 'url(' + imgPath + ')' }">
    <center><b-jumbotron bg-variant="danger" text-variant="white">
  <template slot="header">
    Profile page
  </template>
</b-jumbotron></center>
<center><el-card class="box-card" style="width: 500px;height:800px">
  <div>
      <v-avatar
            :tile="tile"
            :size="400"
            color="grey lighten-4">
            <img src="@/assets/disk.jpg">
          </v-avatar>
    <h3><b>Full Name:</b></h3>
    <el-input type="text" v-model="FullName" :disabled="!isEditing"
           :class="{view: !isEditing}"
           style="width: 400px"></el-input>
  </div>
  <div>
  <h3><b>Email:</b></h3>
    <el-input type="text" v-model="Email" :disabled="!isEditing"
           :class="{view: !isEditing}"
           style="width: 400px"></el-input>
  </div>
  <div>
  <h3><b>Birth Date</b></h3>
    <el-input type="text" v-model="Tarikh" :disabled="!isEditing"
           :class="{view: !isEditing}"
           style="width: 400px"></el-input>
  </div>
  <div>
  <h3><b>IC/Passport Number:</b></h3>
    <el-input type="text" v-model="IC" :disabled="!isEditing"
           :class="{view: !isEditing}"
           style="width: 400px"></el-input>
  </div>
   <el-button type="primary" plain @click="isEditing = !isEditing">
    {{ isEditing ? 'Save' : 'Edit' }}
  </el-button>
  <el-button type="primary" plain v-if="isEditing" @click="isEditing = false">Cancel</el-button>
  </el-card></center>
</div>


</template>

<script>

export default {
    data() {
        return {
            imgPath: "https://images.unsplash.com/photo-1457419655743-2e0acc6b5122?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&dl=samuel-zeller-72120-unsplash.jpg",
            FullName: 'Salman bin Abu',
            Email: 'kelik@gmail.com',
            Tarikh: '01-02-2018',
            IC: '05550-23-5049',
            isEditing: false
        }
    }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
.app {
  border-color: transparent;
  background-color: initial;
  color: initial
}

</style>
