import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "@/assets/css/index.css"
import "normalize.css/normalize.css" // css重置样式

createApp(App).use(router).mount("#app")
