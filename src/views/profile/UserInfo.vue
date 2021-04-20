<template>
    <div class="user-info">
      <NavBar class="nav-bar">
        <div slot="center">用户信息</div>

      </NavBar>
      <div class="header">
        <div class="top">
          <img src="~assets/img/profile/user.png" alt="avatar" width="100%" height="100%" class="avatar">
          <div class="info">
            <div class="row"><span class="mobile">用户名：{{username}}</span></div>
            <div class="row"><span class="uid">账号:{{uid}}</span></div>
          </div>
        </div>

      </div>
      <button type="submit" class="btn btn-block btn-info logout-btn" @click="logout" >退出登录</button>

    </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.min.js'
  import  NavBar from "../../components/common/navbar/NavBar";
  import {getUserInfo} from "../../network/profile";

  export default {
      name: "UserInfo",
      components: {NavBar},
      data(){
        return{
          uid : '',
          username : ''
        }
      },
    mounted() {
        this.getUserInfo()
    },
    methods:{
      logout(){
        localStorage.removeItem('token')
        this.$router.replace('/profile')
      },
      getUserInfo(){
        getUserInfo().then( res =>{
          this.uid = res.uid;
          this.username = res.username
          // console.log("getUserInfo: " , res);
          // console.log(res.uid);
        })
      }
    }
  }

</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }

  .header {
    height: 200px;
    background: linear-gradient(to top left,#ff8198,#ff5777);
  }
  .top {
    padding-top: 30px;
    padding-left: 25px;
    display: flex;
  }

  .avatar {
    width: 72px;
    height: 72px;
    background-color: #fff;
    border-radius: 50%;
    font-size: 0;
    border: 0;
  }

  .info {
    margin-left: 20px;
    color: #f3f3f3;
  }
  .info .row {
    margin: 10px 0;
  }
  .info .mobile {
    color: #f9f9f9;
    font-weight: bold;
  }
  .info .uid {
    font-size: 12px;
    color: #f2f2f2;
  }
  .logout-btn {
    background-color: var(--color-tint);

    border: 0 solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 700;
    line-height: 2.15;
    border-radius: 0;
  }
</style>
