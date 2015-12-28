const Vue = require('vue');
const App = require('./coms/app.vue');

new Vue({
  el: 'body',
  components: {
    app: App
  }
});

// global config
Vue.config.debug = true;
