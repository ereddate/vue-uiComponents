<template>
  <div class="ui_form">
    <div class="ui_form_content">
      <form @submit.prevent="submitHandle">
        <slot name="content" :item="item"></slot>
      </form>
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
        submitHandle(e){
            console.log(e)
            let form = e.target, len = form.length, formData = {};
            for (let i=0;i<len;i++){
                let item = form[i];
                item.name && (formData[item.name] = item.value);
            }
            console.log(formData)
        }
    }
}
</script>
<style lang="less">
.ui_form {
  .ui_form_content {
  }
}
</style>