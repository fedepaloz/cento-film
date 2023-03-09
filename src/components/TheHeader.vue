<template>
  <div>
    <TabMenu :model="items" />
    <router-view />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import TabMenu from 'primevue/tabmenu'
import InputText from 'primevue/inputtext'
export default {
  data() {
    return {
      items: [
        {
          label: 'Home',
          icon: '',
          to: '/'
        },
        {
          label: 'Favorites',
          icon: '',
          to: '/favorites'
        },
        {
          label: 'To See',
          icon: '',
          to: '/tosee'
        },
        {
          label: 'Seen',
          icon: '',
          to: '/seen'
        }
      ]
    }
  },
  components: {
    TabMenu,
    InputText
  }
}
</script>

<style></style>
