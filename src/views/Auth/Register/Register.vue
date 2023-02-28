<template>
  <div>
    <section class="section-login">
      <div class="full-width-row">
        <div class="col-1-of-2-picture picture-col">
          <banner-component></banner-component>
        </div>
        <div class="col-1-of-2-form form-col">
          <v-progress-linear
            :active="loading"
            :indeterminate="loading"
            fixed
            top
            color="red"
          ></v-progress-linear>

          <div v-if="register" class="justify-center">
            <img src="../../../assets/logo-3.png" alt="" class="brand-logo2" />
            <div class="Form-heading">
              <h1 class="header-text">Register for an account</h1>
              <p class="sub-text">
                Enter your credentials to create an account.
              </p>
            </div>
            <br />
            <v-alert dismissible v-if="errorAlert" type="error">{{
              error
            }}</v-alert>
            <form @submit.prevent="Login">
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    v-model="full_name"
                    color="#F5A623"
                    placeholder="Full Name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    v-model="email_address"
                    color="#F5A623"
                    placeholder="Email Address"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    v-model="phone_number"
                    color="#F5A623"
                    placeholder="Phone Number"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    v-model="bvn"
                    color="#F5A623"
                    placeholder="BVN"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    v-model="password"
                    type="password"
                    color="#F5A623"
                    placeholder="Password"
                  ></v-text-field>
                </v-col>
              </v-row>

              <br />
              <router-link to="/login">
                <p style="font-size: 14px; color: #969696">
                  Already have an account? Login
                </p></router-link
              >
              <br />
              <v-card-actions>
                <p></p>
                <v-spacer></v-spacer>
                <v-btn
                  @click="Register"
                  style="text-transform: none; font-weight: 700"
                  depressed
                  class="large-block-btn-red"
                  dark
                  large
                  color="#1c1c1c"
                  >Create Account<v-icon right
                    >mdi-arrow-right-bold-circle</v-icon
                  ></v-btn
                >
              </v-card-actions>
            </form>
          </div>

          <div v-else class="justify-center">
            <img src="../../../assets/logo-3.png" alt="" class="brand-logo2" />
            <div
              class="Form-heading"
              style="text-align: center; padding-top: 15%"
            >
              <v-icon class="success-icon">mdi-check-circle</v-icon>
              <h1 class="header-text">Account Created</h1>
              <p class="sub-text">{{ email_address }}</p>
              <br />
              <br /><br />
              <router-link to="/login">
                <p style="font-size: 14px; color: #969696">
                  Login into your Account
                </p></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script src="./Register.js"></script>

<style src="../../sass/user/app.scss" lang="scss"></style>

<style scoped>
.app {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  line-height: 1.3;
  margin: 0px;
  padding: 0px;
  background: white;
}
</style>
