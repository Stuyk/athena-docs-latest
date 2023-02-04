<script setup>
import { ref, onMounted } from 'vue';

const debug = false;
const apiURL = ref(debug ? 'http://127.0.0.1:5555' : 'https://api.athenaframework.com');
const isAuthenticated = ref(false);
const errorMessage = ref('Not Logged In');

const verifyAuthentication = async () => {
    const token = window.localStorage.getItem('auth');
    if (!token) {
        return false;
    }

    const res = await fetch(`${apiURL.value}/verify`, {
        method: 'GET',
        headers: {
            Token: token,
        },
    }).catch(async (err) => {
        return;
    });

    if (!res.ok) {
        return false;
    }

    const response = await res.json();
    if (response.code === 401) {
        return false;
    }

    isAuthenticated.value = true;
    return true;
};

onMounted(async () => {
    const hasValidAuthentication = await verifyAuthentication();
    if (hasValidAuthentication) {
        errorMessage.value = 'Login Successful';
        return;
    }

    const searchParams = new URLSearchParams(window.location.search);
    const uid = searchParams.get('uid');

    const urlModification = new URL(window.location.href);
    urlModification.search = '';
    const cleanURL = urlModification.toString();

    if (typeof uid === 'undefined' || !uid) {
        errorMessage.value = 'Not Logged In';
        window.localStorage.removeItem('auth');
        window.history.replaceState({ additionalInformation: 'Replaced URL' }, 'Authorization Failed', cleanURL);
        return;
    }

    const res = await fetch(`${apiURL.value}/uid/${uid}`).catch(async (err) => {
        isAuthenticated.value = false;
        return;
    });

    if (!res || !res.ok || res.status !== 200) {
        errorMessage.value = 'Unable to fetch token, try again.';
        isAuthenticated.value = false;
        window.localStorage.removeItem('auth');
        window.history.replaceState({ additionalInformation: 'Replaced URL' }, 'Authorization Failed', cleanURL);
        return;
    }

    const result = await res.json();
    if (result.code === 401) {
        errorMessage.value = 'Unable to fetch token, try again.';
        isAuthenticated.value = false;
        window.localStorage.removeItem('auth');
        window.history.replaceState({ additionalInformation: 'Replaced URL' }, 'Authorization Failed', cleanURL);
        return;
    }

    isAuthenticated.value = true;
    errorMessage.value = 'Login Successful';
    window.localStorage.setItem('auth', result.message);
    window.history.replaceState({ additionalInformation: 'Replaced URL' }, 'Authorization Complete', cleanURL);
});
</script>

<template>
    <div>
        <div v-if="!isAuthenticated" class="stack">
            <h3>❌ {{ errorMessage }}</h3>
            <a class="mt-4" :href="apiURL + '/url' + '/redirect'" title="Try Authentication Again?">
                Login with Discord
            </a>
        </div>
        <div class="stack" v-else>
            <h3>✔️ {{ errorMessage }}</h3>
            <p>Ensure you are subscribed on Discord to view content.</p>
        </div>
    </div>
</template>

<style>
.stack {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 64px;
    margin-bottom: 128px;
}

.mt-4 {
    margin-top: 12px;
}
</style>
