<script setup>
const orders = [
  {
    name: "دستبند جتاش",
    price: 49000000,
    date: "۱۱/۲/۱۴۰۳",
    sendDate: "۱۲/۲/۱۴۰۳",
    code: 123456789524,
  },
  {
    name: "دستبند جتاش",
    price: 49000000,
    date: "۱۱/۲/۱۴۰۳",
    sendDate: "۱۲/۲/۱۴۰۳",
    code: 123456789524,
  },
];
const numberFormat = (money) => {
  return money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1،");
};
</script>
<template>
  <div class="dashboard-orders">
    <h1 class="dashboard-orders_title">لیست سفارشات</h1>
    <div class="dashboard-orders_wrapper">
      <div class="dashboard-orders_orders">
        <h2 class="dashboard-orders_orders-title mb-6">سفارشات فعال</h2>
        <div class="dashboard-orders_orders-table">
          <v-table>
            <thead>
              <tr>
                <th class="text-right">محصول</th>
                <th class="text-right">مجموع قیمت</th>
                <th class="text-right">تاریخ ثبت</th>
                <th class="text-right">تاریخ ارسال</th>
                <th class="text-right">کد رهگیری</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in orders" :key="item.name">
                <td>
                  <div
                    class="d-flex align-center dashboard-orders_product-thumb pa-3 gap-2"
                  >
                    <img src="@/assets/images/product-1.png" class="" alt="" />
                    <div class="d-flex flex-column">
                      {{ item.name }}
                      <div class="letter-space">
                        {{ numberFormat(item.price) }} تومان
                      </div>
                    </div>
                  </div>
                </td>
                <td class="letter-space">
                  {{ numberFormat(item.price) }} تومان
                </td>
                <td class="letter-space">{{ item.date }}</td>
                <td class="letter-space">{{ item.sendDate }}</td>
                <td class="letter-space">{{ item.code }}</td>
              </tr>
            </tbody>
          </v-table>
        </div>
        <!-- <div class="dashboard-orders_orders-table-res">
            <div class="dashboard-orders_orders-table-res-item" v-for="(item, i) in orders" :key="i">
                {{ item.name }}a
            </div>
        </div> -->
      </div>
      <div class="dashboard-orders_orders mt-12">
        <h2 class="dashboard-orders_orders-title mb-6">سفارشات قبلی</h2>
        <div class="no-orders">تاریخچه سفارش وجود ندارد...</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
