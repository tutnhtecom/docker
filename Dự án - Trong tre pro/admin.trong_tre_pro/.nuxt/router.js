import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _36e6c835 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _523c7a04 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _817d76be = () => interopDefault(import('../pages/admin/complain/index.vue' /* webpackChunkName: "pages/admin/complain/index" */))
const _39e8cf1c = () => interopDefault(import('../pages/admin/dashboard/index.vue' /* webpackChunkName: "pages/admin/dashboard/index" */))
const _b0845fec = () => interopDefault(import('../pages/admin/materials/index.vue' /* webpackChunkName: "pages/admin/materials/index" */))
const _9d5ce6f2 = () => interopDefault(import('../pages/admin/medias/index.vue' /* webpackChunkName: "pages/admin/medias/index" */))
const _338adba3 = () => interopDefault(import('../pages/admin/notification/index.vue' /* webpackChunkName: "pages/admin/notification/index" */))
const _654ce246 = () => interopDefault(import('../pages/admin/orders/index.vue' /* webpackChunkName: "pages/admin/orders/index" */))
const _77a90167 = () => interopDefault(import('../pages/admin/parents/index.vue' /* webpackChunkName: "pages/admin/parents/index" */))
const _52956e6b = () => interopDefault(import('../pages/admin/review-lesson/index.vue' /* webpackChunkName: "pages/admin/review-lesson/index" */))
const _c068d7da = () => interopDefault(import('../pages/admin/service/index.vue' /* webpackChunkName: "pages/admin/service/index" */))
const _c2b1cae0 = () => interopDefault(import('../pages/admin/students/index.vue' /* webpackChunkName: "pages/admin/students/index" */))
const _e5096bc6 = () => interopDefault(import('../pages/admin/teacher-training/index.vue' /* webpackChunkName: "pages/admin/teacher-training/index" */))
const _8eea18e0 = () => interopDefault(import('../pages/admin/videos/index.vue' /* webpackChunkName: "pages/admin/videos/index" */))
const _6bc61ef1 = () => interopDefault(import('../pages/admin/dashboard/customer_reports/index.vue' /* webpackChunkName: "pages/admin/dashboard/customer_reports/index" */))
const _15d0a546 = () => interopDefault(import('../pages/admin/dashboard/salary/index.vue' /* webpackChunkName: "pages/admin/dashboard/salary/index" */))
const _2e4895cc = () => interopDefault(import('../pages/admin/dashboard/sales_report/index.vue' /* webpackChunkName: "pages/admin/dashboard/sales_report/index" */))
const _1b8d1b4b = () => interopDefault(import('../pages/admin/dashboard/user_report/index.vue' /* webpackChunkName: "pages/admin/dashboard/user_report/index" */))
const _693c4a1f = () => interopDefault(import('../pages/admin/lsm/result-training/index.vue' /* webpackChunkName: "pages/admin/lsm/result-training/index" */))
const _42e520f9 = () => interopDefault(import('../pages/admin/lsm/students/index.vue' /* webpackChunkName: "pages/admin/lsm/students/index" */))
const _7e64d786 = () => interopDefault(import('../pages/admin/lsm/teacher-training/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/index" */))
const _11653b77 = () => interopDefault(import('../pages/admin/materials/create/index.vue' /* webpackChunkName: "pages/admin/materials/create/index" */))
const _7eaa8923 = () => interopDefault(import('../pages/admin/materials/create_bg/index.vue' /* webpackChunkName: "pages/admin/materials/create_bg/index" */))
const _7b4e2f4c = () => interopDefault(import('../pages/admin/medias/create/index.vue' /* webpackChunkName: "pages/admin/medias/create/index" */))
const _bb4268e8 = () => interopDefault(import('../pages/admin/my/notification/index.vue' /* webpackChunkName: "pages/admin/my/notification/index" */))
const _510cbc84 = () => interopDefault(import('../pages/admin/notification/create/index.vue' /* webpackChunkName: "pages/admin/notification/create/index" */))
const _354fb944 = () => interopDefault(import('../pages/admin/orders/create/index.vue' /* webpackChunkName: "pages/admin/orders/create/index" */))
const _145c7cdd = () => interopDefault(import('../pages/admin/review-lesson/form-review/index.vue' /* webpackChunkName: "pages/admin/review-lesson/form-review/index" */))
const _6dfd8b4e = () => interopDefault(import('../pages/admin/service/create/index.vue' /* webpackChunkName: "pages/admin/service/create/index" */))
const _ad9ba39e = () => interopDefault(import('../pages/admin/students/create/index.vue' /* webpackChunkName: "pages/admin/students/create/index" */))
const _4e4603e5 = () => interopDefault(import('../pages/admin/system/about/index.vue' /* webpackChunkName: "pages/admin/system/about/index" */))
const _c2bc6d2c = () => interopDefault(import('../pages/admin/system/banner/index.vue' /* webpackChunkName: "pages/admin/system/banner/index" */))
const _3ee84d89 = () => interopDefault(import('../pages/admin/system/configs/index.vue' /* webpackChunkName: "pages/admin/system/configs/index" */))
const _28a54c9e = () => interopDefault(import('../pages/admin/system/educational-ecosystem/index.vue' /* webpackChunkName: "pages/admin/system/educational-ecosystem/index" */))
const _cc29eb32 = () => interopDefault(import('../pages/admin/system/support/index.vue' /* webpackChunkName: "pages/admin/system/support/index" */))
const _a1cc647a = () => interopDefault(import('../pages/admin/system/tax/index.vue' /* webpackChunkName: "pages/admin/system/tax/index" */))
const _3f33625c = () => interopDefault(import('../pages/admin/system/tutorial/index.vue' /* webpackChunkName: "pages/admin/system/tutorial/index" */))
const _9bbe53f8 = () => interopDefault(import('../pages/admin/teacher-training/create/index.vue' /* webpackChunkName: "pages/admin/teacher-training/create/index" */))
const _1f42dd3e = () => interopDefault(import('../pages/admin/teacher-training/training-result/index.vue' /* webpackChunkName: "pages/admin/teacher-training/training-result/index" */))
const _6f28b3a3 = () => interopDefault(import('../pages/admin/users/admins/index.vue' /* webpackChunkName: "pages/admin/users/admins/index" */))
const _4560046e = () => interopDefault(import('../pages/admin/users/parent/index.vue' /* webpackChunkName: "pages/admin/users/parent/index" */))
const _ad355fa0 = () => interopDefault(import('../pages/admin/users/teachers/index.vue' /* webpackChunkName: "pages/admin/users/teachers/index" */))
const _459ccfa8 = () => interopDefault(import('../pages/admin/lsm/students/create/index.vue' /* webpackChunkName: "pages/admin/lsm/students/create/index" */))
const _8075e978 = () => interopDefault(import('../pages/admin/review-lesson/form-review/create/index.vue' /* webpackChunkName: "pages/admin/review-lesson/form-review/create/index" */))
const _81ce6c84 = () => interopDefault(import('../pages/admin/users/admins/create/index.vue' /* webpackChunkName: "pages/admin/users/admins/create/index" */))
const _75a01fde = () => interopDefault(import('../pages/admin/users/admins/roles/index.vue' /* webpackChunkName: "pages/admin/users/admins/roles/index" */))
const _eed65226 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _d91e5c70 = () => interopDefault(import('../pages/admin/dashboard/salary/_id/index.vue' /* webpackChunkName: "pages/admin/dashboard/salary/_id/index" */))
const _79444847 = () => interopDefault(import('../pages/admin/lsm/result-training/_id.vue' /* webpackChunkName: "pages/admin/lsm/result-training/_id" */))
const _e039d138 = () => interopDefault(import('../pages/admin/lsm/students/_id/index.vue' /* webpackChunkName: "pages/admin/lsm/students/_id/index" */))
const _005abf71 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/index" */))
const _4c8001f4 = () => interopDefault(import('../pages/admin/materials/detail/_id.vue' /* webpackChunkName: "pages/admin/materials/detail/_id" */))
const _3116a6ad = () => interopDefault(import('../pages/admin/materials/edit/_id.vue' /* webpackChunkName: "pages/admin/materials/edit/_id" */))
const _467c3d70 = () => interopDefault(import('../pages/admin/review-lesson/form-review/_id/index.vue' /* webpackChunkName: "pages/admin/review-lesson/form-review/_id/index" */))
const _f123f332 = () => interopDefault(import('../pages/admin/students/edit/_id.vue' /* webpackChunkName: "pages/admin/students/edit/_id" */))
const _5a0e1e31 = () => interopDefault(import('../pages/admin/system/configs/_id.vue' /* webpackChunkName: "pages/admin/system/configs/_id" */))
const _5879d1b4 = () => interopDefault(import('../pages/admin/teacher-training/training-result/_id.vue' /* webpackChunkName: "pages/admin/teacher-training/training-result/_id" */))
const _152d75e4 = () => interopDefault(import('../pages/admin/users/admins/_id/index.vue' /* webpackChunkName: "pages/admin/users/admins/_id/index" */))
const _0cf30c34 = () => interopDefault(import('../pages/admin/users/parent/_id/index.vue' /* webpackChunkName: "pages/admin/users/parent/_id/index" */))
const _4fbad31b = () => interopDefault(import('../pages/admin/users/teachers/_id/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/index" */))
const _2d72281c = () => interopDefault(import('../pages/admin/lsm/students/_id/detail/index.vue' /* webpackChunkName: "pages/admin/lsm/students/_id/detail/index" */))
const _15c67a30 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/create/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/create/index" */))
const _3cbbbf20 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/create_course/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/create_course/index" */))
const _2430323a = () => interopDefault(import('../pages/admin/users/parent/_id/complain/index.vue' /* webpackChunkName: "pages/admin/users/parent/_id/complain/index" */))
const _412ef66f = () => interopDefault(import('../pages/admin/users/parent/_id/history_service/index.vue' /* webpackChunkName: "pages/admin/users/parent/_id/history_service/index" */))
const _7e375871 = () => interopDefault(import('../pages/admin/users/teachers/_id/change-level/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/change-level/index" */))
const _9492e43c = () => interopDefault(import('../pages/admin/users/teachers/_id/change-service/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/change-service/index" */))
const _c21c6ea8 = () => interopDefault(import('../pages/admin/users/teachers/_id/course-history/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/course-history/index" */))
const _7f9fe694 = () => interopDefault(import('../pages/admin/users/teachers/_id/edit/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/edit/index" */))
const _39b3f11e = () => interopDefault(import('../pages/admin/users/teachers/_id/recharge/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/recharge/index" */))
const _fc6c5666 = () => interopDefault(import('../pages/admin/users/teachers/_id/training-results/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/training-results/index" */))
const _4d9fe4d6 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/detail/abc.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/detail/abc" */))
const _61b610b6 = () => interopDefault(import('../pages/admin/users/teachers/_id/recharge/history/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/recharge/history/index" */))
const _53d52ebe = () => interopDefault(import('../pages/admin/dashboard/salary/_id/create/_date_l.vue' /* webpackChunkName: "pages/admin/dashboard/salary/_id/create/_date_l" */))
const _3c413bb0 = () => interopDefault(import('../pages/admin/lsm/students/_id/detail/_id_lesson/index.vue' /* webpackChunkName: "pages/admin/lsm/students/_id/detail/_id_lesson/index" */))
const _2599f9a0 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/detail/_course_id/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/detail/_course_id/index" */))
const _4b18b878 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/edit/_course_id.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/edit/_course_id" */))
const _cc727644 = () => interopDefault(import('../pages/admin/users/teachers/_id/training-results/_results_id.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/training-results/_results_id" */))
const _25c6d9c2 = () => interopDefault(import('../pages/admin/lsm/students/_id/detail/_id_lesson/edit/index.vue' /* webpackChunkName: "pages/admin/lsm/students/_id/detail/_id_lesson/edit/index" */))
const _72293d21 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/detail/_course_id/create/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/detail/_course_id/create/index" */))
const _d1452794 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/detail/_course_id/teachers/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/detail/_course_id/teachers/index" */))
const _5fd839d0 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/detail/_course_id/edit/_id_lesson.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/detail/_course_id/edit/_id_lesson" */))
const _01a91f6c = () => interopDefault(import('../pages/admin/lsm/students/_id/detail/_id_lesson/_id_baihoc/index.vue' /* webpackChunkName: "pages/admin/lsm/students/_id/detail/_id_lesson/_id_baihoc/index" */))
const _74b5270c = () => interopDefault(import('../pages/admin/complain/_id/index.vue' /* webpackChunkName: "pages/admin/complain/_id/index" */))
const _66341970 = () => interopDefault(import('../pages/admin/orders/_id/index.vue' /* webpackChunkName: "pages/admin/orders/_id/index" */))
const _05c510d2 = () => interopDefault(import('../pages/admin/parents/_id/index.vue' /* webpackChunkName: "pages/admin/parents/_id/index" */))
const _ea294854 = () => interopDefault(import('../pages/admin/review-lesson/_id/index.vue' /* webpackChunkName: "pages/admin/review-lesson/_id/index" */))
const _3f5f250a = () => interopDefault(import('../pages/admin/students/_id/index.vue' /* webpackChunkName: "pages/admin/students/_id/index" */))
const _353bc72c = () => interopDefault(import('../pages/admin/materials/_id/create/index.vue' /* webpackChunkName: "pages/admin/materials/_id/create/index" */))
const _5eccb298 = () => interopDefault(import('../pages/admin/materials/_id/histories/index.vue' /* webpackChunkName: "pages/admin/materials/_id/histories/index" */))
const _bcc25dcc = () => interopDefault(import('../pages/admin/medias/_id/edit.vue' /* webpackChunkName: "pages/admin/medias/_id/edit" */))
const _5862f096 = () => interopDefault(import('../pages/admin/orders/_id/lesson/index.vue' /* webpackChunkName: "pages/admin/orders/_id/lesson/index" */))
const _31b45211 = () => interopDefault(import('../pages/admin/service/_id/edit/index.vue' /* webpackChunkName: "pages/admin/service/_id/edit/index" */))
const _40fdd16b = () => interopDefault(import('../pages/admin/service/_id/lesson-content/index.vue' /* webpackChunkName: "pages/admin/service/_id/lesson-content/index" */))
const _5aa5e3fb = () => interopDefault(import('../pages/admin/service/_id/lesson-price/index.vue' /* webpackChunkName: "pages/admin/service/_id/lesson-price/index" */))
const _1dfabc0e = () => interopDefault(import('../pages/admin/service/_id/sale/index.vue' /* webpackChunkName: "pages/admin/service/_id/sale/index" */))
const _a2f0440a = () => interopDefault(import('../pages/admin/students/_id/detail/index.vue' /* webpackChunkName: "pages/admin/students/_id/detail/index" */))
const _3a315834 = () => interopDefault(import('../pages/admin/videos/_id/create/index.vue' /* webpackChunkName: "pages/admin/videos/_id/create/index" */))
const _08ac0f34 = () => interopDefault(import('../pages/admin/videos/_id/edit/index.vue' /* webpackChunkName: "pages/admin/videos/_id/edit/index" */))
const _e5c363a6 = () => interopDefault(import('../pages/admin/materials/_id/histories/_id_list.vue' /* webpackChunkName: "pages/admin/materials/_id/histories/_id_list" */))
const _4b636abf = () => interopDefault(import('../pages/admin/students/_id/detail/_package_id/index.vue' /* webpackChunkName: "pages/admin/students/_id/detail/_package_id/index" */))
const _3d59c9bc = () => interopDefault(import('../pages/admin/students/_id/detail/_package_id/create/index.vue' /* webpackChunkName: "pages/admin/students/_id/detail/_package_id/create/index" */))
const _5294add5 = () => interopDefault(import('../pages/admin/students/_id/detail/_package_id/edit/_lesson_id.vue' /* webpackChunkName: "pages/admin/students/_id/detail/_package_id/edit/_lesson_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/inspire",
    component: _36e6c835,
    name: "inspire"
  }, {
    path: "/login",
    component: _523c7a04,
    name: "login"
  }, {
    path: "/admin/complain",
    component: _817d76be,
    name: "admin-complain"
  }, {
    path: "/admin/dashboard",
    component: _39e8cf1c,
    name: "admin-dashboard"
  }, {
    path: "/admin/materials",
    component: _b0845fec,
    name: "admin-materials"
  }, {
    path: "/admin/medias",
    component: _9d5ce6f2,
    name: "admin-medias"
  }, {
    path: "/admin/notification",
    component: _338adba3,
    name: "admin-notification"
  }, {
    path: "/admin/orders",
    component: _654ce246,
    name: "admin-orders"
  }, {
    path: "/admin/parents",
    component: _77a90167,
    name: "admin-parents"
  }, {
    path: "/admin/review-lesson",
    component: _52956e6b,
    name: "admin-review-lesson"
  }, {
    path: "/admin/service",
    component: _c068d7da,
    name: "admin-service"
  }, {
    path: "/admin/students",
    component: _c2b1cae0,
    name: "admin-students"
  }, {
    path: "/admin/teacher-training",
    component: _e5096bc6,
    name: "admin-teacher-training"
  }, {
    path: "/admin/videos",
    component: _8eea18e0,
    name: "admin-videos"
  }, {
    path: "/admin/dashboard/customer_reports",
    component: _6bc61ef1,
    name: "admin-dashboard-customer_reports"
  }, {
    path: "/admin/dashboard/salary",
    component: _15d0a546,
    name: "admin-dashboard-salary"
  }, {
    path: "/admin/dashboard/sales_report",
    component: _2e4895cc,
    name: "admin-dashboard-sales_report"
  }, {
    path: "/admin/dashboard/user_report",
    component: _1b8d1b4b,
    name: "admin-dashboard-user_report"
  }, {
    path: "/admin/lsm/result-training",
    component: _693c4a1f,
    name: "admin-lsm-result-training"
  }, {
    path: "/admin/lsm/students",
    component: _42e520f9,
    name: "admin-lsm-students"
  }, {
    path: "/admin/lsm/teacher-training",
    component: _7e64d786,
    name: "admin-lsm-teacher-training"
  }, {
    path: "/admin/materials/create",
    component: _11653b77,
    name: "admin-materials-create"
  }, {
    path: "/admin/materials/create_bg",
    component: _7eaa8923,
    name: "admin-materials-create_bg"
  }, {
    path: "/admin/medias/create",
    component: _7b4e2f4c,
    name: "admin-medias-create"
  }, {
    path: "/admin/my/notification",
    component: _bb4268e8,
    name: "admin-my-notification"
  }, {
    path: "/admin/notification/create",
    component: _510cbc84,
    name: "admin-notification-create"
  }, {
    path: "/admin/orders/create",
    component: _354fb944,
    name: "admin-orders-create"
  }, {
    path: "/admin/review-lesson/form-review",
    component: _145c7cdd,
    name: "admin-review-lesson-form-review"
  }, {
    path: "/admin/service/create",
    component: _6dfd8b4e,
    name: "admin-service-create"
  }, {
    path: "/admin/students/create",
    component: _ad9ba39e,
    name: "admin-students-create"
  }, {
    path: "/admin/system/about",
    component: _4e4603e5,
    name: "admin-system-about"
  }, {
    path: "/admin/system/banner",
    component: _c2bc6d2c,
    name: "admin-system-banner"
  }, {
    path: "/admin/system/configs",
    component: _3ee84d89,
    name: "admin-system-configs"
  }, {
    path: "/admin/system/educational-ecosystem",
    component: _28a54c9e,
    name: "admin-system-educational-ecosystem"
  }, {
    path: "/admin/system/support",
    component: _cc29eb32,
    name: "admin-system-support"
  }, {
    path: "/admin/system/tax",
    component: _a1cc647a,
    name: "admin-system-tax"
  }, {
    path: "/admin/system/tutorial",
    component: _3f33625c,
    name: "admin-system-tutorial"
  }, {
    path: "/admin/teacher-training/create",
    component: _9bbe53f8,
    name: "admin-teacher-training-create"
  }, {
    path: "/admin/teacher-training/training-result",
    component: _1f42dd3e,
    name: "admin-teacher-training-training-result"
  }, {
    path: "/admin/users/admins",
    component: _6f28b3a3,
    name: "admin-users-admins"
  }, {
    path: "/admin/users/parent",
    component: _4560046e,
    name: "admin-users-parent"
  }, {
    path: "/admin/users/teachers",
    component: _ad355fa0,
    name: "admin-users-teachers"
  }, {
    path: "/admin/lsm/students/create",
    component: _459ccfa8,
    name: "admin-lsm-students-create"
  }, {
    path: "/admin/review-lesson/form-review/create",
    component: _8075e978,
    name: "admin-review-lesson-form-review-create"
  }, {
    path: "/admin/users/admins/create",
    component: _81ce6c84,
    name: "admin-users-admins-create"
  }, {
    path: "/admin/users/admins/roles",
    component: _75a01fde,
    name: "admin-users-admins-roles"
  }, {
    path: "/",
    component: _eed65226,
    name: "index"
  }, {
    path: "/admin/dashboard/salary/:id",
    component: _d91e5c70,
    name: "admin-dashboard-salary-id"
  }, {
    path: "/admin/lsm/result-training/:id?",
    component: _79444847,
    name: "admin-lsm-result-training-id"
  }, {
    path: "/admin/lsm/students/:id",
    component: _e039d138,
    name: "admin-lsm-students-id"
  }, {
    path: "/admin/lsm/teacher-training/:id",
    component: _005abf71,
    name: "admin-lsm-teacher-training-id"
  }, {
    path: "/admin/materials/detail/:id?",
    component: _4c8001f4,
    name: "admin-materials-detail-id"
  }, {
    path: "/admin/materials/edit/:id?",
    component: _3116a6ad,
    name: "admin-materials-edit-id"
  }, {
    path: "/admin/review-lesson/form-review/:id",
    component: _467c3d70,
    name: "admin-review-lesson-form-review-id"
  }, {
    path: "/admin/students/edit/:id?",
    component: _f123f332,
    name: "admin-students-edit-id"
  }, {
    path: "/admin/system/configs/:id",
    component: _5a0e1e31,
    name: "admin-system-configs-id"
  }, {
    path: "/admin/teacher-training/training-result/:id",
    component: _5879d1b4,
    name: "admin-teacher-training-training-result-id"
  }, {
    path: "/admin/users/admins/:id",
    component: _152d75e4,
    name: "admin-users-admins-id"
  }, {
    path: "/admin/users/parent/:id",
    component: _0cf30c34,
    name: "admin-users-parent-id"
  }, {
    path: "/admin/users/teachers/:id",
    component: _4fbad31b,
    name: "admin-users-teachers-id"
  }, {
    path: "/admin/lsm/students/:id/detail",
    component: _2d72281c,
    name: "admin-lsm-students-id-detail"
  }, {
    path: "/admin/lsm/teacher-training/:id?/create",
    component: _15c67a30,
    name: "admin-lsm-teacher-training-id-create"
  }, {
    path: "/admin/lsm/teacher-training/:id?/create_course",
    component: _3cbbbf20,
    name: "admin-lsm-teacher-training-id-create_course"
  }, {
    path: "/admin/users/parent/:id/complain",
    component: _2430323a,
    name: "admin-users-parent-id-complain"
  }, {
    path: "/admin/users/parent/:id/history_service",
    component: _412ef66f,
    name: "admin-users-parent-id-history_service"
  }, {
    path: "/admin/users/teachers/:id/change-level",
    component: _7e375871,
    name: "admin-users-teachers-id-change-level"
  }, {
    path: "/admin/users/teachers/:id/change-service",
    component: _9492e43c,
    name: "admin-users-teachers-id-change-service"
  }, {
    path: "/admin/users/teachers/:id/course-history",
    component: _c21c6ea8,
    name: "admin-users-teachers-id-course-history"
  }, {
    path: "/admin/users/teachers/:id/edit",
    component: _7f9fe694,
    name: "admin-users-teachers-id-edit"
  }, {
    path: "/admin/users/teachers/:id/recharge",
    component: _39b3f11e,
    name: "admin-users-teachers-id-recharge"
  }, {
    path: "/admin/users/teachers/:id/training-results",
    component: _fc6c5666,
    name: "admin-users-teachers-id-training-results"
  }, {
    path: "/admin/lsm/teacher-training/:id?/detail/abc",
    component: _4d9fe4d6,
    name: "admin-lsm-teacher-training-id-detail-abc"
  }, {
    path: "/admin/users/teachers/:id/recharge/history",
    component: _61b610b6,
    name: "admin-users-teachers-id-recharge-history"
  }, {
    path: "/admin/dashboard/salary/:id/create/:date_l?",
    component: _53d52ebe,
    name: "admin-dashboard-salary-id-create-date_l"
  }, {
    path: "/admin/lsm/students/:id/detail/:id_lesson",
    component: _3c413bb0,
    name: "admin-lsm-students-id-detail-id_lesson"
  }, {
    path: "/admin/lsm/teacher-training/:id?/detail/:course_id",
    component: _2599f9a0,
    name: "admin-lsm-teacher-training-id-detail-course_id"
  }, {
    path: "/admin/lsm/teacher-training/:id?/edit/:course_id",
    component: _4b18b878,
    name: "admin-lsm-teacher-training-id-edit-course_id"
  }, {
    path: "/admin/users/teachers/:id/training-results/:results_id?",
    component: _cc727644,
    name: "admin-users-teachers-id-training-results-results_id"
  }, {
    path: "/admin/lsm/students/:id/detail/:id_lesson/edit",
    component: _25c6d9c2,
    name: "admin-lsm-students-id-detail-id_lesson-edit"
  }, {
    path: "/admin/lsm/teacher-training/:id?/detail/:course_id/create",
    component: _72293d21,
    name: "admin-lsm-teacher-training-id-detail-course_id-create"
  }, {
    path: "/admin/lsm/teacher-training/:id?/detail/:course_id/teachers",
    component: _d1452794,
    name: "admin-lsm-teacher-training-id-detail-course_id-teachers"
  }, {
    path: "/admin/lsm/teacher-training/:id?/detail/:course_id/edit/:id_lesson",
    component: _5fd839d0,
    name: "admin-lsm-teacher-training-id-detail-course_id-edit-id_lesson"
  }, {
    path: "/admin/lsm/students/:id/detail/:id_lesson/:id_baihoc",
    component: _01a91f6c,
    name: "admin-lsm-students-id-detail-id_lesson-id_baihoc"
  }, {
    path: "/admin/complain/:id",
    component: _74b5270c,
    name: "admin-complain-id"
  }, {
    path: "/admin/orders/:id",
    component: _66341970,
    name: "admin-orders-id"
  }, {
    path: "/admin/parents/:id",
    component: _05c510d2,
    name: "admin-parents-id"
  }, {
    path: "/admin/review-lesson/:id",
    component: _ea294854,
    name: "admin-review-lesson-id"
  }, {
    path: "/admin/students/:id",
    component: _3f5f250a,
    name: "admin-students-id"
  }, {
    path: "/admin/materials/:id/create",
    component: _353bc72c,
    name: "admin-materials-id-create"
  }, {
    path: "/admin/materials/:id/histories",
    component: _5eccb298,
    name: "admin-materials-id-histories"
  }, {
    path: "/admin/medias/:id/edit",
    component: _bcc25dcc,
    name: "admin-medias-id-edit"
  }, {
    path: "/admin/orders/:id/lesson",
    component: _5862f096,
    name: "admin-orders-id-lesson"
  }, {
    path: "/admin/service/:id/edit",
    component: _31b45211,
    name: "admin-service-id-edit"
  }, {
    path: "/admin/service/:id/lesson-content",
    component: _40fdd16b,
    name: "admin-service-id-lesson-content"
  }, {
    path: "/admin/service/:id/lesson-price",
    component: _5aa5e3fb,
    name: "admin-service-id-lesson-price"
  }, {
    path: "/admin/service/:id/sale",
    component: _1dfabc0e,
    name: "admin-service-id-sale"
  }, {
    path: "/admin/students/:id/detail",
    component: _a2f0440a,
    name: "admin-students-id-detail"
  }, {
    path: "/admin/videos/:id/create",
    component: _3a315834,
    name: "admin-videos-id-create"
  }, {
    path: "/admin/videos/:id/edit",
    component: _08ac0f34,
    name: "admin-videos-id-edit"
  }, {
    path: "/admin/materials/:id/histories/:id_list",
    component: _e5c363a6,
    name: "admin-materials-id-histories-id_list"
  }, {
    path: "/admin/students/:id/detail/:package_id",
    component: _4b636abf,
    name: "admin-students-id-detail-package_id"
  }, {
    path: "/admin/students/:id/detail/:package_id/create",
    component: _3d59c9bc,
    name: "admin-students-id-detail-package_id-create"
  }, {
    path: "/admin/students/:id/detail/:package_id/edit/:lesson_id?",
    component: _5294add5,
    name: "admin-students-id-detail-package_id-edit-lesson_id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
