<template>
	<section class="py-8">
		<div class="flex flex-col gap-4 max-w-md mx-auto shadow-md px-4 py-8">
			<h1>User Register</h1>
			<form @submit.prevent="register" >
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
						placeholder="Enter your password"
					/>
					<button
						@click="authStore.register"
						class="px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded"
					>
						Submit
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
