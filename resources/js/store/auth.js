import { OK, CREATED, UNPROCESSABLE_ENTITY } from "../util";

const state = {
    user: null, // ユーザー情報格納用
    apiStatus: null, // API呼び出し成否情報格納用
    loginErrorMessages: null,
    registerErrorMessages: null
};

const mutations = {
    setUser(state, user) {
        state.user = user;
    },
    setApiStatus(state, status) {
        state.apiStatus = status;
    },
    setLoginErrorMessages(state, messages) {
        state.loginErrorMessages = messages;
    },
    setRegisterErrorMessages(state, messages) {
        state.registerErrorMessages = messages;
    }
};

const getters = {
    // ログインチェック
    check: state => !!state.user,
    // ユーザーネーム取得
    username: state => (state.user ? state.user.name : ""),
    // ユーザーID取得
    userId: state => (state.user ? state.user.id : "")
};

const actions = {
    // 会員登録
    async register(context, data) {
        context.commit("setApiStatus", null);
        const response = await axios.post("/api/register", data);

        if (response.status === CREATED) {
            context.commit("setApiStatus", true);
            context.commit("setUser", response.data);
            return false;
        }

        context.commit("setApiStatus", false);
        if (response.status === UNPROCESSABLE_ENTITY) {
            context.commit("setRegisterErrorMessages", response.data.errors);
        } else {
            context.commit("error/setCode", response.status, { root: true });
        }
    },

    // ログイン処理
    async login(context, data) {
        context.commit("setApiStatus", null);

        // レスポンスコード取得
        const response = await axios
            .post("/api/login", data)
            .catch(err => err.response || err);

        // 成功
        if (response.status === OK) {
            context.commit("setApiStatus", true);
            context.commit("setUser", response.data);
            return false;
        }
        // 失敗
        context.commit("setApiStatus", false);
        if (response.status === UNPROCESSABLE_ENTITY) {
            context.commit("setLoginErrorMessages", response.data.errors);
        } else {
            context.commit("error/setCode", response.status, { root: true });
        }
    },

    // ログアウト
    async logout(context) {
        context.commit("setApiStatus", null);
        const response = await axios.post("/api/logout");

        if (response.status === OK) {
            context.commit("setApiStatus", true);
            context.commit("setUser", null);
            return false;
        }

        context.commit("setApiStatus", false);
        context.commit("error/setCode", response.status, { root: true });
    },

    // ログインユーザーチェック
    async currentUser(context) {
        context.commit("setApiStatus", null);
        const response = await axios.get("/api/user");
        const user = response.data || null;

        if (response.status === OK) {
            context.commit("setApiStatus", true);
            context.commit("setUser", user);
            return false;
        }

        context.commit("setApiStatus", false);
        context.commit("error/setCode", response.status, { root: true });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
