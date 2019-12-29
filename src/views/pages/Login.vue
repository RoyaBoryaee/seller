<template>
    <div class="app flex-row align-items-center">
      <div class="container">
        <b-row class="justify-content-center">
          <b-col md="8">
            <b-card-group>
              <b-card no-body class="p-4">
                <b-card-body>
                  <b-form @click.prevent="loginSubmit">
                    <h1>Login</h1>
                    <p class="text-muted">Sign In to your account</p>
                    <b-input-group class="mb-3">
                      <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                      <b-form-input type="text" class="form-control" placeholder="Username" autocomplete="username email" v-model="Username" :class="{ 'is-invalid': submitted && !Username }"/>
                      <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
                    </b-input-group>
                    <b-input-group class="mb-4">
                      <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                      <b-form-input type="password" class="form-control" placeholder="Password" autocomplete="current-password" v-model="Password"/>
                    </b-input-group>
                    <b-row>
                      <b-col cols="6">
                        <b-button variant="primary" class="px-4">Login</b-button>

                      </b-col>
                      <b-col cols="6" class="text-right">
                        <b-button variant="link" class="px-0">Forgot password?</b-button>
                      </b-col>
                    </b-row>
                  </b-form>
                </b-card-body>
              </b-card>
              <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
                <b-card-body class="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <b-button to="/pages/register" variant="primary" class="active mt-3">Register Now!</b-button>
                  </div>
                </b-card-body>
              </b-card>
            </b-card-group>
          </b-col>
        </b-row>
      </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        name: 'Login',
        data(){
            return {
                Username : "",
                Password : "",
                submitted: false
            }
        },
        computed: {
            ...mapState([
                'loggingIn',
                'loginError',
                'accessToken'
            ])
        },
        methods: {
            ...mapActions([
                'doLogin'
            ]),
            loginSubmit() {
                this.submitted = true;
                this.doLogin({
                    username: this.Username,
                    password: this.Password
                });
            }
        }


    }
</script>
