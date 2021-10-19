import { App, Component } from 'vue'
import ZDate from './ZDate.vue'
import ZMask from './ZMask.vue'
import ZInput from './ZInput.vue'
import ZDialog from './ZDialog.vue'
import ZButton from './ZButton.vue'
import ZTextarea from './ZTextarea.vue'
import ZCheckbox from './ZCheckbox.vue'

const components: Component[] = [
  ZDate,
  ZMask,
  ZInput,
  ZButton,
  ZDialog,
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