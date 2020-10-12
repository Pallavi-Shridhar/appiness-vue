<template>
    <div class="limiter">
		<div class="container-table100">
			<div class="wrap-table100">
				<div class="table100">
					<table>
						<tbody>
              <tr>
                <th class="column1">Order Id</th>
								<td class="column2">{{orderDetails.id}}</td>
              </tr>
              <tr>
                <th class="column1">Customer Name</th>
								<td class="column2">{{orderDetails.name}}</td>
              </tr>
              <tr>
                <th class="column1">Items</th>
                <td class="column1">
                  <tr><strong>Item Id</strong></tr>  
                  <tr><strong>Item Name</strong></tr> 
                  <tr><strong>Item Price</strong></tr>
                </td>
				<td class="column3" v-for="item in orderDetails.items" :key="item.item_id">
                  <tr>{{item.item_id}}</tr>  
                  <tr>{{item.item_name}}</tr> 
                  <tr>{{item.item_price}}</tr>
                </td>
              </tr>
              <tr>
                <th class="column1">Total Price</th>
				<td class="column2">{{getTotal()}}</td>
              </tr>
              <tr>
                <th class="column1">Delivery Address</th>
				<td class="column2">{{orderDetails.address}}</td>
              </tr>
              <tr>
                <th class="column1">Status</th>
				<td class="column2">{{orderDetails.status}}</td>
              </tr>					
				</tbody>
				</table>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

export default{
    data(){
      return {
        orderId:"",
        orders: [],
        orderDetails: "",
        items: []
      };
  },
  created(){
    this.orders = JSON.parse(localStorage.getItem('orders'));
    //Fetching the corresponding record using Order Id
    this.orders.forEach(order => {
      if(order.id == this.$route.params.id){
        this.orderDetails = order;
      }
    });
  },
  methods: {
    //Calculating the total amount
    getTotal(){
        var total = 0 ;
        this.items = this.orderDetails.items;
        this.items.forEach(item => {
        total = total + parseFloat(item.item_price);
        });
        return total;
    }
  }
}
</script>