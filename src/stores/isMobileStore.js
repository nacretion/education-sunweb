import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMobile: false,
  },
  mutations: {
    setMobile(state, value) {
      state.isMobile = value;
    },
  },
  actions: {
    checkMobile({ commit }) {
      const isMobile = window.innerWidth < 1024;
      commit("setMobile", isMobile);
    },
    // Добавляем действие для подписки на событие изменения размера окна
    subscribeToResizeEvent({ dispatch }) {
      dispatch("checkMobile"); // Проверяем при инициализации
      window.addEventListener("resize", () => {
        dispatch("checkMobile"); // Повторно проверяем при изменении размера
      });
    },
  },
});
