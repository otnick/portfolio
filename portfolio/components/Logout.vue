<script setup lang="ts">
const router = useRouter();

const handleLogout = () => {
    localStorage.removeItem('userSession');
    router.push('/login');
};
</script>

<template>
    <button @click="handleLogout()" class="px-5 text-sm font-medium text-center custom-button">Logout</button>
</template>

<style scoped>
.custom-button{
        font-weight: bold;
        background-color: rgb(104, 231, 0);
        border-radius: 8px;
        padding: 8px;
        margin-top: 20px;
        color: rgb(22, 22, 22);
    }

    .custom-button:hover {
        background-color: rgb(104, 231, 0);
        color: rgb(104, 231, 0);
    }

    .dark .custom-button {
        color: rgb(22, 22, 22);
        background-color: rgb(232, 243, 241);
    }

    .light .custom-button {
        color: rgb(232, 243, 241);
        background-color: rgb(22, 22, 22);
    }

    .dark .custom-button:hover {
        color: rgb(232, 243, 241);
        background-color: rgb(104, 231, 0);
    }

    .light .custom-button:hover {
        color: rgb(22, 22, 22);
        background-color: rgb(104, 231, 0);
    }
</style>