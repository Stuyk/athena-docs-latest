// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import QuestionComponent from '/components/Question.vue';
import ToolkitComponent from '/components/Toolkit.vue';
import UserPluginComponent from '/components/UserPlugin.vue';
import './athena.css'

export default {
    ...DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        app.component('Question', QuestionComponent);
        app.component('Toolkit', ToolkitComponent);
        app.component('UserPlugin', UserPluginComponent);
    }
}