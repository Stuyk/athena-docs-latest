<script setup>
import { ref, onMounted } from 'vue';

const debug = true;
const apiURL = ref(debug ? 'http://127.0.0.1:5555' : 'https://api.athenaframework.com');
const isAuthenticated = ref(false);

const verifyAuthentication = async () => {
    const token = window.localStorage.getItem('auth');
    if (!token) {
        return false;
    }

    isAuthenticated.value = true;
    return true;
};

onMounted(async () => {
    const hasValidAuthentication = await verifyAuthentication();
    if (hasValidAuthentication) {
        return;
    }

    const searchParams = new URLSearchParams(window.location.search);
    const uid = searchParams.get('uid');

    if (typeof uid === 'undefined' || !uid) {
        return;
    }

    const res = await fetch(`${apiURL.value}/uid/${uid}`).catch(async (err) => {
        console.log(err);
        isAuthenticated.value = false;
        return;
    });

    if (!res || !res.ok || res.status !== 200) {
        console.log(`Failed to fetch.`);
        isAuthenticated.value = false;
        return;
    }

    const result = await res.json();
    if (result.code === 401) {
        isAuthenticated.value = false;
        return;
    }

    window.localStorage.setItem('auth', result.message);
    isAuthenticated.value = true;
});
</script>

<template>
    <div>
        <div v-if="!isAuthenticated" class="stack">
            <span>❌ Failed Authentication</span>
            <a :href="apiURL + '/url' + '/redirect'" title="Try Authentication Again?">Try Logging in Again</a>
        </div>
        <div v-else>
            <span>✔️ Authenticated Successfully. Feel free to browse around.</span>
        </div>
    </div>
</template>

<style>
.stack {
    display: flex;
    flex-direction: column;
}
</style>
