const bill = () => import("@/views/main/bill/detailed/bill.vue")
export default {
  path: "/main/bill/detailed",
  name: "bill",
  component: bill,
  meta: { title: "发票明细" },
  children: []
}
