<script>
import Copy from './Copy.vue';
import Loading from './Loading.vue';

export default {
   components: {
    Loading,
    Copy,
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