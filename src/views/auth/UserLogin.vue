<template>
	<section class="py-8">
		<div class="flex flex-col gap-4 max-w-md mx-auto shadow-md px-4 py-8">
			<h1>Kullanıcı Girişi</h1>
			<form @submit.prevent="authStore.signIn">
				<div class="flex flex-col gap-4">
					<input
						v-model="authStore.email"
						type="text"
						class="px-6 py-4 border rounded"
						placeholder="Email"
					/>
					<input
						v-model="authStore.password"
						type="password"
						class="px-6 py-4 border rounded"
						placeholder="Şifre"
					/>
					<!-- Error message -->
					<div
						v-if="authStore.errorMessage"
						class="flex rounded-md shadow-lg overflow-hidden"
					>
						<div
							class="flex items-center justify-center w-12 bg-red-500"
						>
							<svg
								class="w-6 h-6 text-white fill-current"
								viewBox="0 0 40 40"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"
								/>
							</svg>
						</div>
						<div class="px-4 py-2 -mx-3">
							<div class="mx-3">
								<span class="font-semibold text-red-500"
									>Hata</span
								>
								<p class="text-sm text-gray-600">
									{{ authStore.errorMessage }}
								</p>
							</div>
						</div>
					</div>
					<button
						@click="authStore.signIn"
						class="px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded"
					>
						Giriş
					</button>
                    <button type="button" @click="signInWithGoogle">
						<span class="underline underline-offset-4">Google</span>
                        ile giriş yap.
					</button>
				</div>
			</form>
		</div>
	</section>
</template>

<script setup>
    import { useAuthStore } from "@/stores/auth";

	import { useRouter } from "vue-router";

    const router = useRouter()

    const authStore = useAuthStore()

    const signInWithGoogle = async () => {
        await authStore.loginWithGoogle()
        router.push('/trainer')
    }
</script>

<style scoped></style>
