<script setup>
import { onBeforeMount, reactive, watch } from 'vue';

import HeaderLogger from '../../components/HeaderLogger/index.vue';
import ContentLoader from '../../components/ContentLoader/index.vue';
import Icon from '../../components/Icon/index.vue';
import useStore from '../../hooks/useStore';
import palette from '../../../palette';
import services from '../../services';
import { setApiKey } from '../../store/user';
import { useToast } from 'vue-toastification';

const store = useStore('User');
const global = useStore('Global');
const toast = useToast();

const state = reactive({
    isLoading: false,
    hasError: false,
    apikey: {}
});

watch(() => store.currentUser, () => {
    if (!global.isLoading && !store.currentUser.apikey) {
        handleErrors(true);
    }

    state.apikey = store.currentUser.apikey;
});

function handleErrors(error) {
    state.isLoading = false;
    state.hasError = !!error;
}

async function handlerGenerateApiKey() {
    try {
        state.isLoading = true;
        const data = await services.users.generateApiKey();
        console.log('Sucesso!');
        setApiKey(data.data);
        state.isLoading = false;
    } catch (error) {
        handleErrors(error);
        console.error(error);
    }
}

async function handlerCopy() {
    toast.clear();
    try {
        let text = store.currentUser.apikey.id;
        await navigator.clipboard.writeText(text);
        toast.success('Copiado para a área de transferência!');
    } catch (error) {
        handleErrors(error);
    }
}

const brandColors = palette.brand;
</script>
<template>
    <HeaderLogger />
    <div class="flex flex-col items-center justify-center h-64 bg-brand-gray">
        <h1 class="text-4xl font-black text-center text-gray-800">
            Credenciais
        </h1>
        <p class="text-lg text-center text-gray-800 font-regular">
            Guia de instalação e geração de suas credenciais
        </p>
    </div>
    <div class="flex justify-center w-full h-full">
        <div class="flex flex-col w-4/5 max-w-6xl py-10">
            <h1 class="text-3xl font-black text-brand-darkgray">
                Instalação e configuração
            </h1>
            <p class="mt-10 text-lg text-gray-800 font-regular">
                Este aqui é a sua chave de api
            </p>
            <ContentLoader v-if="global.isLoading || state.isLoading" class="rounded" widt="600px" height="50px" />
            <div v-else class="flex py-3 pl-5 mt-2 rounded justify-between items-center bg-brand-gray w-full lg:w-2/3">
                <span v-if="state.hasError">Erro ao carregar a chave!</span>

                <span id="apikey" v-else>{{ state.apikey.id }}</span>
                <div class="flex ml-80 mr-1" v-if="!state.hasError">
                    <Icon @click="handlerCopy" name="copy" :color="brandColors.graydark" size="24"
                        class="cursor-pointer">
                    </Icon>
                    <Icon @click="handlerGenerateApiKey" id="generate-apikey" name="loading"
                        :color="brandColors.graydark" size="24" class="cursor-pointer ml-3"></Icon>
                </div>
            </div>
            <p class="mt-5 text-lg text-gray-800 font-regular">
                Coloque o script abaixo no seu site para começar a receber feedbacks
            </p>
            <ContentLoader v-if="global.isLoading || state.isLoading" class="rounded" widt="600px" height="50px" />
            <div v-else class="py-3 pl-5 pr-20 mt-2 rounded bg-brand-gray w-full lg:w-2/3 overflow-x-scroll">
                <span v-if="state.hasError">Erro ao carregar o script!</span>
                <pre
                    v-else>&lt;script defer async onload="init('{{ state.apikey.id }}')" src="https://Welen1911-feedbacker-widget.netlify.app/init.js"&gt;&lt;/script&gt;</pre>
            </div>
        </div>
    </div>
</template>
