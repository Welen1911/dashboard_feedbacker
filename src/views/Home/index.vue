<script setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

import CustomHeader from './CustomHeader.vue';
import Contact from './Contact.vue';

function handleLogin() {

}

function handleCreateAccount() {

}

const router = useRouter();

onMounted(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
        router.push({ name: "FeedBacks" });
    }
});
</script>
<template>
    <CustomHeader @createAccount="handleCreateAccount" @login="handleLogin" />
    <Contact />
    <div class="flex justify-center py-10 bg-brand-gray">
        <p class="font-medium text-center text-gray-800">FeedBacker© 2024</p>
    </div>
</template>