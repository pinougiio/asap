<template>
    <h1>History</h1>
    <VBtn color="blue" @click="refresh()">Update</VBtn>
    <v-card class="mt-3" flat>
      <VList 
        v-if="getData.list"
        lines="two">
        <v-list-item 
          v-for="(agent, index) in getData.list" 
          :key="index"
          :title="agent.name"
          :subtitle="'last connection : '+agent.last_con + ' Create_date : '+ agent.CreatedAt"
          :value="index"
          prepend-icon="mdi-cellphone">
        </v-list-item>
      </VList>
    </v-card>
</template>

<script setup>
import store from '@/store';
import { computed, onMounted } from 'vue';

const refresh =() => {
  store.dispatch('GetAgentList')
}

const getData = computed(() => {
  return store.state.agentList
}) 

onMounted(() => {
  store.dispatch('GetAgentList')
})  

</script>
