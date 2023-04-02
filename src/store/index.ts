import { createPinia } from "pinia"
import piniaPluginpersistedstate from "pinia-plugin-persist"
const pinia = createPinia()
pinia.use(piniaPluginpersistedstate)
export default pinia
