<script setup>
import { ref } from 'vue';

const isIncorrect = ref(undefined);

const props = defineProps({
    type: String,
    question: String,
    answers: Array,
});

const handleAnswerSelect = (answerObject) => {
    isIncorrect.value = answerObject.isAnswer ? false : true;
};
</script>

<template>
    <div class="question" style="padding-top: 12px">
        <h4>{{ question }}</h4>
    </div>
    <div v-if="typeof isIncorrect !== 'undefined'">
        <div v-if="isIncorrect">
            <span style="color: orange; font-weight: 500">
                Incorrect, the actual answer is: {{ answers.find((x) => x.isAnswer).text }}
            </span>
        </div>
        <div v-if="!isIncorrect">
            <span style="color: greenyellow">Correct!</span>
        </div>
    </div>
    <div class="answer" v-for="(answerObject, index) in answers" :key="index">
        <input type="radio" :name="type" @input="handleAnswerSelect(answerObject)" /> {{ answerObject.text }}<br />
    </div>
    <br />
</template>
