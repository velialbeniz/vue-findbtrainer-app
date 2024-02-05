<template>
	<NavBar/>
	<main class="mx-auto max-w-7xl sm:px-6 lg:px-8 px-4 sm:py-12 py:6">
		<RouterView v-slot="{ Component }">
			<transition name="route" mode="out-in">
                <component :is="Component" />
            </transition>
		</RouterView>
	</main>
    <Footer />
</template>

<script setup>
	import NavBar from "./components/NavBar.vue";
    import Footer from "./components/Footer.vue";
	import { onMounted } from "vue";

	import { getAuth, onAuthStateChanged } from "firebase/auth";
	import { useRouter } from "vue-router";
    import { useAuthStore } from './stores/auth.js'

	const router = useRouter();

    const authStore = useAuthStore()

	let auth;

	onMounted(() => {
		auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
                authStore.isLoggedIn = true
			} else {
                authStore.isLoggedIn = false
			}
		});
	});

</script>

<style scoped>
.route-enter-active,
	.route-leave-active {
		transition: opacity 0.3s ease;
	}

	.route-enter-from,
	.route-leave-to {
		opacity: 0;
	}
</style>
