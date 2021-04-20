<template>
  <div class="order">
    <nav-bar class="nav-bar">
      <div slot="center">用户订单</div>
    </nav-bar>
    <!--<scroll class="content"-->
            <!--ref="scroll"-->
            <!--:probe-type="3"-->
            <!--:pull-upload="true"-->
            <!--@pullingUp="loadMore" >-->

    <order-list :order-list="orderList" @loadMoreOrder="loadMore" ></order-list>
    <!--</scroll>-->
  </div>
</template>

<script>
  import {getOrder} from "../../network/order";
  import NavBar from "components/common/navbar/NavBar";
  import OrderList from "./childComps/OrderList"
  // import Scroll from "components/common/scroll/Scroll";

  export default {
    name: "Order",
    components:{
      NavBar,
      // Scroll,
      OrderList: OrderList
    },
    created(){
      this.getOrder()
    },
    data(){
      return{
        scroll:{},
        page : 1,
        orderList:[],
      }
    },
    methods:{
      loadMore(scroll) {
        console.log("执行loadMoreOrder", scroll);
        this.getOrder(this.page)
        this.scroll = scroll
        // 通知scroll的上拉操作继续监听
        // scroll.refresh()
        // scroll.finishPullUp()
        // this.$refs.scroll && this.$refs.scroll.finishPullUp()
      },

      getOrder(){
        getOrder(this.page).then(res =>{
          this.page ++ ;
          this.orderList.push( ...res.list)
          // 通知scroll的上拉操作继续监听
          this.scroll.refresh()
          this.scroll.finishPullUp()
          console.log("getOrder: " , res);
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

      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 9;
  }

    .order {
      padding-top: 44px;
      height: 100vh;
      position: relative;
    }
    .tab-control {
      position: relative;
      z-index: 9;
    }
  .content {
    overflow: hidden;

    position: absolute;
    top: 1px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
