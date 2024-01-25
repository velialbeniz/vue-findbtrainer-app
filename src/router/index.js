import { createRouter, createWebHistory } from "vue-router";
import { onAuthStateChanged, getAuth } from "firebase/auth";

import TrainerList from "@/views/trainer/TrainerList.vue";
import TrainerDetail from "@/views/trainer/TrainerDetail.vue";
import TrainerRegisteration from "@/views/trainer/TrainerRegisteration.vue";
import ContactTrainer from "@/views/requests/ContactTrainer.vue";
import RequestsReceived from "@/views/requests/RequestsReceived.vue";
import UserRegister from "@/views/auth/UserRegister.vue";
import UserLogin from "@/views/auth/UserLogin.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: "/", redirect: "/trainer" },
		{ path: "/trainer", component: TrainerList },
		{
			path: "/trainer/:id",
			name: "trainerdetail",
			props: true,
			component: TrainerDetail,
			children: [
				{
					path: "contact",
					name: "trainercontact",
					component: ContactTrainer,
				},
			],
		},
		{ path: "/registerastrainer", component: TrainerRegisteration },
		{
			path: "/requests",
			component: RequestsReceived,
			meta: { requiresAuth: true },
		},
		{ path: "/register", component: UserRegister },
		{ path: "/login", component: UserLogin },
		{ path: "/:notFound(.*)", component: NotFound },
	],
});

const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const removeListener = onAuthStateChanged(
			getAuth(),
			(user) => {
				removeListener();
				resolve(user);
			},
			reject,
		);
	});
};

router.beforeEach( async (to, _, next) => {
    if (to.matched.some((rec) => rec.meta.requiresAuth)) {
        if(await getCurrentUser()) {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
})

router.beforeEach(async (to, _, next) => {
    const user = await getCurrentUser()

    if(to.meta.requiresAuth && !user) {
        next('/login')
    } else if (to.path === '/register' && user) {
        next('/')
    } else {
        next()
    }
})

export default router;
