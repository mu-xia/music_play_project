<template>
  <div class="slider" ref="slider">
    <div class="slider-ground" ref="sliderGroup">
      <slot>
      </slot>
    </div>
    <div class="dots">
      <span class="dot" v-for="(item,index) in dots" v-bind:class="{active:currentPageIndex==index}"></span>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import {addClass} from 'common/js/dom'

  /*这个是运用了组件的 props 指定验证规格，数据不符合规格，Vue 会发出警告*/
  export default({
    name:'slider',
   /* components:{
      BScroll
    },*/
    data(){
      return{
        dots:[],
        /*当前默认的是第0页*/
        currentPageIndex:0
      }
    },
    props:{
      /*循环轮播*/
      loop:{
        type:Boolean,
        default:true
      },
      /*自动轮播*/
      autoPlay:{
        type:Boolean,
        default:true
      },
      /*自动轮播的间隔*/
      interval:{
        type:Number,
        default:4000
      }
    },
    /*保证dom成功渲染，需要价格延迟的时间*/
    mounted(){
      setTimeout(()=> {
        this.setSliderWith(),
        this.initDots(),
        this.initSlider()
      },20)
    },
    /*问题：*/
    methods:{
      /*这个方法是获取图片的总宽度*/
      setSliderWith(){
        // 访问子组件
        this.children = this.$refs.sliderGroup.children;

        let width = 0;
        let sliderWidth = this.$refs.slider.clientWidth;
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i];
          addClass(child, 'slider-item');

          child.style.width = sliderWidth + 'px';
          width += sliderWidth
        }
        if (this.loop) {
          width += 2 * sliderWidth
        }
        this.$refs.sliderGroup.style.width = width + 'px'
      },
      initDots(){
        this.dots=new Array(this.children.length)
      }
      ,
      /*BScroll的初始话*/
      initSlider(){
        this.slider=new BScroll(this.$refs.slider,{
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap:{
            loop:this.loop
          },
          snapThreshold: 0.3,
          snapSpeed: 400
        }),

        /*初始化的时候绑定一个事件，在滚动结束的时候触发*/
        this.slider.on('scrollEnd', () => {
          let pageIndex = this.slider.getCurrentPage().pageX
          if (this.loop) {
          pageIndex -= 1
        }
        this.currentPageIndex = pageIndex

      })
      },
    }

  })
</script>

<style>
  .slider{
    min-height: 1px;
  }
  .slider-ground{
    position: relative;
    overflow: hidden;
    white-space: nowrap;
  }
  .slider-item{
    float: left;
    box-sizing: border-box;
    overflow: hidden;
    text-align: center;
  }
  .slider-item a{
    display: block;
    width: 100%;
    overflow: hidden;
    text-decoration: none;
  }
  .slider-ground img{
    display: block;
    width: 100%;
  }
  .dots{
    position: absolute;
    right: 0;
    left: 0;
    top: 238px;
    text-align: center;
    font-size: 0
  }
  .dot{
    display: inline-block;
    margin: 0 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background:yellow;
  }
  .active{
    width: 20px;
    border-radius: 5px;
    background: pink;
  }

</style>
