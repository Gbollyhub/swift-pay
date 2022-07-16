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

         <div class="justify-center">
 <img src="../../../assets/logo-3.png" alt="" class="brand-logo2">
                        <div class="Form-heading">
                            <h1 class="header-text">Welcome back</h1>
                            <p class="sub-text">Enter your credentials to login.</p>
                        </div>
                        <br>
                         <v-alert dismissible v-if="errorAlert" type="error">{{error}}</v-alert>
                        <form  @submit.prevent = "login">
                         <v-row justify="center">
                                <v-col cols="12">
                                    <v-text-field required v-model="user.email_address" color="#F5A623" label="Email Address" single-line></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                     <v-text-field required v-model="user.password" color="#F5A623" type="password" label="Password" single-line></v-text-field>
                                </v-col>
                                </v-row>
                                
                       <br>
                        <router-link to="/create-account"> <p style="font-size:14px;color:#969696">Don't have an account? Create One!</p></router-link>
                       <br>
                       <v-card-actions>
                           <p></p>
                           <v-spacer></v-spacer> 
                           <v-btn
                           type="submit"
                                style="text-transform:none;font-weight:700" depressed
                                class="large-block-btn-red" dark large 
                                color="#1c1c1c">Login<v-icon right>mdi-arrow-right-bold-circle</v-icon></v-btn>
                       </v-card-actions>
                        </form> 
         </div>                           
                    </div>
                    
                </div>
            </section>
</div>
</template>

<script src ="./Login.js"></script>

<style src = "../../sass/user/app.scss" lang="scss"></style>

<style scoped>
.app {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.3;
     margin: 0px;
    padding: 0px;
        background: white;
}

a {
    color: #3d3d3d;
}
</style>
