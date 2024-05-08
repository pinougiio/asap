<template>

  
<div class="mx-5 my-5">
    <router-view/>
</div>

<v-layout class="overflow-visible">
  <v-bottom-navigation
      grow
      mode="shift"
      color="green"
    >
    
      <v-btn to="/" value="Dashboard">
        <v-icon size="25">mdi-gauge</v-icon>
        
        <span>Dashboard</span>
      </v-btn>

      <v-btn to="/realtime" value="Realtime">
        <v-icon size="25">mdi-map</v-icon>
        
        <span>Realtime</span>
      </v-btn>

      <v-btn to="/history" value="History">
        <v-icon size="25">mdi-history</v-icon>
        
        <span>History</span>
      </v-btn>
      
      <v-btn to="settings" value="Settings">
        <v-icon size="25">mdi-cog</v-icon>
        
        <span>Settings</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>

</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
