const income = () => import("@/views/main/record/income/income.vue")
export default {
  path: "/main/record/income",
  name: "income",
  component: income,
  meta: { title: "营业收入和首款统计" },
  children: []
}
