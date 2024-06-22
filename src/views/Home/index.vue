<script setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

import useModal from '../../hooks/useModal';

import CustomHeader from './CustomHeader.vue';
import Contact from './Contact.vue';
import ModalLogin from '../../components/ModalLogin/index.vue';
import ModalCreateAccount from '../../components/ModalCreateAccount/index.vue';
import services from '../../services';

const router = useRouter();
const modal = useModal();


function handleLogin() {
    console.log('Abriu login!');
    modal.open({
        component: ModalLogin
    });
}

function handleCreateAccount() {
    console.log('Abriu Criar conta!');
    modal.open({
        component: ModalCreateAccount
    })
}



onMounted(async () => {
    const token = window.localStorage.getItem('token');
    if (token) {
        try {
            await services.users.getMe();

            router.push({ name: "FeedBacks" });
        } catch (e) {
            window.localStorage.removeItem('token');
        }
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