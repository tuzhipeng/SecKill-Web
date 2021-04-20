<template>
    <scroll class="cart-list"
            ref="scroll"
            :probe-type="3"
            :pull-upload="true"
            @pullingUp="loadMore"
            :data="[orderList]">
      <order-list-item v-for="item in orderList"  :item-info="item"/>
    </scroll>
</template>

<script>
    import Scroll from "components/common/scroll/Scroll";
    import OrderListItem from "./OrderListItem"
    export default {
      name: "OrderList",
      components: {OrderListItem, Scroll},
      props:{
        orderList:{
          type:Array,
          default(){
            return []
          }
        }
      },
      methods:{
        loadMore(){
          this.$emit("loadMoreOrder",this.$refs.scroll)
          // this.$refs.scroll&& this.$refs.scroll.refresh() && this.$refs.scroll.finishPullUp()
        }
      }

    }
</script>

<style scoped>
  .cart-list {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 93px;
  }
</style>
