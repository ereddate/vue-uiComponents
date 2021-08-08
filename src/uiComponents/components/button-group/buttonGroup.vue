<template>
    <div class="ui_buttton_group">
        <div class="ui_button_group_content" :class="getClass(item)">
            <slot name="content"></slot>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        item:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return {}
    },
    methods:{
        getClass(item){
            let domClass = [];
            if (item.shape) domClass.push('circle'); if (item.vertical) domClass.push('vertical');
            return domClass;
        }
    }
}
</script>
<style lang="less">
@import "../../style/common.less";
.ui_buttton_group {
  .ui_button_group_content {
    display: flex;
    margin: (5 / @base) 0;
    .ui_button {
      flex: 1;
      border-radius: 0;
      margin: 0;
    }
    &.circle {
      border-radius: @baseRadius;
      overflow: hidden;
    }
    &.vertical {
      flex-direction: column;
    }
  }
}
</style>


