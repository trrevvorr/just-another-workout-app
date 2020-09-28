import Vue from "vue";
import VueRouter from "vue-router";
import Routines from "../views/Routines.vue";
import Routine from "../views/Routine.vue";
import Session from "../views/Session.vue";
import Exercise from "../views/Exercise.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Routines",
    component: Routines,
  },
  {
    path: "/routine/:routineId",
    name: "Routine",
    component: Routine,
  },
  {
    path: "/routine/:routineId/session/:sessionId",
    name: "Session",
    component: Session,
  },
  {
    path: "/routine/:routineId/session/:sessionId/exercise/:exerciseId",
    name: "Exercise",
    component: Exercise,
  },
  {
    path: "*",
    name: "Routines",
    component: Routines,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
