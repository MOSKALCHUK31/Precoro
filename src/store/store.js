import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            inputStateDisabled: false
        }
    },
    getters: {
        getInputState(state) {
            return state.inputStateDisabled
        }
    },
    mutations: {
        DISABLE_DISABLE_INPUTS(state) {
            state.inputStateDisabled = true
        }
    },
    actions: {
        HANDLE_DISABLE_INPUTS__ACTION(context) {
            // Any actions before commit => ...
            context.commit('DISABLE_DISABLE_INPUTS')
        }
    }
})

export default store