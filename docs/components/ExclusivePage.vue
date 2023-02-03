<script setup>
import { onMounted, ref } from 'vue';
import MD from 'markdown-it';

const md = new MD();

const content = ref(undefined);
const isLoading = ref(true);
const isAuthenticated = ref(false);

const debug = true;
const apiURL = ref(debug ? 'http://127.0.0.1:5555' : 'https://api.athenaframework.com');

const props = defineProps({
    path: {
        type: String,
    },
});

const getToken = () => {
    return window.localStorage.getItem('auth');
};

onMounted(async () => {
    const token = getToken();
    if (typeof token === 'undefined' || !token) {
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

    const res = await fetch(`${apiURL.value}/file`, format).catch(async (err) => {
        console.log(err);
        return;
    });

    if (!res || !res.ok || res.status !== 200) {
        isLoading.value = false;
        content.value = undefined;
        return;
    }

    const rawData = await res.text();
    if (typeof rawData === 'string' && rawData.includes('401')) {
        isLoading.value = false;
        content.value = undefined;
        isAuthenticated.value = false;
        return;
    }

    if (rawData.includes('�')) {
        isLoading.value = false;
        content.value = undefined;
        isAuthenticated.value = true;
        return;
    }

    content.value = md.render(rawData);
    isLoading.value = false;
    isAuthenticated.value = true;
});
</script>

<template>
    <div class="vp-wrapper" v-if="!isLoading">
        <div class="vp-doc" v-if="content">
            <div v-html="content" />
        </div>
        <div class="vp-doc" v-if="!isAuthenticated">
            <div class="stack">
                <span class="mb-4">❌ Failed Authentication</span>
                <a :href="apiURL + '/url' + '/redirect'" title="Try Authentication Again?">Try Logging in Again</a>
            </div>
        </div>
    </div>
    <div class="loading" v-else>
        <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <span class="loading-text">Authenticating...</span>
    </div>
</template>

<style>
.loading {
    display: flex;
    align-items: center;
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
    margin-bottom: 4vh;
}
</style>
