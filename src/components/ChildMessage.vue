/* eslint-disable */
<template>
  <div>

    <h3>{{msg}}</h3>
    <input type="text" v-model="message"  @input="changeMessage" />
    <p>{{ message }}</p>
    <ul>
      <li v-for="(item, index)  in users" :key="index" >
        {{index}} -{{item.name}}
      </li></ul>
  </div>

</template>

<script>
export default {
  props: ['msg'],
  computed:{
    users(){
      return this.$store.state.users;
    }
  },
  data() {
    return {
      message: '',
    };
  },methods: {
    changeMessage(event) {
      this.message =event.target.value
      this.$emit('messageChanged',this.message)
    }
  }
};

</script>

<style scoped></style>
