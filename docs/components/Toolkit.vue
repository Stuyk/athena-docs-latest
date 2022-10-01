<script setup>
import { onMounted, ref } from 'vue';
import List from './toolkit/List.vue';
import DataView from './toolkit/DataView.vue';

const PORT = 7790;
const isConnected = ref(false);
const players = ref([]);
const vehicles = ref([]);
const memory = ref(0);
const list = ref([]);
const tabs = ref([{ name: 'List' }, { name: 'Players' }, { name: 'Vehicles' }]);
const tabIndex = ref(0);
let host = 'localhost';

const removeFromList = (index) => {
    list.value.splice(index, 1);
};

const setTab = (index) => {
    tabIndex.value = index;
};

const handleConnection = async () => {
    const resp = await fetch(`http://${host}:${PORT}`).catch((err) => {
        if (host === 'localhost') {
            host = '127.0.0.1';
        } else {
            host = 'localhost';
        }

        return { resp: { ok: false } };
    });

    if (!resp.ok) {
        isConnected.value = false;
        return;
    }

    fetch(`http://${host}:${PORT}/players`).then(async (resp) => {
        if (!resp.ok) {
            players.value = [];
            return;
        }

        players.value = await resp.json();
    });

    fetch(`http://${host}:${PORT}/vehicles`).then(async (resp) => {
        if (!resp.ok) {
            vehicles.value = [];
            return;
        }

        vehicles.value = await resp.json();
    });

    fetch(`http://${host}:${PORT}/update`).then(async (resp) => {
        const data = await resp.json().catch((err) => {
            return undefined;
        });

        if (!data) {
            return;
        }

        list.value.push(data);
    });

    isConnected.value = true;
};

const handleUsageStats = () => {
    if (!isConnected.value) {
        return;
    }

    fetch(`http://${host}:${PORT}/memory`).then(async (resp) => {
        const data = await resp.json().catch((err) => {
            return undefined;
        });

        if (!data) {
            return;
        }

        memory.value = data;
    });
};

onMounted(() => {
    setInterval(handleConnection, 100);
    setInterval(handleUsageStats, 1000);
});
</script>

<template>
    <div class="page-wrap">
        <div class="page">
            <p>
                The toolkit will connect to your local alt:V server instance and forward information to the browser
                here. It will automatically try to connect as soon as you load this page.
            </p>
            <br />
            <p>
                Ensure that you have the plugin in <code>src/core/plugins/athena-debug</code> enabled. Only enabled when
                <code>debug</code> is turned on, on the server.
            </p>
            <br />
            <p>
                If you are using any adblocks, or the brave browser. Turn off your shields. That may prevent this tool
                from working correctly.
            </p>
            <br />
            <div v-if="!isConnected">
                <div class="split">
                    <div class="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="text">Attempting to Connect...</div>
                </div>
            </div>
            <div v-else>
                <div>✔️ Connected</div>
                <div class="stack info">
                    <div class="split pair">
                        <div class="key">Memory MB</div>
                        <div class="value">{{ memory.toFixed(2) }}</div>
                    </div>
                    <div class="split pair">
                        <div class="key">Players</div>
                        <div class="value">{{ players.length }}</div>
                    </div>
                    <div class="split pair">
                        <div class="key">Vehicles</div>
                        <div class="value">{{ vehicles.length }}</div>
                    </div>
                </div>
                <div class="tabs">
                    <div
                        class="tab"
                        v-for="(tab, index) of tabs"
                        @click="setTab(index)"
                        :class="index === tabIndex ? { 'tab-active': true } : {}"
                    >
                        {{ tab.name }}
                    </div>
                </div>
                <List v-if="tabIndex === 0" :list="list" @remove-from-list="removeFromList" />
                <DataView v-if="tabIndex === 1" :data="players" />
                <DataView v-if="tabIndex === 2" :data="vehicles" />
            </div>
        </div>
    </div>
</template>

<style>
.page-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 48px;
}

.page {
    max-width: 780px;
}

.split {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.pair {
    margin-top: 3px;
    margin-bottom: 3px;
}

.split .key {
    text-transform: uppercase;
    min-width: 150px;
    text-align: right;
    padding-right: 12px;
}

.split .value {
    font-family: 'Consolas';
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    padding: 6px;
    box-sizing: border-box;
}

.info,
.list {
    padding: 12px;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    margin-top: 12px;
    box-sizing: border-box;
}

.stack {
    display: flex;
    flex-direction: column;
}

.text {
    padding-left: 24px;
    user-select: none;
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

.tabs {
    display: flex;
    flex-direction: row;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    margin-top: 12px;
    align-items: center;
}

.tabs .tab {
    min-width: 100px;
    padding-left: 12px;
    padding-right: 12px;
    text-align: center;
    border-bottom: 3px solid transparent;
    height: 100%;
    cursor: pointer;
    padding-top: 12px;
    padding-bottom: 6px;
}

.tabs .tab-active {
    border-color: rgb(120, 226, 120);
    background: rgba(0, 0, 0, 0.1);
}

.aside {
    display: none !important;
}
</style>
