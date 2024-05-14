<template>
<h1>Dashboard</h1>
  <VTextField 
    v-model="textfield1" 
    clearable 
    label="Entre text to show in console" 
    placeholder="Input text and click on start" 
  hide-details
/>
<VBtn class="mt-5 ml-0" color="success" @click="btn1click">Console log</VBtn>

  <h1 class="mt-5"> {{ mytext1 }} </h1>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'DashboardView',
    data() {
      return {
        textfield1: '',
        mytext1: '',
      }
    },
    methods: {
      btn1click() {
        this.mytext1 = this.textfield1;
        this.textfield1 = '';
      }
    }
  }
</script>
