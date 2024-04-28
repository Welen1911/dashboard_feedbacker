<script setup>
import { onMounted, reactive } from 'vue';
import HeaderLogger from '../../components/HeaderLogger/index.vue';
import FeedbackCard from '../../components/FeedbackCard/index.vue';
import FeedbackCardLoading from '../../components/FeedbackCard/Loading/index.vue';
import Filters from './Filters.vue';
import FiltersLoading from './FiltersLoading.vue';
import services from '../../services';

const state = reactive({
    isLoading: false,
    feedbacks: [],
    currentFeedbackType: null,
    pagination: {
        limit: 5,
        offset: 0
    },
    hasError: false
});

function handleErrors(error) {
    state.hasError = !!error;
}

async function fecthFeedbacks() {
    try {
        state.isLoading = true;

        const data = await services.feedbacks.getAll({
            ...state.pagination,
            type: state.currentFeedbackType
        });

        state.feedbacks = data.data;
        // state.pagination = data.pagination;
        state.isLoading = false;

    } catch (error) {
        handleErrors(error);
    }
}

onMounted(() => {
    fecthFeedbacks();
});

</script>
<template>
    <HeaderLogger />

    <div class="flex flex-col items-center justify-center h-64 bg-brand-gray">
        <h1 class="text-4xl font-black text-center text-gray-800">
            Feedbacks
        </h1>
        <p class="text-lg text-center text-gray-800 font-regular">
            Detalhes de todos os feedbacks recebidos.
        </p>
    </div>
    <div class="flex justify-center w-full pb-20">
        <div class="w-4/5 max-w-6xl py-10 grid grid-cols-4 gap-2">
            <div>
                <h1 class="text-3xl font-black text-brand-darkgray">
                    Listagem
                </h1>
                <suspense>
                    <template #default>
                        <Filters class="mt-8 animate__animated animate__fadeIn animate__faster" />
                    </template>
                    <template #fallback>
                        <FiltersLoading class="mt-8" />
                    </template>
                </suspense>
            </div>
            <div class="px-10 pt-20 col-span-3">
                <p v-if="state.hasError" class="text-lg text-center text-gray-800 font-regular">
                    Aconteceu um erro ao carregar os feedbacks!🥺
                </p>
                <p v-if="state.feedbacks.length == 0 && !state.isLoading"
                    class="text-lg text-center text-gray-800 font-regular">
                    Ainda nenhum feedback recebido!🥺
                </p>
                <FeedbackCardLoading v-if="state.isLoading" />
                <FeedbackCard v-else v-for="(feedback, index) in state.feedbacks" :key="feedback.id"
                    :is-opened="index === 0" :feedback="feedback" class="mb-8" />
            </div>
        </div>
    </div>
</template>