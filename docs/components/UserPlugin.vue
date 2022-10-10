<script setup>
import { onMounted, ref } from 'vue';
import MD from 'markdown-it';

const md = new MD();

const content = ref(md.render('Loading...'));
const isLoading = ref(true);
const url = ref(undefined);

const props = defineProps({
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    repo: {
        type: String,
    },
    branch: {
        type: String,
    },
    price: {
        type: String,
    },
    url: {
        type: String,
    },
});

const getUrl = () => {
    return `https://github.com/${props.author}/${props.repo}`;
};

onMounted(async () => {
    let res = await fetch(
        `https://raw.githubusercontent.com/${props.author}/${props.repo}/${props.branch}/README.md`
    ).catch(async (err) => {
        console.log(err);
        return undefined;
    });

    if (!res.ok) {
        res = await fetch(
            `https://raw.githubusercontent.com/${props.author}/${props.repo}/${props.branch}/readme.md`
        ).catch((err) => {
            return undefined;
        });
    }

    url.value = `https://github.com/${props.author}/${props.repo}/`;

    if (!res || !res.ok) {
        content.value = md.render(
            '# Failed to Fetch Data\n' +
                '* Ensure that `README.md` is present in the plugin repository.\n' +
                '* Ensure the repository is currently valid.\n' +
                `* [Repo Link](https://github.com/${props.author}/${props.repo}/)`
        );
        isLoading.value = false;
        return;
    }

    const rawData = await res.text();
    if (!rawData) {
        content.value = md.render(
            '# Failed to Fetch Data\n' +
                '* Ensure that `README.md` is present in the plugin repository.\n' +
                '* Ensure the repository is currently valid.\n' +
                `* [Repo Link](https://github.com/${props.author}/${props.repo}/)`
        );
        return;
    }

    if (rawData.includes('�')) {
        content.value = md.render(
            '# Failed to Fetch Data\n' + '* README IS NOT IN UTF-8 FORMAT. FIX YOUR README FILE.\n'
        );
        isLoading.value = false;
        return;
    }

    content.value = md.render(rawData);
    isLoading.value = false;
});
</script>

<template>
    <div class="vp-wrapper" v-if="!isLoading">
        <div class="vp-doc">
            <div v-html="content" />
        </div>
        <div class="content-bottom">
            <div class="content-info">
                <sup class="author">Created By:</sup>
                <sup style="margin-left: 12px">{{ props.author }}</sup>
            </div>
            <div class="content-info" v-if="!props.url || !props.price">
                <sup>git clone {{ getUrl() }}</sup>
            </div>
            <div class="content-info" v-if="!props.url || !props.price">
                <a :href="getUrl()" target="_blank">View on GitHub</a>
            </div>
            <div class="content-info" v-if="props.url && props.price">
                <a :href="props.url" target="_blank">Purchase -> ${{ props.price }}</a>
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
        <span class="loading-text">Loading Plugin Content...</span>
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
</style>
