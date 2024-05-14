<template>
    <h1>Settings</h1>
    <v-switch
            inset
            color="info"
            v-model="darkMode"
            @change="toggleTheme()"
            :label="`It's ${darkMode ? 'Dark' : 'Light'}!`"
          ></v-switch>
</template>
<script setup>
import { ref } from "vue"
import { useTheme } from 'vuetify';
  

  const theme = useTheme();
  const darkMode = ref(true);
  
  function toggleTheme() {
    theme.global.name.value = darkMode.value ? "dark" : "light";
    ///console.log(`Current theme is dark? ${theme.global.current.value.dark}`);
  }
  
</script>