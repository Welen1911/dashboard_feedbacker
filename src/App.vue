<script setup>
import { RouterView, useRoute, useRouter } from 'vue-router';
import ModalFactory from './components/ModalFactory/index.vue';
import { watch } from 'vue';
import services from './services';
import { cleanCurrentUser, setCurrentUser } from './store/user';

const router = useRouter();
const route = useRoute();

watch(
  () => route.path, async () => {
    try {
      const { data } = await services.users.getMe();

      setCurrentUser(data);

      console.log(data);
    } catch (e) {
      window.localStorage.removeItem('token');
      cleanCurrentUser();
      router.push({ name: 'Home' });
      return
    }

    if (route.meta.hasAuth) {
      const token = window.localStorage.getItem('token');

      if (!token) {
        router.push({ name: 'Home' });
        return
      }
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