<template>
  <div class="profile">
  <NavBar class="nav-bar">
    <div slot="center">用户登录</div>
  </NavBar>
  <div class="container">
    <div class="row">
      <div class="col-md-6">

          <!-- 添加filedset表单域  -->
          <fieldset>
            <!-- 添加表单标题，请使用表单专用标题，legend -->
            <legend>用户登陆</legend>
            <!-- 这个legend标题自带一个水平线 -->
            <div class="form-group">
              <label for="name">用户账号：</label>
              <input type="text" class="form-control" id="name" placeholder="User Name" v-model="uid">
              <p class="help-block">可以使用手机或者邮箱登陆</p>
            </div>

            <div class="form-group">
              <label for="pw">用户密码：</label>
              <input type="password" class="form-control" id="pw" placeholder="Password" v-model="password">
              <p class="help-block">不能少于6位</p>
            </div>

          </fieldset>
          <button type="submit" class="btn btn-block btn-info login-btn" @click="login" >提交</button>

      </div>
    </div>
  </div>
  </div>
</template>

<script >
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.min.js'
  import NavBar from "../../components/common/navbar/NavBar";
  import {login} from "../../network/profile";


  export default {
    name: "Profile",
    components: {NavBar},
    // created() {
    //   this.$toast.showMessage()
    // }
    data(){
      return {
        uid : '',
        password : ''
      }
    },
    methods:{
      login(){
        console.log("响应点击事件", this.uid, this.password);
        login(this.uid, this.password).then( res => {
          console.log("接收到服务器返回的token； " , res.token);
          localStorage.setItem('token', res.token)

          this.$router.replace({
            path:'/userInfo',

          })
        })
      },


    }
  }
</script>


<style scoped>

  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .login-btn {
    background-color: var(--color-tint);
  }
</style>
