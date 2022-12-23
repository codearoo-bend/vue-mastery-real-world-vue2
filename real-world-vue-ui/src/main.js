import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context(
  "./components", // directory to searc
  false, // include sub directories or not
  /Base[A-Z]\w+\.(vue|js)$/ // regex pattern to look for
);

requireComponent.keys().forEach((filename) => {
  const componentConfig = requireComponent(filename);
  const componentName = upperFirst(
    camelCase(filename.replace(/^\.\/(.*)\.\w+$/, "$1")) // get the file basename
  );
  Vue.component(componentName, componentConfig.default || componentConfig); // register the component
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
