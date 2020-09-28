const state = {
    voicePostErrorMessage: null
};

const mutations = {
    setVoicePostErrorMessage(state, messages) {
        state.voicePostErrorMessage = messages;
    }
};

export default {
    namespaced: true,
    state,
    mutations
};
