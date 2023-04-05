const statistics = () => import("@/views/main/bill/statistics/statistics.vue")
export default {
  path: "/main/bill/statistics",
  name: "statistics",
  component: statistics,
  meta: { title: "发票统计" },
  children: []
}
