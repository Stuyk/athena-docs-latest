// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import QuestionComponent from '/components/Question.vue';
import ToolkitComponent from '/components/Toolkit.vue';
import UserPluginComponent from '/components/UserPlugin.vue';
import AuthComponent from '/components/Auth.vue';
import ExclusivePage from '/components/ExclusivePage.vue';
import './athena.css'

export default {
    ...DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        app.component('Auth', AuthComponent);
        app.component('Question', QuestionComponent);
        app.component('Toolkit', ToolkitComponent);
        app.component('UserPlugin', UserPluginComponent);
        app.component('ExclusivePage', ExclusivePage);
    }
}