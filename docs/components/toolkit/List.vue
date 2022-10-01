<script setup>
import { ref, watch } from 'vue';
const props = defineProps({ list: Array });
const showRot = ref(false);
const currentValues = ref([]);
const emit = defineEmits(['remove-from-list']);

const update = () => {
    currentValues.value = props.list.map(({ pos, rot }) => {
        if (showRot.value === true) {
            return { pos, rot };
        }

        return { ...pos };
    });
};

const remove = (index) => {
    emit('remove-from-list', index);
};

watch(
    props.list,
    () => {
        update();
    },
    { immediate: true }
);

watch(
    showRot,
    () => {
        update();
    },
    { immediate: true }
);
</script>

<template>
    <div class="stack list">
        <div class="split">
            <h4>Stored Positions</h4>
            <sup style="padding-left: 12px">Press 'F1' in-game to append to this list.</sup>
        </div>
        <div class="split">
            <label for="showRot">Show Rotation?</label>
            <input type="checkbox" id="showRot" v-model="showRot" />
        </div>
        <div class="values">
            <span>[</span>
            <div class="split" v-for="(value, index) of currentValues" :key="index">
                <div class="storedValue">{{ value }},</div>
                <div class="remove" @click="remove(index)">X</div>
            </div>
            <span>]</span>
        </div>
    </div>
</template>

<style>
.storedValue {
    font-size: 12px !important;
    font-family: 'Consolas';
    margin-left: 24px;
    box-sizing: border-box;
    padding-right: 12px;
    border-radius: 6px;
    box-sizing: border-box;
}

.textarea {
    display: flex;
    min-height: 500px;
    align-items: flex-start;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
}

.remove {
    flex-grow: 1;
    text-align: center;
    padding-left: 24px;
    padding-right: 24px;
    box-sizing: border-box;
    user-select: none;
    color: rgba(200, 100, 0, 1);
    font-weight: 800;
    cursor: pointer;
}
</style>
