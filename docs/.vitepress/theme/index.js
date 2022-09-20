// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import QuestionComponent from '/components/Question.vue';

export default {
    ...DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        app.component('Question', QuestionComponent)
    }
}