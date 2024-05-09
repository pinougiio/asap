<template>
    <h1>History</h1>
    <VBtn color="primary" @click="fetchData">Update</VBtn>
    <v-card class="mt-3" flat>
      <VList v-if="agents"
      lines="two">
        <v-list-item 
          v-for="(agent, index) in agents.list" 
          :key="index"
          :title="agent.name"
          :subtitle="'last connection : '+agent.last_con + ' Create_date : '+ agent.CreatedAt"
          :value="index"
          prepend-icon="mdi-cellphone">
        </v-list-item>
      </VList>
    </v-card>
</template>

<script>
export default {
  name: 'HistoryView',
  props: {
    name: String,
    create_date: String,
    last_con: String,
  },
  data() {
    return{
      agents: {},
    }
  },
  methods: {
    fetchData() {
      fetch('https://app.nocodb.com/api/v2/tables/mjn9iywd15ihr6k/records', {
        method: "GET",
        headers: {
          "accept": "application/json",
          "xc-token": "xC-VsSp2FpSFOeIbB0-igVuj6urql2GueZozk-R3",
        }
      })
        .then((response) => {
          response.json().then((data) => {
            this.agents = data;
            console.log(data);
          });
        })
        .catch((err) => {
          console.error(err);
        })
    },
  },
}
</script>
