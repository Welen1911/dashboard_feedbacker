<script>
    export default {
        setup(_,{ emit }) {
            return {
                emit
            };
        }
    }
</script>
<template>
    <header class="header">
        <div class="header-group">
            <div class="flex items-center justify-between py-10">
                <div class="w-28 lg:w-36">
                    <img src="../../assets/images/logo_feedbacker.png" alt="logo" class="w-full">
                </div>
                <div class="flex">
                    <button
                    @click="() => emit('createAccount')"
                    id="header-create-account-button"
                    class="px-6 py-2 font-bold rounded-full text-white focus:outline-none">
                        Criar conta
                    </button>
                    <button
                    @click="() => emit('login')"
                    id="header-login-button"
                    class="px-6 py-2 font-bold bg-white rounded-full text-brand-main focus:outline-none">
                        Entrar
                    </button>
                </div>
            </div>
                <div class="flex flex-col mt-28">
                    <h1 class="text-4xl font-black text-white">
                        Tenha um feedback. <br>
                        E faça seus clientes mais <br class="hidden lg:inline-block">
                        felizes!
                    </h1>
                    <p class="text-lg text-white font-medium">
                        Receba ideias, reclamações e feedbacks com um <br class="hidden lg:inline-block">
                        simples widget na página.
                    </p>
                    <div>
                        <button @click="() => emit('createAccount')" id="cta-create-account-button"  class="px-6 py-2 mt-10 font-bold bg-white rounded-full text-brand-main focus:outline-none">
                        Crie uma conta grátis
                    </button>
                    </div>
                </div>
            
        </div>
    </header>
</template>
<style lang="postcss" scoped>
.header {
    @apply bg-brand-main w-full flex justify-center;
    height: 700px;
}
.header-group {
    @apply flex flex-col w-4/5 max-w-6xl;

}

@media(min-width: 640px) {
    .header-group {
        background-image: url(../../assets/images/blue_baloons.png);
        background-size: 628px;
        background-position: 90% 100%;
        background-repeat: no-repeat;
    }
}
</style>