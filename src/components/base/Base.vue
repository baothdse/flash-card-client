<template>
    <div class="base">
        <login-form></login-form>
    </div>
</template>

<script>
import LoginForm from '@/components/login/LoginForm'
export default {
  name: "Base",
  components: {
    "login-form" : LoginForm
  }
}
</script>
<style>
@import url("../../css/utils.css");
.base {
    background: #e6eaea;
    width: 100%;
    min-width: 360px;
    max-width: 100%;
    height: 100vh;
    min-height: 300px;
    max-height: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
}

@media screen and (max-width: 360px) {
  #base {
    width: 100%;
    height: 100vh;
  }
}
</style>





