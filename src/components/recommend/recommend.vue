<template>
  <div class="recommend" ref="recommend">
    <scroll class="recommend-content" :data="discList">
      <div>
        <div v-if="recommends.length" class="slider-wrapper">
          <slider>
            <div v-for="item in recommends">
              <a v-bind:href="item.linkUrl">
                <img v-bind:src="item.picUrl">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="item in discList" class="item">
              <div class="icon">
                <img width="60" height="60" v-bind:src="item.imgurl"/>
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </scroll>
   </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Slider from 'base/slider/slider'
  /*调用了getRecommend的方法，这个方法是封装了jsonp，进行拼接url*/
  import {getRecommend,getDiscList} from 'api/recommend'
  import {ERR_OK} from 'api/config'



  export default {
      name:'recommend',
    data(){
      return{
        /*轮播图的数据*/
          recommends:[],
        /*歌单的数据*/
          discList:[]
      }
    },
    components:{
      Slider,
      Scroll
    },
    /*使用生命周期的钩子，dom不能渲染，mounted这里是可以渲染dom*/
    created(){
      this.gerComment();
      this.getScList()
    },
    methods:{
      /*轮播图的方法*/
     gerComment(){
       getRecommend().then((res)=>{
         /*获取推荐的数据的返回值是成功的话*/
          if(res.code==ERR_OK){
            this.recommends=res.data.slider
          }
       })
     },
      /*歌单的方法*/
     getScList(){
       getDiscList().then((res)=>{
         if(res.errno==ERR_OK){
          console.log(res)
           /*console.log(res.data);*/
          this.discList=res.data

         }
       })
     }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
