import { createApp } from 'vue'

//Application
import App from './App.vue'
import router from './router'

//UI
import BaseCard from './components/ui/BaseCard'

//Core
import Multiselect from 'vue-multiselect'

import TheForm from './components/core/form-group/TheForm'
import FormRow from './components/core/form-group/FormRow'
import FormRowInput from './components/core/form-group/FormRowInput'
import FormRowMultiselect from "./components/core/form-group/FormRowMultiselect"
import TheButton from './components/core/TheButton'

const app = createApp(App)

app.component('multiselect', Multiselect)

app.component('base-card', BaseCard)
app.component('the-form', TheForm)
app.component('form-row', FormRow)
app.component('form-row-input', FormRowInput)
app.component('form-row-multiselect', FormRowMultiselect)
app.component('the-button', TheButton)

app.use(router)

app.mount('#app')