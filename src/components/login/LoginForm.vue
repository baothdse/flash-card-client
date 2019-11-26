<template>
  <div class="wrap-login">
    <v-form class="login-form">
      <span class="login-form-title">Welcome</span>
      <span class="login-form-avatar">
        <img src="http://emilcarlsson.se/assets/mikeross.png" alt="AVATAR" />
      </span>
      <div class="wrap-input validate-input m-t-85 m-b-35" data-validate="Enter username">
        <input
          v-model="username"
          :class="['input', hasUsername && 'has-val']"
          @change="focusInput"
          type="text"
        />
        <span class="focus-input" data-placeholder="Username"></span>
      </div>
      <div class="wrap-input validate-input m-b-50" data-validate="Enter password">
        <input
          v-model="password"
          :class="['input', hasPassword && 'has-val']"
          @change="focusInput"
          type="password"
        />
        <span class="focus-input" data-placeholder="Password"></span>
      </div>
      <div class="container-login-form-btn">
        <v-btn class="login-form-btn" color="success" @click="login">Login</v-btn>
      </div>
      <div class="error-message m-t-15 text-center" ref="errorMessage" v-show="showError">
        <span class="txt1">
          <p>{{ errorMessage }}</p>
        </span>
      </div>
      <ul class="login-more p-t-190">
        <li class="m-b-8">
          <span class="txt1">Forgot</span>

          <a href="#" class="txt2">Username / Password?</a>
        </li>
        <li>
          <span class="txt1">Don’t have an account?</span>
          <a href="/regist" class="txt2">Sign up</a>
        </li>
      </ul>
    </v-form>
  </div>
</template>

<script>
import userApi from "../../api/user.js";
import messageConstants from "../../constants/message.js";
import { mapActions, mapState } from "vuex";

export default {
  name: "LoginForm",
  components: {},
  data() {
    return {
      username: "",
      password: "",
      hasUsername: false,
      hasPassword: false,
      showError: false,
      errorMessage: ""
    };
  },
  methods: {
    login() {
      if (!this.username || !this.password) {
        this.showError = true;
        this.errorMessage = messageConstants.ERROR.MISSING_USERNAME_PASSWORD;
        return;
      }
      userApi.login(this.username, this.password, response => {
        if (response.status === 200) {
          this.$router.push("/dashboard");
        } else {
          this.showError = true;
          this.errorMessage = messageConstants.ERROR.INCORECT_USERNAME_PASSWORD;
        }
      });
    },
    focusInput(event) {
      this.hasUsername = this.username === "" ? false : true;
      this.hasPassword = this.password === "" ? false : true;
    }
  }
};
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  font-family: Poppins-Regular, sans-serif;
}

/*---------------------------------------------*/
a {
  font-family: Poppins-Regular;
  font-size: 14px;
  line-height: 1.7;
  color: #666666;
  margin: 0px;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
}

a:focus {
  outline: none !important;
}

a:hover {
  text-decoration: none;
  color: #333333;
}

/*---------------------------------------------*/
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0px;
}

p {
  font-family: Poppins-Regular;
  font-size: 14px;
  line-height: 1.7;
  color: #666666;
  margin: 0px;
}

ul,
li {
  margin: 0px;
  list-style-type: none;
}

/*---------------------------------------------*/
input {
  outline: none;
  border: none;
}

textarea {
  outline: none;
  border: none;
}

textarea:focus,
input:focus {
  border-color: transparent !important;
}

/*---------------------------------------------*/
button {
  outline: none !important;
  border: none;
  background: transparent;
}

button:hover {
  cursor: pointer;
}

iframe {
  border: none !important;
}

.wrap-login {
  width: 390px;
}
.login-form {
  width: 100%;
}
.login-form-title {
  display: block;
  font-family: Poppins-Bold;
  font-size: 39px;
  color: #333333;
  line-height: 1.2;
  text-align: center;
}
.login-form-avatar {
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
}

.login-form-avatar img {
  width: 100%;
}

.wrap-input {
  width: 100%;
  position: relative;
  border-bottom: 2px solid #d9d9d9;
}

.input {
  font-family: Poppins-SemiBold;
  font-size: 18px;
  color: #555555;
  line-height: 1.2;

  display: block;
  width: 100%;
  height: 52px;
  background: transparent;
  padding: 0 5px;
}

.focus-input {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.focus-input::before {
  content: "";
  display: block;
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;

  background: #57b846;
}

.focus-input::after {
  font-family: Poppins-Medium;
  font-size: 18px;
  color: #999999;
  line-height: 1.2;

  content: attr(data-placeholder);
  display: block;
  width: 100%;
  position: absolute;
  top: 15px;
  left: 0px;
  padding-left: 5px;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.input:focus + .focus-input::after {
  top: -20px;
  font-size: 15px;
}

.input:focus + .focus-input::before {
  width: 100%;
}

.has-val.input + .focus-input::after {
  top: -20px;
  font-size: 15px;
}

.has-val.input + .focus-input::before {
  width: 100%;
}

/*------------------------------------------------------------------
[ Button ]*/
.container-login-form-btn {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.login-form-btn {
  font-family: Poppins-Medium;
  font-size: 16px;
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #57b846;
  border-radius: 25px;

  box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);
  -moz-box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);
  -webkit-box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);
  -o-box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);
  -ms-box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.login-form-btn:hover {
  background-color: #333333;
  box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);
  -moz-box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);
  -webkit-box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);
  -o-box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);
  -ms-box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);
}

/*------------------------------------------------------------------
[ Alert validate ]*/

.validate-input {
  position: relative;
}

.alert-validate::before {
  content: attr(data-validate);
  position: absolute;
  max-width: 70%;
  background-color: #fff;
  border: 1px solid #c80000;
  border-radius: 2px;
  padding: 4px 25px 4px 10px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 0px;
  pointer-events: none;

  font-family: Poppins-Regular;
  color: #c80000;
  font-size: 13px;
  line-height: 1.4;
  text-align: left;

  visibility: hidden;
  opacity: 0;

  -webkit-transition: opacity 0.4s;
  -o-transition: opacity 0.4s;
  -moz-transition: opacity 0.4s;
  transition: opacity 0.4s;
}

.alert-validate::after {
  content: "\f06a";
  font-family: FontAwesome;
  font-size: 16px;
  color: #c80000;

  display: block;
  position: absolute;
  background-color: #fff;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 5px;
}

.alert-validate:hover:before {
  visibility: visible;
  opacity: 1;
}

@media (max-width: 992px) {
  .alert-validate::before {
    visibility: visible;
    opacity: 1;
  }
}

.login-more li {
  position: relative;
  padding-left: 16px;
}

.login-more li::before {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #cccccc;
  top: 45%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 0;
}

.txt1 {
  font-family: Poppins-Regular;
  font-size: 15px;
  color: #999999;
  line-height: 1.5;
}

.txt2 {
  font-family: Poppins-Regular;
  font-size: 15px;
  color: #57b846;
  line-height: 1.5;
}

.error-message {
  visibility: visible;
  color: red;
}
</style>

