import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    agentList: {}
  },
  getters: {
  },
  mutations: {
    GetAgentList(state, responseData) {
      state.agentList =  responseData;
    }
  },
  actions: {
    GetAgentList({ commit }) {

      axios.get('https://app.nocodb.com/api/v2/tables/mjn9iywd15ihr6k/records', 
      {
        headers: {
          'accept': 'application/json',
          'xc-token': 'xC-VsSp2FpSFOeIbB0-igVuj6urql2GueZozk-R3'
        }
      })
      .then((response) => {
        commit('GetAgentList', response.data);
      });
    }
  },
  modules: {
  }
})
