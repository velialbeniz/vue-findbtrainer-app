<template>
	<header class="bg-white">
		<nav
			class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			aria-label="Global"
		>
			<div class="flex lg:flex-1">
				<router-link
					to="/"
					class="-m-1.5 p-1.5 text-2xl font-bold"
				>
					<span class="sr-only">Trainer</span>
					FBT
				</router-link>
			</div>
			<div class="flex lg:hidden">
				<button
					@click="isOpen = !isOpen"
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>
			<div class="hidden lg:flex lg:gap-x-12">
				<router-link
					to="/trainer"
					class="text-sm font-semibold leading-6 text-gray-900"
					>Trainer Bul</router-link
				>
				<router-link
					to="/requests"
					class="text-sm font-semibold leading-6 text-gray-900"
					>Mesajlar</router-link
				>
				<router-link
					to="/whyus"
					class="text-sm font-semibold leading-6 text-gray-900"
					>Neden FBT?</router-link
				>
			</div>
			<div class="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center gap-x-2">
				<router-link
					to="/registerastrainer"
					class="register-trainer text-sm font-semibold leading-6 text-gray-50 border rounded px-4 py-2 bg-orangedim me-5"
					>Trainer Kaydı</router-link
				>
				<router-link
					v-if="!authStore.isLoggedIn"
					to="/login"
					class="text-sm font-semibold leading-6 text-gray-900"
					>Giriş</router-link
				>
				<button
					@click="authStore.signOut"
					v-if="authStore.isLoggedIn"
					class="text-sm font-semibold leading-6 text-gray-900"
				>
					Çıkış
				</button>
				<router-link
					to="/register"
					class="text-sm font-semibold leading-6 text-gray-900"
					>Kayıt
					<span aria-hidden="true">&rarr;</span></router-link
				>
			</div>
		</nav>
		<!-- Mobile menu, show/hide based on menu open state. -->
		<div
			v-if="isOpen"
			class="lg:hidden"
			role="dialog"
			aria-modal="true"
		>
			<!-- Background backdrop, show/hide based on slide-over state. -->
			<div
				@click="isOpen = false"
				class="fixed inset-0 z-10 bg-black/20"
			></div>
			<div
				class="fixed inset-y-0 transition-all duration-500 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
				:class="isOpen ? 'right-0' : '-right-[384px]'"
			>
				<div class="flex items-center justify-between">
					<router-link
						to="/"
						class="-m-1.5 p-1.5 font-bold text-2xl"
					>
						<span class="sr-only">My Trainer</span>
						FBT
					</router-link>
					<button
						@click="isOpen = false"
						type="button"
						class="-m-2.5 rounded-md p-2.5 text-gray-700"
					>
						<span class="sr-only">Close menu</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6">
						<div class="space-y-2 py-6 z-50">
							<router-link
								@click="sideNavHandler"
								to="/trainer"
								class="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Trainer Bul</router-link
							>
							<router-link
								@click="sideNavHandler"
								to="/requests"
								class="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Mesajlar</router-link
							>
							<router-link
								@click="sideNavHandler"
								to="/whyus"
								class="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Neden FBT?</router-link
							>
						</div>
						<div class="py-2">
							<router-link
                                @click="sideNavHandler"
								to="/registerastrainer"
								class="-mx-3 block px-3 py-2.5 text-base font-semibold leading-7 text-gray-50 rounded hover:bg-gray-50 bg-orangedim"
								>Trainer Kaydı</router-link
							>
						</div>
						<div class="py-2">
							<router-link
								v-if="!authStore.isLoggedIn"
                                @click="sideNavHandler"
								to="/login"
								class="-mx-3 block px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Giriş</router-link
							>
						</div>
						<div class="py-2">
							<button
                                @click="authStore.signOut"
					            v-if="authStore.isLoggedIn"
								class="-mx-3 block px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
							>
								Çıkış
							</button>
						</div>
						<div
							v-if="!useAuthStore.isLoggedIn"
							class="py-6"
						>
							<router-link
                                @click="sideNavHandler"
								to="/register"
								class="-mx-3 block px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Kayıt</router-link
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
	import { ref } from "vue";

	import { useAuthStore } from "@/stores/auth.js";

	const authStore = useAuthStore();

	const isOpen = ref(false);

	function sideNavHandler() {
		isOpen.value = !isOpen.value;
	}

</script>

<style scoped>
	a.router-link-active {
		border-bottom: 2px solid black;
	}

    a.register-trainer.router-link-active {
        border-bottom: none;
    }
</style>
