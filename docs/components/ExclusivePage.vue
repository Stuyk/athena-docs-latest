<script setup>
import { onMounted, ref } from 'vue';

const content = ref(undefined);
const isLoading = ref(true);
const isAuthenticated = ref(false);
const errorMessage = ref('You are attempting to access subscriber only content.');
const loadingMessage = ref('Loading');

const debug = false;
const apiURL = ref(debug ? 'http://127.0.0.1:5555' : 'https://api.athenaframework.com');
const hideLink = ref(false);

const props = defineProps({
    path: {
        type: String,
    },
});

const getToken = () => {
    return window.localStorage.getItem('auth');
};

onMounted(async () => {
    loadingMessage.value = 'Fetching Token';
    const token = getToken();
    if (typeof token === 'undefined' || !token) {
        errorMessage.value = 'Not logged into Discord';
        isLoading.value = false;
        content.value = undefined;
        return;
    }

    const format = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Token: token,
        },
        body: JSON.stringify({
            path: props.path,
        }),
    };

    loadingMessage.value = 'Rendering File';
    const res = await fetch(`${apiURL.value}/file`, format).catch(async (err) => {
        return;
    });

    if (!res || !res.ok || res.status !== 200) {
        errorMessage.value = `Not in Discord Server, or Subscribed`;
        isLoading.value = false;
        content.value = undefined;
        return;
    }

    const rawData = await res.text();
    if (typeof rawData === 'string' && rawData.includes('401')) {
        window.localStorage.removeItem('auth');
        errorMessage.value = `Session Expired. Login again.`;
        isLoading.value = false;
        content.value = undefined;
        isAuthenticated.value = false;
        return;
    }

    if (typeof rawData === 'string' && rawData.includes('404')) {
        errorMessage.value = `404 - Content was not found.`;
        isLoading.value = false;
        content.value = undefined;
        isAuthenticated.value = false;
        hideLink.value = true;
        return;
    }

    content.value = rawData;
    isLoading.value = false;
    isAuthenticated.value = true;
});
</script>

<template>
    <template v-if="!isLoading">
        <div>
            <div v-html="content" v-if="content" />
            <div class="loading stack" v-else>
                <h3>❌ {{ errorMessage }}</h3>
                <a class="mt-4" :href="apiURL + '/url' + '/redirect'" title="Login with Discord" v-if="!hideLink">
                    Login with Discord
                </a>
            </div>
        </div>
    </template>
    <template v-else>
        <div class="loading">
            <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <span class="loading-text">{{ loadingMessage }}</span>
        </div>
    </template>
</template>

<style>
.loading {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-top: 128px;
    padding-bottom: 64px;
}

.loading-text {
    padding-left: 24px;
}

.content-bottom {
    display: flex;
    flex-direction: column;
}

.content-info {
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
    padding: 12px;
    box-sizing: border-box;
    border-radius: 6px;
    margin-top: 6px;
    margin-bottom: 6px;
    overflow-wrap: break-word;
}

.data {
    display: flex;
    flex-direction: column;
}

.vp-wrapper {
    display: flex;
    flex-direction: column;
}

.content-footer {
    padding-top: 0px;
}

.content-data {
    display: flex !important;
    flex-direction: column;
    box-sizing: border-box;
}

.content-data img {
    max-width: 400px;
}

.download-btn {
    padding: 12px;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.3);
    color: white !important;
    border-radius: 6px;
    min-width: 120px !important;
    max-width: 120px;
}

.lds-ring {
    display: inline-block;
    position: relative;
    width: 36px;
    height: 36px;
}

.lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 25px;
    height: 25px;
    margin: 4px;
    border: 4px solid #fff;
    border-radius: 50%;
    animation: lds-ring 2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
}

@keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.stack {
    display: flex;
    flex-direction: column;
}

.mb-4 {
    margin-bottom: 12px;
}

.mt-4 {
    margin-top: 12px;
}

pre {
    background-color: #2f2f2f !important;
    border-radius: 8px;
    margin: 16px 0;
    overflow-x: auto;
    padding: 24px;
}
</style>
