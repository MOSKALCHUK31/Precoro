import { createApp } from 'vue'

//Application
import App from './App.vue'
import router from './router'
import store from './store/store'

//UI
import BaseCard from './components/ui/BaseCard'
import Notification from './components/ui/Notification'

//Core
import Multiselect from 'vue-multiselect'

import TheForm from './components/core/form-group/TheForm'
import FormRow from './components/core/form-group/FormRow'
import FormRowInput from './components/core/form-group/FormRowInput'
import FormRowMultiselect from './components/core/form-group/FormRowMultiselect'
import FormRowSelect from './components/core/form-group/FormRowSelect'
import FormRowCheckbox from './components/core/form-group/FormRowCheckbox'
import FormRowParentCheckbox from './components/core/form-group/FormRowParentCheckbox'
import FormCheckbox from './components/core/form-group/FormCheckbox'
import TheButton from './components/core/button/TheButton'
import Accordion from './components/core/accordion/Accordion'
import AccordionItem from './components/core/accordion/AccordionItem'

const app = createApp(App)

app.use(router)
app.use(store)

app.component('multiselect', Multiselect)

app.component('base-card', BaseCard)
app.component('notification', Notification)
app.component('the-form', TheForm)
app.component('form-row', FormRow)
app.component('form-row-input', FormRowInput)
app.component('form-row-multiselect', FormRowMultiselect)
app.component('form-row-select', FormRowSelect)
app.component('form-row-checkbox', FormRowCheckbox)
app.component('form-row-parent-checkbox', FormRowParentCheckbox)
app.component('form-checkbox', FormCheckbox)
app.component('the-button', TheButton)
app.component('accordion', Accordion)
app.component('accordion-item', AccordionItem)

app.mount('#app')