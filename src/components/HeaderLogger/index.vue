<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import useStore from '../../hooks/useStore';
import { cleanCurrentUser } from '../../store/user';

const router = useRouter();
const store = useStore('User');

const logoutLabel = computed(() => {
    if (!store.currentUser.name) {
        return '...';
    }

    return `${store.currentUser.name} (Sair)`
})

function handleLogout() {
    window.localStorage.removeItem('token');
    cleanCurrentUser();
    router.push({
        name: 'Home'
    });
}
</script>

<template>
    <div class="flex justify-center w-full h-28 bg-brand-main">
        <div class="flex items-center justify-between  w-4/5 max-w-6xl py-10">
            <div class="w-28 lg:w-36">
                <img class="w-full" src="../../assets/images/logo_feedbacker.png" alt="logo">
            </div>
            <div class="flex">
                <ul class="flex list-none">
                    <li @click="() => router.push({ name: 'Credencials' })" class="px-6 py-2 mr-2 font-bold text-white rounded-full 
                    cursor-pointer focus:outline-none">
                        Credenciais
                    </li>
                    <li @click="() => router.push({ name: 'FeedBacks' })" class="px-6 py-2 mr-2 font-bold text-white rounded-full 
                    cursor-pointer focus:outline-none">
                        FeedBacks
                    </li>
                    <li @click="handleLogout" id="logout-button" class="px-6 py-2 font-bold bg-white rounded-full cursor-pointer
                text-brand-main focus:outline-none">
                        {{ logoutLabel }}
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>