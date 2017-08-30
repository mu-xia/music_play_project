<template>
  <scroll class="listview" :data="data">
    <ul>
      <li v-for="group in data" class="list-group">
        <h2 class="list-group-title">{{group.title}}</h2>
        <ul>
          <li v-for="item in group.items" class="list-group-item">
            <img class="avatar" v-lazy="item.avatar"/>
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="list-shortcut">
      <ul>
        <li v-for="item in shortcutList" class="item">{{item}}</li>
      </ul>
    </div>
  </scroll>
</template>

<script>
  import Scroll from 'base/scroll/scroll'

  export default({
    props:{
      data:{
        type:Array,
        default:[]
      }
    },
    components:{
      Scroll
    },
    computed:{
      /*右边入口的方法*/
      shortcutList() {
        return this.data.map((group) => {
            return group.title.substr(0, 1)
          })
      },
    }
  })
</script>

<style>
  .listview{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #222;
  }
.list-group{
  padding-bottom: 30px;
}
  .list-group-title{
    height: 30px;
    line-height: 30px;
    padding-left: 20px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
    background: #333;
  }
  .list-group-item{
    display: flex;
    align-items: center;
    padding: 20px 0 0 30px;
  }
  .list-group-item .avatar{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .list-group-item .name{
    margin-left: 20px;
    color:rgba(255, 255, 255, 0.5);
    font-size:10px;
  }
  .list-shortcut{
    position: absolute;
    z-index: 30;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    padding: 20px 0;
    border-radius: 10px;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
    font-family: Helvetica;
  }
  .item{
    padding: 3px;
    line-height: 1;
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
  }
</style>
