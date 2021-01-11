import { App, Component } from 'vue'
import ZDate from './ZDate.vue'
import ZInput from './ZInput.vue'
import ZButton from './ZButton.vue'
import ZTextarea from './ZTextarea.vue'
import ZCheckbox from './ZCheckbox.vue'

const components: Component[] = [
  ZDate,
  ZInput,
  ZButton,
  ZTextarea,
  ZCheckbox
]

export default {
  install(app: App) {
    components.forEach(component => {
      app.component(component.name + '', component)
    })
  }
}