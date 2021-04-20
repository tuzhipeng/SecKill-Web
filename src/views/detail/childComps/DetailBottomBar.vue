<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart" v-show="!isSecKill">加入购物车</div>
      <div class="buy"  @click="generateOrder">立即购买</div>
    </div>
    <!--<sport-ball ref="ball" class="sport-ball"></sport-ball>-->
  </div>
</template>

<script>
	// import SportBall from 'components/content/sportBall/SportBall'

	export default {
		name: "DetailBottomBar",
    components: {
			// SportBall
    },
    props:{
		  isSecKill:{
		    type: Boolean,
        default: false
      }
    },
    methods: {

      addToCart() {
      	// this.$refs.ball.run(event.target)
        this.$emit('addToCart')
      },
      generateOrder(){
        // 根据是否为秒杀商品发送不同的信号，从而交给不同的模块处理
        if (this.isSecKill){
          this.$emit('generateSecKillOrder')
        } else {
          this.$emit('generateOrder')
        }

      }
    }
	}
</script>

<style scoped>
  .bottom-bar {
    height: 58px;
    position: fixed;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    text-align: center;
    align-items: center;
  }

  .bar-item {
    flex: 1;
    display: flex;
  }

  .bar-item>div {
    flex: 1;
  }

  .bar-left .text {
    font-size: 13px;
  }

  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .bar-left .service {
    background-position:0 -54px;
  }

  .bar-left .shop {
    background-position:0 -98px;
  }

  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 58px;
  }

  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
  }

  .bar-right .buy {
    background-color: #f69;
  }

  .sport-ball {
    position: absolute;
    left: 225px;
    bottom: 20px;
  }
</style>
