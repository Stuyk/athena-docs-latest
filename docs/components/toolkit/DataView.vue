<script setup>
import { ref, watch } from 'vue';
const props = defineProps({ data: Array });
const expanded = ref([]);

const isExpanded = (index) => {
    return expanded.value.findIndex((x) => x === index) >= 0;
};

const toggle = (index) => {
    const foundIndex = expanded.value.findIndex((x) => x === index);
    if (foundIndex === -1) {
        expanded.value.push(index);
    } else {
        expanded.value.splice(foundIndex, 1);
    }
};
</script>

<template>
    <div class="stack list">
        <div class="split top">
            <h4>Information</h4>
            <sup style="padding-left: 12px">Updated every 100ms</sup>
        </div>
        <div class="stack">
            <div class="data" v-for="(someData, index) of props.data" :key="index">
                <div class="header split" @click="toggle(index)">
                    <span>({{ someData.id }})</span>&nbsp;
                    <span v-if="someData.data && someData.data.name">{{ someData.data.name }}</span>
                    <span v-if="someData.data && someData.data.model">{{ someData.data.model }}</span>
                    <span class="expander">{{ isExpanded(index) ? '[-]' : '[+]' }}</span>
                </div>
                <div class="data-content" v-if="isExpanded(index)">
                    <pre>{{ JSON.stringify(someData, null, 4) }}</pre>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.top {
    margin-bottom: 12px;
}

.data {
    margin-bottom: 12px;
}

.data-content {
    overflow: auto;
    background: rgba(0, 0, 0, 0.5);
    padding: 6px;
}

.header {
    background: rgba(0, 0, 0, 0.2);
    min-height: 35px;
    max-height: 35px;
    padding: 12px;
    box-sizing: border-box;
    cursor: pointer;
    user-select: none;
}

.header:hover {
    background: rgba(0, 0, 0, 0.4);
}

.header .expander {
    flex-grow: 1;
    text-align: right;
}
</style>
