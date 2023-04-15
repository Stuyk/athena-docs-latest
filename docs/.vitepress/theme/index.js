// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import QuestionComponent from '/components/Question.vue';
import ToolkitComponent from '/components/Toolkit.vue';
import AuthComponent from '/components/Auth.vue';
import ExclusivePage from '/components/ExclusivePage.vue';
import { useData, useRoute } from 'vitepress';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import googleAnalytics from 'vitepress-plugin-google-analytics'
import './athena.css'

export default {
    ...DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        app.component('Auth', AuthComponent);
        app.component('Question', QuestionComponent);
        app.component('Toolkit', ToolkitComponent);
        app.component('ExclusivePage', ExclusivePage);

        googleAnalytics({
            id: 'G-D2PZTWXMJ7'
        })
    },
    setup() {
        const { frontmatter } = useData();
        const route = useRoute();

        giscusTalk({
            repo: 'Stuyk/altv-athena',
            repoId: 'MDEwOlJlcG9zaXRvcnkyOTg3MTM0NTg=',
            category: 'Documentation Feedback',
            categoryId: 'MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMyMjY2NDY0',
            mapping: 'path',
            term: 'Leave a comment!',
            reactionsEnabled: '1',
            lang: 'en',
        }, {
            frontmatter, route
        });
    }
}