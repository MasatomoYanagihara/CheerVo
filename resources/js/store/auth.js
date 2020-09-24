const state = {
    user: null
};

const mutations = {
    setUser(state, user) {
        state.user = user;
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
        const response = await axios.post("/api/login", data);
        context.commit("setUser", response.data);
    },
    // ログアウト処理
    async logout(context) {
        const response = await axios.post("/api/logout");
        context.commit("setUser", null);
    },
    // ログイン確認処理
    async currentUser (context) {
        const response = await axios.get('/api/user')
        const user = response.data || null
        context.commit('setUser', user)
      }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
