import Vue from 'vue'
import Hamburger from '../Icons/hamburger.vue'
import Eye from '../Icons/eye.vue'
import Filter from '../Icons/filter.vue'
import Rating from '../Icons/rating.vue'
import Heart from '../Icons/heart.vue'
import VueEventBus from 'vue-event-bus'

// Registering global icons
Vue.component('os-filter', Filter)
Vue.component('os-hamburger', Hamburger)
Vue.component('os-eye', Eye)
Vue.component('os-rating', Rating)
Vue.component('os-heart', Heart)
Vue.component('os-filter')

// Event bus
Vue.use(VueEventBus)
