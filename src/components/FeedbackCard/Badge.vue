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
    if (props.type === 'ISSUE') {
        return 'problema';
    }
    if (props.type === 'IDEA') {
        return 'ideia';
    }
    return 'outros';
});


const classColor = computed(() => {
    if (props.type === 'ISSUE') {
        return 'brand-danger';
    }
    if (props.type === 'IDEA') {
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