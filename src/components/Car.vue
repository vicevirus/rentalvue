<template>
<div v-if="$mq.phone">
  <center><b-jumbotron bg-variant="danger" text-variant="white" header="Available Cars" >
      <p> Click on your desired car</p>
</b-jumbotron></center>
<center><b-card style="width: auto;height: auto">
    <el-input placeholder="Search here" v-model="input"></el-input>
   <el-table
    :data="tableDataMobile"
    border
    style="width: auto">
    <el-table-column
      prop="Kereta"
      label="Car"
      width="80">
    </el-table-column>
    <el-table-column
      prop="Harga"
      label="P/H"
      width="80">
    </el-table-column>
    <el-table-column
      prop="Gambar"
      label="Picture"
      width="150">
    </el-table-column>
    
  </el-table>
  </b-card></center>
</div>
<div v-else class="car"  v-bind:style="{ 'background-image': 'url(' + imgPath + ')' }">
    <center><b-jumbotron bg-variant="danger" text-variant="white" header="Available Cars" >
      <p> Click on your desired car</p>
</b-jumbotron></center>
<center><b-card style="width: 1000px;height: 1200px;text-align: center;margin:auto">
    <el-input placeholder="Search here" v-model="input"></el-input>
   <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="Kereta"
      label="Car"
      width="180">
    </el-table-column>
    <el-table-column
      prop="Harga"
      label="Price/Hour"
      width="180">
    </el-table-column>
    <el-table-column
      prop="Transmisi"
      label="Transmission">
    </el-table-column>
    <el-table-column
      prop="Gambar"
      label="Picture">
    </el-table-column>
    
  </el-table>
  </b-card></center>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        imgPath: "https://images.unsplash.com/photo-1457419655743-2e0acc6b5122?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&dl=samuel-zeller-72120-unsplash.jpg",
        tableData: [{
          Kereta: <a href="#/Rent"><h5>Proton Saga</h5></a>,
          Harga: <b>RM1829</b>,
          Transmisi: <b>Manual</b>,
          Gambar: <img src="https://i.ytimg.com/vi/UZY8JUi2uZM/hqdefault.jpg" style="width: 250px;height:150px"> </img>
        }, {
          Kereta: <a href="google.com"><h5>Kancil Turbo</h5></a>,
          Harga: <b>RM500</b>,
          Transmisi: <b>Manual</b>,
          Gambar: <img src="https://media.karousell.com/media/photos/products/2017/08/28/kancil_turbo_1503888229_07af211d.jpg" style="width: 250px;height:150px"> </img>
        },
        {
          Kereta: <a href="google.com"><h5>Proton Exora</h5></a>,
          Harga: <b>RM234</b>,
          Transmisi: <b>Automatik</b>,
          Gambar: <img src="https://sitecoreblobv2.blob.core.windows.net/protoncontainer/%7B9C6CE68C-4DAB-4B5B-B53A-2A9C9B05B376%7Dwhite_01.png" style="width: 250px;height:150px"> </img>
        },
        {
          Kereta: <a href="google.com"><h5>Nissan Grand Livina</h5></a>,
          Harga: <b>RM594</b>,
          Transmisi: <b>Manual</b>,
          Gambar: <img src="https://www.mymotor.my/images/marketplace/2017-06-14/AkaBLZPh-000-1497425350rdAy.jpg" style="width: 250px;height:150px"> </img>
        },
        {
          Kereta: <a href="google.com"><h5>Proton Perdana</h5></a>,
          Harga: <b>RM722</b>,
          Transmisi: <b>Automatik</b>,
          Gambar: <img src="https://sitecoreblobv2.blob.core.windows.net/protoncontainer/%7B248AFA4E-CABF-4E4A-B4CF-8113627E6F36%7Dgrey_01.png" style="width: 250px;height:150px"> </img>
        },
        {
          Kereta: <a href="google.com"><h5>Proton Saga</h5></a>,
          Harga: <b>RM1829</b>,
          Transmisi: <b>Manual</b>,
          Gambar: <img src="https://www.proton.com/-/media/Project/Proton-Group/Proton/Media/Car-Models/Saga/Navigation/saga-icon.ashx?h=170&la=en&w=442&hash=5A11D15F4FAD9F2B690B0476361CBB707F0357F8" style="width: 250px;height:150px"> </img>
        }],


        tableDataMobile: [{
          Kereta: <a href="#/Rent"><h5>Proton Saga</h5></a>,
          Harga: <b>RM1829</b>,
          Transmisi: <b>Manual</b>,
          Gambar: <img src="https://i.ytimg.com/vi/UZY8JUi2uZM/hqdefault.jpg" style="width: 130px;height:150px"> </img>
        }, {
          Kereta: <a href="google.com"><h5>Kancil Turbo</h5></a>,
          Harga: <b>RM500</b>,
          Transmisi: <b>Manual</b>,
          Gambar: <img src="https://media.karousell.com/media/photos/products/2017/08/28/kancil_turbo_1503888229_07af211d.jpg" style="width: 130px;height:150px"> </img>
        },
        {
          Kereta: <a href="google.com"><h5>Proton Exora</h5></a>,
          Harga: <b>RM234</b>,
          Transmisi: <b>Automatik</b>,
          Gambar: <img src="https://sitecoreblobv2.blob.core.windows.net/protoncontainer/%7B9C6CE68C-4DAB-4B5B-B53A-2A9C9B05B376%7Dwhite_01.png" style="width: 130px;height:150px"> </img>
        },
        {
          Kereta: <a href="google.com"><h5>Nissan Grand Livina</h5></a>,
          Harga: <b>RM594</b>,
          Transmisi: <b>Manual</b>,
          Gambar: <img src="https://www.mymotor.my/images/marketplace/2017-06-14/AkaBLZPh-000-1497425350rdAy.jpg" style="width: 130px;height:150px"> </img>
        },
        {
          Kereta: <a href="google.com"><h5>Proton Preve</h5></a>,
          Harga: <b>RM722</b>,
          Transmisi: <b>Automatik</b>,
          Gambar: <img src="https://sitecoreblobv2.blob.core.windows.net/protoncontainer/%7B248AFA4E-CABF-4E4A-B4CF-8113627E6F36%7Dgrey_01.png" style="width: 130px;height:150px"> </img>
        },
        {
          Kereta: <a href="google.com"><h5>Proton Saga</h5></a>,
          Harga: <b>RM1829</b>,
          Transmisi: <b>Manual</b>,
          Gambar: <img src="https://www.proton.com/-/media/Project/Proton-Group/Proton/Media/Car-Models/Saga/Navigation/saga-icon.ashx?h=170&la=en&w=442&hash=5A11D15F4FAD9F2B690B0476361CBB707F0357F8" style="width: 130px;height:150px"> </img>
        }]
      }
    }
  }
</script>