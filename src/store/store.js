import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            inputStateDisabled: false,
            navigation: {
                isMainInfoConfirmed: false,
                isLocationsConfirmed: false,
                isDocsConfirmed: false,
                isRolesConfirmed: false
            }
        }
    },
    getters: {
        getInputState(state) {
            return state.inputStateDisabled
        },
        getNavigationState(state) {
            return state.navigation
        }
    },
    mutations: {
        DISABLE_DISABLE_INPUTS(state) {
            state.inputStateDisabled = true
        },
        HANDLE_CONFIRM_MAIN_INFO(state) {
            state.navigation.isMainInfoConfirmed = true
        },
        HANDLE_CONFIRM_LOCATIONS(state) {
            state.navigation.isMainInfoConfirmed = true
            state.navigation.isLocationsConfirmed = true
        },
        HANDLE_CONFIRM_DOCS(state) {
            state.navigation.isMainInfoConfirmed = true
            state.navigation.isLocationsConfirmed = true
            state.navigation.isDocsConfirmed = true
        },
        HANDLE_CONFIRM_ROLES(state) {
            state.navigation.isMainInfoConfirmed = true
            state.navigation.isLocationsConfirmed = true
            state.navigation.isDocsConfirmed = true
            state.navigation.isRolesConfirmed = true
        }
    },
    actions: {
        HANDLE_DISABLE_INPUTS_ACTION(context) {
            context.commit('DISABLE_DISABLE_INPUTS')
        },
        HANDLE_CONFIRM_MAIN_INFO_ACTION(context) {
            context.commit('HANDLE_CONFIRM_MAIN_INFO')
        },
        HANDLE_CONFIRM_LOCATIONS_ACTION(context) {
            context.commit('HANDLE_CONFIRM_LOCATIONS')
        },
        HANDLE_CONFIRM_DOCS_ACTION(context) {
            context.commit('HANDLE_CONFIRM_DOCS')
        },
        HANDLE_CONFIRM_DOCS_ROLES_ACTION(context) {
            context.commit('HANDLE_CONFIRM_ROLES')
        }
    }
})

export default store