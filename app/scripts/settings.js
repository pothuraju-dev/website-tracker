import Vue from 'vue';
import Vuerify from "vuetify";
import Settings from "../pages/settings.vue"
import 'vuetify/dist/vuetify.css'
import '../styles/settings.css';

function initSettings() {
    try {
        initVue();
    } catch (e) {
        throw new Error(`?? Error Initializing Settings | ${e}`)
    }
}

function initVue() {
    Vue.use(Vuerify, {});
    new Vue({
        el: "#app",
        render:(h)=>h(Settings)
    })
}

initSettings();
