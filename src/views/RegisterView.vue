<script>
import { HOST } from '@/constant';

export default {
  data() {
    return {
      username: '', email: '', password: '', rePassword: ''
    }
  }, methods: {
    changeImage: function (e) {
      const file = e.target.files[0]
      const reader = new FileReader()

      reader.onloadend = () => {
        this.image = reader.result
      }
      reader.readAsDataURL(file)
    },
    onSubmit: async function () {
      if (this.password!=this.rePassword){
        alert('Passwords are wrong')
        return
      }
      const data = {
        'username': this.username,
        'email': this.email,
        'image': this.image||'',
        'password': this.password
      }
      console.log(data);
      const res = await fetch(`${HOST}/register`, {
        method: 'POST', body: JSON.stringify(data), headers: {
          'Content-Type': 'application/json',
        }
      }).then(res => {
        console.log(res);
        alert('با موفقیت ثبت نام شدید')
        window.location.replace('/login')

      })
        .catch(err => console.log(err.message))
      console.log(res);
    },

  }
}
</script>
<template>

  <link href="https://fonts.googleapis.com/css?family=Oxygen:400,300,700" rel="stylesheet" type="text/css" />
  <link href="https://code.ionicframework.com/ionicons/1.4.1/css/ionicons.min.css" rel="stylesheet" type="text/css" />
  <div class="signin cf">
    <div class="avatar"></div>
    <form v-on:submit.prevent="onSubmit">
      <div class="inputrow">
        <input v-model="username" id="name" type="text" placeholder="نام کاربری" />
      </div>
      <div class="inputrow">
        <input v-model="email" id="email" type="email" placeholder="ایمیل" />
      </div>
      <div class="inputrow mt-3">
        <v-file-input id="name" type="file" v-on:change="changeImage" />
      </div>
      <div class="inputrow">
        <input v-model="password" id="pass" type="password" placeholder="گذرواژه" />
      </div>
      <div class="inputrow">
        <input id="pass" v-model="rePassword" type="password" placeholder="تکرار گذرواژه" />
      </div>
      <input type="submit" value="ثبت" />
    </form>
  </div>
</template>

<style scoped>
html,
body {
  min-height: 100%;
  font-family: Oxygen;
  font-weight: 300;
  font-size: 1em;
  color: #fff;
}

body {
  background: #2e3441;
  background-image: -webkit-radial-gradient(top, circle cover, #4e7a89, #2e3441 80%);
  background-image: -moz-radial-gradient(top, circle cover, #4e7a89, #2e3441 80%);
  background-image: -o-radial-gradient(top, circle cover, #4e7a89, #2e3441 80%);
  background-image: radial-gradient(top, circle cover, #4e7a89, #2e3441 80%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.signin {
  display: block;
  position: relative;
  width: 250px;
  margin: 20px auto;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  -webkit-box-shadow: inset 1px 1px 0 0 rgba(255, 255, 255, 0.2), inset -1px -1px 0 0 rgba(0, 0, 0, 0.2);
  -moz-box-shadow: inset 1px 1px 0 0 rgba(255, 255, 255, 0.2), inset -1px -1px 0 0 rgba(0, 0, 0, 0.2);
  box-shadow: inset 1px 1px 0 0 rgba(255, 255, 255, 0.2), inset -1px -1px 0 0 rgba(0, 0, 0, 0.2);
}

.signin .avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto 35px auto;
  border: 5px solid #fff;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  -webkit-pointer-events: none;
  -moz-pointer-events: none;
  pointer-events: none;
}

.signin .avatar:before {
  content: "\f272";
  text-align: center;
  font-family: Ionicons;
  display: block;
  height: 100%;
  line-height: 100px;
  font-size: 5em;
}

.signin .inputrow {
  position: relative;
}

.signin .inputrow label {
  position: absolute;
  top: 12px;
  left: 10px;
}

.signin .inputrow label:before {
  color: #538a9a;
  opacity: 0.4;
  -webkit-transition: opacity 300ms 0 ease;
  -moz-transition: opacity 300ms 0 ease;
  transition: opacity 300ms 0 ease;
}

.signin input[type="text"],
input[type='email'],
.signin input[type="password"] {
  padding: 10px 12px 10px 32px;
  display: block;
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: #fff;
  color: #333;
  font-size: 1em;
  font-weight: 300;
  outline: none;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  -webkit-transition: border-color 300ms 0 ease;
  -moz-transition: border-color 300ms 0 ease;
  transition: border-color 300ms 0 ease;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.signin input[type="text"]:focus+label:before,
.signin input[type="password"]:focus+label:before {
  opacity: 1;
}

.signin input[type="submit"] {
  -webkit-appearance: none;
  height: 40px;
  padding: 10px 12px;
  margin-bottom: 10px;
  background-color: #538a9a;
  text-transform: uppercase;
  color: #fff;
  border: 0px;
  float: right;
  margin: 0;
  outline: none;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.signin input[type="submit"]:hover {
  background-color: #5e98a8;
}

.signin input[type="submit"]:active {
  background-color: #4a7b89;
}

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"]+label {
  position: relative;
  padding-left: 36px;
  font-size: 0.6em;
  font-weight: normal;
  line-height: 16px;
  opacity: 0.8;
  text-transform: uppercase;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

input[type="checkbox"]+label:before,
input[type="checkbox"]+label:after {
  content: "";
  position: absolute;
  display: block;
  height: 16px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
}

input[type="checkbox"]+label:before {
  left: 0;
  top: -2px;
  width: 30px;
  background: rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: inset 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
  box-shadow: inset 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
}

input[type="checkbox"]+label:after {
  opacity: 0.3;
  background: #fff;
  top: 0px;
  left: 2px;
  height: 12px;
  width: 12px;
  -webkit-transition: all 200ms 0 ease;
  -moz-transition: all 200ms 0 ease;
  transition: all 200ms 0 ease;
}

input[type="checkbox"]:checked+label {
  opacity: 1;
}

input[type="checkbox"]:checked+label:after {
  opacity: 1;
  left: 16px;
}

.cf:before,
.cf:after {
  content: " ";
  display: table;
}

.cf:after {
  clear: both;
}

.cf {
  *zoom: 1;
}
</style>