<script setup>
import Badge from './Badge.vue';
import pallete from '../../../palette';
import { getDiffTimeBetweenCurrentDate } from '../../utils/getDiffTimeBetweenCurrentDate';
import { wait } from '../../utils/timeout';
import Icon from '../../components/Icon/index.vue';
import { reactive } from 'vue';


const brandColors = pallete.brand;

const props = defineProps({
    isOpened: {
        type: Boolean,
        default: false
    },
    feedback: {
        type: Object,
        required: true
    }
});

console.log(props.feedback)

async function handleToggle() {
    state.isClosing = true;
    
    await wait(300);
    state.isOpen = !state.isOpen;
    state.isClosing = false;
}

const state = reactive({
    isOpen: props.isOpened,
    isClosing: !props.isOpened
});

</script>
<template>
    <div @click="handleToggle" class="flex flex-col px-8 py-6 rounded cursor-pointer bg-brand-gray">
        <div class="flex items-center justify-between w-full mb-8">
            <Badge :type="props.feedback.type" />

            <span class="font-regular text-brand-graydark">
                {{ getDiffTimeBetweenCurrentDate(props.feedback.created_at) }}
            </span>
        </div>
        <div class="text-lg font-medium text-gray-800">
            {{ props.feedback.text }}
        </div>

        <div 
        :class="{
            animate__fadeOutUp: state.isClosing
        }"
        class="flex mt-8 animate__animated animate__fadeInUp animate_faster" v-if="state.isOpen">
            <div class="flex flex-col w-1/2">
                <div class="flex flex-col">
                    <span class="font-bold text-gray-400 uppercase select-none">Página</span>
                    <span class="font-medium text-gray-700">{{ props.feedback.page }}</span>
                </div>
                <div class="flex flex-col">
                    <span class="font-bold text-gray-400 uppercase select-none">Dispositivo</span>
                    <span class="font-medium text-gray-700">{{ props.feedback.device }}</span>
                </div>

            </div>

            <div class="flex flex-col w-1/2">
                <div class="flex flex-col">
                    <span class="font-bold text-gray-400 uppercase select-none">Usuário</span>
                    <span class="font-medium text-gray-700">{{ props.feedback.fingerprint }}</span>
                </div>
            </div>
        </div>
        <div v-if="!state.isOpen" class="flex justify-end mt-8">
            <Icon name="ChevronDown" size="24" :color="brandColors.graydark" />
        </div>
    </div>
</template>