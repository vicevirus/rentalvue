<template>
<div v-if="$mq.phone" >

<center><b-jumbotron bg-variant="danger" text-variant="white">
  <template slot="header">
    Login page
  </template>
</b-jumbotron></center>
      <center><el-card class="box-card" style="width: auto">
    <form @submit.prevent="login">
      <form class="form-signin" @submit.prevent="login">
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="pass" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
    </form>

    </el-card></center>

  </div>



  <div v-else class="Login" v-bind:style="{ 'background-image': 'url(' + imgPath + ')' }">
      <center><b-jumbotron bg-variant="danger" text-variant="white">
  <template slot="header">
    Login page
  </template>
</b-jumbotron></center>
      <center><el-card class="box-card" style="width: 400px">
    <form @submit.prevent="login">
      <form class="form-signin" @submit.prevent="login">
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="pass" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
    </form>

    </el-card></center>
  </div>
</template>

<script>
  import auth from '@/components/auth.js'

  export default {
    data () {
      return {
        imgPath: "https://images.unsplash.com/photo-1457419655743-2e0acc6b5122?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&dl=samuel-zeller-72120-unsplash.jpg",
        email: '',
        pass: '',
      }
    },
    methods: {
      login () {
        auth.login(this.email, this.pass, loggedIn => {
          if (!loggedIn) {
            this.error = true
          } else {
            this.$router.replace(this.$route.query.redirect || '/Profile')
          }
        })
      }
    }
  }
</script>

<style-scoped>
body {
  background: #605B56;
}

.login-wrapper {
  background: #fff;
  width: 70%;
  margin: 12% auto;
}

.form-signin {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style-scoped>