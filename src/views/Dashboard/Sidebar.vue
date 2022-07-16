<template>
	<div>
		<!-- <img class="dashboard-logo" src="../../../../../public/asset/img/omni-logo.svg" alt=""> -->
		<v-avatar size="65">
      <img
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" style="max-height:100px; border-radius: 100px"
        alt=""
      >
    </v-avatar>
        <br><br>
        <div class="side-bar-heading">
           <h4 class="side-bar-header">Hello! {{getUser.full_name}}</h4>
			  <p class="side-bar-sub">{{getUser.email_address}}</p>
        </div>
      
         <v-btn
        depressed
        style="font-weight:700; font-size:14px"
        dark
        block
        color="#F5A623"
        >{{getUser.account_number}}
        </v-btn>
        <br>
    <nav class="navigation">
  <ul class="mainmenu">
    <li class="mainmenu-li" ><a href="/"><v-icon class="nav-icon">mdi-home</v-icon>Overview</a></li>
       <li class="mainmenu-li"><a href="/transactions"><v-icon class="nav-icon">mdi-bank-transfer</v-icon>Transactions</a></li>
	 <li class="mainmenu-li"><a href="/settings"><v-icon class="nav-icon">mdi-cog</v-icon>Settings</a></li>
    <li @click="logout" class="mainmenu-li"><a href="#"><v-icon class="nav-icon">mdi-power</v-icon>Logout</a></li>
  </ul>
</nav>
        </div>


</template>


<script>
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios'
 import url from '../../url'
export default {
	data: () => ({
		user: {},
		showServices: false,
		showProducts: false,
		item: 0,
		items: [
			{ text: 'Dashboard', icon: 'mdi-home', url: 'overview' },
			{ text: 'Products', icon: 'mdi-shopping-outline', url: 'manage-product' },
			{ text: 'Transactions', icon: 'mdi-post' },
			{ text: 'Notifications', icon: 'mdi-bell' },
			{ text: 'Change Password', icon: 'mdi-settings' },
			{ text: 'Logout', icon: 'mdi-power' }
		]
	}),
	computed: {
      ...mapGetters(['getUser'])

    },
	created() {
		$(function() {
			$('.mainmenu a')
				.filter(function() {
					return this.href == location.href;
				})
				.parent()
				.addClass('activeNav')
				.siblings()
				.removeClass('activeNav');
			$('.mainmenu a').click(function() {
				$(this)
					.parent()
					.addClass('activeNav')
					.siblings()
					.removeClass('activeNav');
			});
		});
		if (this.omniUser && this.omniUser.user) return this.fetchUser();
	},

	methods: {

         async logout(){
			//            const token = localStorage.getItem('token');
			//   const operation = await axios.post(`${url}/logout`,{ headers: { 'Authorization': `Bearer ${token}` } })
		  localStorage.removeItem('token')
		  location.reload()
		  },
		toSelectProductPage() {
			window.location.assign(`select-product-type`);
		},
		toOverview() {
			window.location.assign(`overview`);
		},

		logoutUser() {
			axios(this.Url + '/user/logout/')
				.then(response => {
					if (!response.data == 200) {
						return (this.errorMessage = 'Could not logout');
					}
					localStorage.removeItem('token');
					window.location.href = this.Url;
				})
				.catch(error => {});
		}
	},
};
</script>

<style scoped>
.activeNav {
	background-color: white;
	border-radius: 20px;
	box-shadow: 0 6px 16px -7px rgba(0, 0, 0, 0.11);
}

.activeNav .mainmenu-li a {
	color: rgb(51, 51, 51);
}

.activeNav .mainmenu-li a .nav-icon {
	color: #bd161c;
}

.mainmenu {
	list-style-type: none;
	margin: 0;
	padding: 0;
}
.mainmenu-li {
	margin-bottom: 3px;
	padding: 10px;
}
.mainmenu-li a {
	letter-spacing: 1px;
	color: #adb0b4;
	font-weight: 500;
	font-size: 15px;
	text-decoration: none;
}

.mainmenu-li a:hover {
	color: rgb(75, 70, 70);
}

.mainmenu-li a:hover .nav-icon {
	color: rgb(66, 62, 62);
}
.nav-icon {
	color: #adb0b4;
	font-size: 19px;
	margin-top: -3px;
	margin-right: 7px;
}

.submenu {
	margin-top: 10px;
	list-style-type: none;
}

.submenu-li {
	margin-bottom: 5px;
}

.submenu-li a {
	letter-spacing: 1px;
	color: #adb0b4;
	font-size: 12px;
	text-decoration: none;
}

.submenu-li a:hover {
	color: rgb(51, 51, 51);
}

.nav-arrow {
	color: #adb0b4;
	font-size: 15px;
	margin-top: -3px;
	margin-right: 7px;
}
</style>
