<script>
import Copy from './Copy.vue';
import Loading from './Loading.vue';
import ChevronDown from './ChevronDown.vue';

export default {
   components: {
    Loading,
    Copy,
    ChevronDown
   },
    props: {
        name: {
            type: String,
            required: true
        }
    }
}

</script>

<template>
    <component :is="name" v-bind="$props"></component>
</template>