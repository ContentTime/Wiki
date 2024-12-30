<template>
    <nav>
      <ul>
        <li v-for="item in sidebar" :key="item.text">
          <component :is="item.icon" /> {{ item.text }} 
          <ul v-if="item.items">
            <li v-for="subItem in item.items" :key="subItem.text">
              {{ subItem.text }}
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { useTheme } from 'vitepress';
  
  export default defineComponent({
    setup() {
      const theme = useTheme();
      return { sidebar: theme.sidebar };
    },
  });
  </script>