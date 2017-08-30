<template>
  <div class="rank">
    <scroll :data="topList" class="toplist">
      <ul>
        <li class="item" v-for="item in topList">
          <div class="icon">
            <img width="100" height="100" v-lazy="item.picUrl"/>
          </div>
          <ul class="songlist">
            <li class="song" v-for="(song, index) in item.songList">
              <span>{{index+1}}</span>
              <span>{{song.songname}}-{{song.singgername}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
  import Scroll from 'base/scroll/scroll'
  import {getToplist} from 'api/rank'
  import {ERR_OK} from 'api/config'


  export default {
   name:'rank',
    data(){
      return{
        topList:[]
      }
    },
    components: {
      Scroll
    },
    created(){
      this._getToplist()
    },
    methods:{
      _getToplist(){
        getToplist().then((res)=>{
          if(res.code==ERR_OK){
            this.topList=res.data.topList
          }
        })
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .rank{
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
  }
  .toplist{
    height: 100%;
    overflow: hidden;
  }
  .item{
    display: flex;
    margin: 0 20px;
    padding-top: 20px;
    height: 100px;
  }
  .icon{
    flex: 0 0 100px;
    width: 100px;
    height: 100px;
  }
  .song{
    line-height: 26px
  }
  .songlist{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    height: 100px;
    overflow: hidden;
    background: #333;
    color:rgba(255, 255, 255, 0.3);
    font-size: 12px;
  }
</style>
