import { OK } from "../util";

const state = {
    user: null, // ユーザー情報格納用
    apiStatus: null // API呼び出し成否情報格納用
};

const mutations = {
    setUser(state, user) {
        state.user = user;
    },
    setApiStatus(state, status) {
        state.apiStatus = status;
    }
};

const getters = {
    // ログインチェック
    check: state => !!state.user,
    // ユーザーネーム取得
    username: state => (state.user ? state.user.name : "")
};

const actions = {
    // 会員登録処理
    async register(context, data) {
        const response = await axios.post("/api/register", data);
        context.commit("setUser", response.data);
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
        context.commit("error/setCode", response.status, { root: true });
    },
    // ログアウト処理
    async logout(context) {
        const response = await axios.post("/api/logout");
        context.commit("setUser", null);
    },
    // ログイン確認処理
    async currentUser(context) {
        const response = await axios.get("/api/user");
        const user = response.data || null;
        context.commit("setUser", user);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
