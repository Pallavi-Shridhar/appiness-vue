<template>
	<div class="limiter">
		<div class="container-table100">
			<div class="wrap-table100">
				<div class="table100">
					<table>
						<thead>
							<tr>
								<th class="column1">Id</th>
								<th class="column2">Customer Name</th>
								<th class="column3">No. of Items</th>
								<th class="column4">Total Amount</th>
								<th class="column5"> Status</th>
							</tr>
						</thead>
                        <tbody>
							<tr v-for="order in orders" :key="order.id">
							<td class="column1">
                                <router-link :to="`/details/${order.id}`">
                                {{order.id}}
                                </router-link>
                            </td>
							<td class="column2">
                                <router-link :to="`/details/${order.id}`">
                                {{order.name}}
                                </router-link>
                            </td>
							<td class="column3">
                                <router-link :to="`/details/${order.id}`">
                                {{order.items.length}}
                                </router-link>
                            </td>
							<td class="column4">
                                <router-link :to="`/details/${order.id}`">
                                {{getTotal(order.items)}}
                                </router-link>
                            </td>
							<td class="column5">
                                <router-link :to="`/details/${order.id}`">
                                {{order.status}}
                                </router-link>
                            </td>
							</tr>						
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>

</template>

<script>

export default {
  name: 'Orders',
  data(){
      return {
        orders: []
      };
  },
  created(){
      this.orders = JSON.parse(localStorage.getItem('orders'));
  },
  methods: {
    //Calculating the total amount of the order
    getTotal(items){
        var total = 0;
        items.forEach(item => {
        total = total + parseFloat(item.item_price);
        });
        return total.toString();
    }
  }
}
</script>