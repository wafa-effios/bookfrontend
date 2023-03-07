<template>
  <div>
    <h1>Test</h1>
    <h1>{{messageC}}</h1>

    <child-message :msg="messageC" @messageChanged="messageC = $event" ></child-message>
  </div>
</template>

<script>
import ChildMessage from './ChildMessage.vue';

export default {
computed:{
  messageC(){
    return this.$store.state.messageC ;
  }
},
  components: {
    'child-message': ChildMessage
  }
}
</script>