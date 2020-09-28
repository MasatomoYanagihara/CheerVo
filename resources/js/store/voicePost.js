const state = {
    voicePostErrorMessages: null
};

const mutations = {
    setVoicePostErrorMessages(state, messages) {
        state.voicePostErrorMessages = messages;
    }
};

export default {
    namespaced: true,
    state,
    mutations
};
