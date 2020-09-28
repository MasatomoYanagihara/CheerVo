import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";
import error from "./error";
import voicePost from "./voicePost";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        auth,
        error,
        voicePost
    }
});

export default store;
