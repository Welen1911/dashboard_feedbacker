<script setup>
import { reactive } from 'vue';

import HeaderLogger from '../../components/HeaderLogger/index.vue';
import ContentLoader from '../../components/ContentLoader/index.vue';
import Icon from '../../components/Icon/index.vue';
import useStore from '../../hooks/useStore';
import palette from '../../../palette';

const store = useStore('User');
const global = useStore('Global');


const state = reactive({
    isLoading: false,
});

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
            <ContentLoader
            v-if="global.isLoading || state.isLoading"
            class="rounded"
            widt="600px"
            height="50px"
            />
            <div v-else
                class="flex py-3 pl-5 mt-2 rounded justify-between items-center bg-brand-gray w-full lg:w-2/3">
                <span>{{ store.currentUser.apikey.id }}</span>
                <div class="flex ml-80 mr-1">
                    <Icon name="copy" :color="brandColors.graydark" size="24" class="cursor-pointer"></Icon>
                    <Icon name="loading" :color="brandColors.graydark" size="24" class="cursor-pointer ml-3"></Icon>
                </div>
            </div>
            <p class="mt-5 text-lg text-gray-800 font-regular">
                Coloque o script abaixo no seu site para começar a receber feedbacks
            </p>
            <ContentLoader
            v-if="global.isLoading || state.isLoading"
            class="rounded"
            widt="600px"
            height="50px"
            />
            <div v-else 
            class="py-3 pl-5 pr-20 mt-2 rounded bg-brand-gray w-full lg:w-2/3 overflow-x-scroll">
                <pre>&lt;script src="https://Welen1911-feedbacker-widget.netlify.app?apikey={{ store.currentUser.apikey.id }}"&gt;&lt;/script&gt;</pre>
            </div>
        </div>
    </div>
</template>
