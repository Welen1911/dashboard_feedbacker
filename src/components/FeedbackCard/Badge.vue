<script setup>
import { computed } from 'vue';

const props = defineProps({
    type: {
        type: String,
        require: true
    }
});

console.log(props.type);

const label = computed(() => {
    if (props.type === 'issue') {
        return 'problema';
    }
    if (props.type === 'idea') {
        return 'ideia';
    }
    return 'outros';
});


const classColor = computed(() => {
    if (props.type === 'issue') {
        return 'brand-danger';
    }
    if (props.type === 'idea') {
        return 'brand-warning';
    }
    return 'brand-graydark';
});

</script>
<template>
    <span :class="`bg-${classColor}`" class="p-2 text-xs font-black text-white uppercase rounded-full">
        {{ label }}
    </span>
</template>