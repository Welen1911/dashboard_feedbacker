<script setup>
import { RouterView, useRoute, useRouter } from 'vue-router';
import ModalFactory from './components/ModalFactory/index.vue';
import { watch } from 'vue';
import services from './services';
import { setCurrentUser } from './store/user';

const router = useRouter();
const route = useRoute();

watch(
  () => route.path, async () => {
    if (route.meta.hasAuth) {
      const token = window.localStorage.getItem('token');

      if (!token) {
        router.push({ name: 'Home'});
        return
      }

      const {data} = await services.users.getMe();

      setCurrentUser(data);

      console.log(data);
    }
  }
);

</script>
<template>
  <div>
    <ModalFactory />
    <RouterView />
  </div>
</template>