import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import Tres, { extend } from "@tresjs/core";
import { OrbitControls } from "three/addons";

extend({ OrbitControls });

const app = createApp(App);

app.use(Tres);
app.use(vuetify);

app.mount("#app").$nextTick(() => {
  // Use contextBridge
  window.ipcRenderer.on("main-process-message", (_event, message) => {
    console.log(message);
  });
});
