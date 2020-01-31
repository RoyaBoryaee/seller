<template>
  <div class="">
    <b-card >
      <b-card-header>
        فروشندگان
      </b-card-header>
      <b-card-body>
        <form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name">
    </div>
  </div>
</form>
      </b-card-body>
    </b-card>
  </div>
</template>
<script>
import { mapState } from "vuex";
    export default {

        name: 'Devices',
        computed:{
             ...mapState({
      sellers: "sellers"
    })
        },
        created(){
          this.$store.dispatch("getSalesmen")
        }
    }
</script>
