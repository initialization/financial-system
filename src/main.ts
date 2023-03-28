import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import pinia from "./store"
import { userStore } from "./store/main/userStore"
import "@/assets/css/index.css"
import "normalize.css/normalize.css" // css重置样式
import * as ElementPlusIconsVue from "@element-plus/icons-vue"

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia)
const setupStore = userStore()
setupStore.userMenuAction()
app.use(router).mount("#app")
