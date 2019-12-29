//example for modal with component create user(when click button create user's modal will open!
<template>
  <div id="Settings">
    <div class="wrapper">
      <div class="animated fadeIn">
        <b-row>
          <b-col cols="12">
            <b-card>
              <div slot="header"><i class='fa fa-align-justify'></i> Bootstrap Modals</div>
              <b-button type="button" variant="info" @click="lmodal = true" class="mr-1">click me!</b-button>
            </b-card>
          </b-col><!--/.col-->
        </b-row><!--/.row-->
      </div>
      <!-- Modal Component -->
      <b-modal title="Modal title" v-model="lmodal" @ok="lmodal = false">
        <Create_User></Create_User>
      </b-modal>
    </div>
  </div>
</template>

<script>
    import Create_User from '../users/Create_User';
    export default {
        components: {
            Create_User
        },
        name: 'Settings',
        data () {
            return {
                lmodal : false
            }
        }
    }
</script>
