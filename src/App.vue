<template>
	<NavBar/>
	<main class="mx-auto max-w-7xl sm:px-6 lg:px-8 px-4">
		<RouterView v-slot="{ Component }">
			<component :is="Component" />
		</RouterView>
	</main>
</template>

<script setup>
	import NavBar from "./components/NavBar.vue";
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

<style scoped></style>
