import { defineStore } from "pinia";
import {
	getAuth,
	signOut,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import router from "../router/index";

export const useAuthStore = defineStore("authStore", {
	state: () => ({
		email: "",
		password: "",
		isLoggedIn: false,
		errorMessage: "",
	}),
	getters: {},
	actions: {
		async register() {
			const auth = getAuth();
			await createUserWithEmailAndPassword(auth, this.email, this.password)
				.then((userCredential) => {
                    const user = userCredential.currentUser
					console.log(user, "succesfully registered");
                    this.isLoggedIn = true
					router.replace("/");
				})
				.catch((error) => {
					console.log("error", error.code);
					this.errorMessage = error.message;
					alert(error.message);
				});
		},

		signIn() {
			const auth = getAuth();
			signInWithEmailAndPassword(auth, this.email, this.password)
				.then((data) => {
					const user = data.user;
					this.isLoggedIn = true;
					router.push("/");
				})
				.catch((error) => {
					console.log(error.code);
					switch (error.code) {
						case "auth/invalid-email":
							this.errorMessage = "Invalid email";
							break;
						case "auth/user-not-found":
							this.errorMessage =
								"No account was found with that email";
							break;
						case "auth/wrong-password":
							this.errorMessage = "Incorrect password";
							break;
						default:
							this.errorMessage =
								"Email or password was incorrect";
							break;
					}
				});
		},

		signOut() {
			const auth = getAuth();
			signOut(auth)
				.then(() => {
					this.isLoggedIn = false;
					alert("User logged out!");
					router.push("/");
				})
				.catch((error) => {
					const errorCode = error.code;
					this.errorMessage = error.message;
					alert(this.errorMessage);
				});
		},
	},
});
