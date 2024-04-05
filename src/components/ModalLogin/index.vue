<script setup>
import { reactive } from 'vue';
import { useField } from 'vee-validate';

import useModal from '../../hooks/useModal.js';
import { validateEmptyAndLength3, validateEmptyAndEmail } from '../../utils/validators.js';

const modal = useModal();
const {
    value: emailValue,
    errorMessage: emailErroMsg
} = useField('email', validateEmptyAndEmail);

const {
    value: passwordValue,
    errorMessage: passwordErrorMsg
} = useField('password', validateEmptyAndLength3);

const state = reactive({
    hasErrors: false,
    isLoading: false,
    email: {
        value: emailValue,
        errorMsg: emailErroMsg
    },
    password: {
        value: passwordValue,
        errorMsg: passwordErrorMsg
    }
});

const close = modal.close;

function handleSubmit() {

}

</script>
<template>
    <div class="flex justify-between">
        <h1 class="text-4xl font-black text-gray-800">Entre na sua conta</h1>

        <button @click="close" class="text-4xl text-gray-600 focus:outline-none">
            &times;
        </button>
    </div>
    <div class="mt-16">
        <form @submit.prevent="handleSubmit">
            <label for="" class="block">
                <span class="text-lg font-medium text-gray-800">
                    E-mail
                </span>
                <input 
                :class="{
                    'border-brand-danger': !!state.email.errorMsg
                }"
                class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent
                rounded"
                placeholder="user@teste.com"
                v-model="state.email.value"
                type="email"
                >
                <span v-if="!!state.email.errorMsg" class="block font-medium text-brand-danger">
                    {{ state.email.errorMsg }}
                </span>
            </label>
            <label for="" class="block mt-9">
                <span class="text-lg font-medium text-gray-800">
                    Senha
                </span>
                <input 
                :class="{
                    'border-brand-danger': !!state.password.errorMsg
                }"
                class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent
                rounded"
                placeholder="************"
                v-model="state.password.value"
                type="password"
                >
                <span v-if="!!state.password.errorMsg" class="block font-medium text-brand-danger">
                    {{ state.password.errorMsg }}
                </span>
            </label>
            <button
            :disabled="state.isLoading"
            type="submit"
            :class="{
                'opacity-50': state.isLoading
            }"
            class="px-8 py-3 mt-10 text-2xl font-bold text-white rounded-full 
            bg-brand-main focus:outline-none transition-all duration-150"
            >
                Entrar
            </button>
        </form>
    </div>

</template>