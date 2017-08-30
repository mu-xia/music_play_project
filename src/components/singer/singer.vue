<template>
  <div class="singer" >
    <list-view :data="singers"></list-view>
  </div>
</template>

<script>
  import {getSingerList} from 'api/singer'
  import {ERR_OK} from 'api/config'
  import Singer from 'common/js/singer'
  import listView from 'base/listviwe/listviwe'

  const HoT_NAME='热门';
  const HOT_SINGER_LEN=10;

  export default({
    name:'singer',
    data(){
     return{
       singers:[]
     }
    },
    created(){
      this.getSinger()
    },
    methods:{
      getSinger(){
        getSingerList().then((res)=>{
          if(res.code==ERR_OK){
          this.singers=this.normalizeSinger(res.data.list);
          console.log(this.singers)
          }
        })
      },
      normalizeSinger(list){
        let map={
          hot:{
            title:HoT_NAME,
            items:[]
          }
        };
        list.forEach((item, index) => {
          if (index < HOT_SINGER_LEN) {
          map.hot.items.push(new Singer({
            name: item.Fsinger_name,
            id: item.Fsinger_mid
          }))
        }
        const key = item.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(new Singer({
          name: item.Fsinger_name,
          id: item.Fsinger_mid
        }))
      })

        //为了得到有序列表，我们需要处理map
        /*有两部分，第一个是热门*/
        let hot=[];
        let ret=[];
        for(let key in map){
          let val=map[key];
          if(val.title.match(/[a-zA-Z]/)){
              ret.push(val)
          }else if(val.title==HoT_NAME){
              hot.push(val)
          }
        }
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        return hot.concat(ret)
      }
    },
    components:{
      listView
    }
  })

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer{
    position fixed;
    top 88px;
    bottom 0;
    width: 100%
  }
</style>
