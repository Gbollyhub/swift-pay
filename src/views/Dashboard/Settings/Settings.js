import axios from 'axios'
import {mapActions, mapGetters} from 'vuex';
import url from '../../../url'
import SideNav from '.././Sidebar';
import TopNav from '.././Topbar';

export default {
	components: {
		'app-sidenav': SideNav,
		'app-topnav': TopNav,
	},
	data(){
		return{
            success: '',
            successAlert: false,
            error: '',
            errorAlert: false,
			show1: false,
			show2: false,
			show3: false,
			show4: false,
			show5: false,
			show6: false,
			myData:{
				oldPassword: '',
				newPassword: '',
				confirmPassword: '',
			},
			operationStatus: '',
			operationMessage: '',
			oldPin: '',
			newPin: '',
			confirmPin: '',
			status: false,

			password: 'Password',
			rules: [v => v.length = 4 || 'Pin needs to be 4'],
		}
    },

    created(){
        this.$store.dispatch('getProfile');

        this.$store.dispatch('getTransaction');
        
        
    },
	methods: {
		async changePin() {
            const token = localStorage.getItem('token');
            const resData = {
                "_id": this.getUser._id,
              "account_pin": this.newPin
            }
            if(this.oldPin == this.getUser.account_pin){
                  try {
                await axios.patch(`${url}/update-account`, resData,{ headers: { 'Authorization': `Bearer ${token}` } }, { timeout: 10 })
            this.successAlert = true;
            this.success = 'Pin changed successfully';
			this.newPin = this.oldPin = this.confirmPin = "";
            } catch (error) {
                console.log(error)
                this.errorAlert = true;
                this.error = error.message;
            }
            }
            else{
                this.errorAlert = true;
                this.error = 'Invalid Old Pin';
            }
          
            
		},

		async changePassword () {
            const token = localStorage.getItem('token');
            const resData = {
                "_id": this.getUser._id,
              "password": this.myData.newPassword
            }
            try {
                await axios.patch(`${url}/update-account`, resData,{ headers: { 'Authorization': `Bearer ${token}` } }, { timeout: 10 })
            this.successAlert = true;
            this.success = 'Password changed successfully';
			this.myData.oldPassword = this.myData.newPassword = this.myData.confirmPassword = "";
            } catch (error) {
                console.log(error)
                this.errorAlert = true;
                this.error = error.message;
            }
		},
	},

	computed: {
        ...mapGetters(['getUser']),
		allowPinChange() {
			if(this.newPin == this.confirmPin && this.newPin != this.oldPin && this.oldPin != '' && this.newPin != '' && this.confirmPin != ''){
				return false ;
			} 
			else{
				return true;
			}
		},

		allowPasswordChange() {
			if(this.myData.newPassword == this.myData.confirmPassword && this.myData.newPassword != this.myData.oldPassword && this.myData.oldPassword != '' && this.myData.newPassword != '' && this.myData.confirmPassword != ''){
				return false ;
			} 
			else{
				return true;
			}
		},

		Url: function () {
			return window.baseURL;
		},
	},
}
