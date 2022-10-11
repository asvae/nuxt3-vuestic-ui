import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'

export default defineNuxtPlugin(nuxtApp => {
  const vuestic = createVuestic()
  nuxtApp.vueApp.use(vuestic)
})
