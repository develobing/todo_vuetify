import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#6371c9',
    success: '#96c289',
    info: '#82B1FF',
    error: '#FF5252'
  }
})
