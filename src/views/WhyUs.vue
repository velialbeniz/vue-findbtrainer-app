<template>
	<div
		class="max-w-7xl mx-auto h-full  rounded-md shadow-lg mt-4 bg-gradient-to-r from-slate-50 to-pink-50 px-4 py-8"
	>
		<h1 class="text-center font-bold">
			Neden
			<span class="line-through decoration-8 decoration-red-500/50"
				>FBT?</span
			>
		</h1>
		<div class="flex flex-col gap-4 md:flex-row">
			<div class="w-full md:w-[50%]">
				<h2 class="text-4xl font-light">
					Hedeflerinize ulaşmanın en hızlı ve eğlenceli yolu:
				</h2>
				<h3 class="mt-4">
					Antrenör Uygulaması'yla şimdi başlayın ve hayalinizdeki
					formu yakalayın!
				</h3>
			</div>
			<div class="relative">
				<img
					class="rounded-md drop-shadow"
					src="../assets/img/fitnesspeople.avif"
					alt="sports"
				/>
				<div
					class="flex items-center gap-4 absolute top-12 -left-5 bg-blue-50 px-4 py-2 rounded drop-shadow-md"
				>
					<img
						src="https://docs.material-tailwind.com/img/face-2.jpg"
						alt="avatar"
						class="inline-block relative object-cover object-center !rounded-full w-12 h-12"
					/>
					<div>
						<h6
							class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit"
						>
							Veli Albeniz
						</h6>
						<p
							class="block font-sans text-xs antialiased font-normal leading-normal text-gray-700"
						>
							Strength
						</p>
					</div>
				</div>
				<div
					class="flex items-center gap-4 absolute -top-5 -right-5 bg-red-200 px-4 py-2 rounded drop-shadow-md"
				>
					<img
						src="https://docs.material-tailwind.com/img/face-4.jpg"
						alt="avatar"
						class="inline-block relative object-cover object-center !rounded-full w-12 h-12"
					/>
					<div>
						<h6
							class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit"
						>
							Yasemin Albeniz
						</h6>
						<p
							class="block font-sans text-xs antialiased font-normal leading-normal text-gray-700"
						>
							Stretching
						</p>
					</div>
				</div>
			</div>
		</div>
		<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-10">
			<AboutUsCard
				title="Uzmanlık ve Çeşitlilik"
				subtitle="Antrenörlerimiz, farklı alanlarda uzmanlaşmıştır ve geniş bir yelpazede hizmet sunmaktadır. Spor, fitness, kişisel gelişim, beslenme ve daha fazlası konularında uzman antrenörlerimiz arasından seçim yapabilirsiniz."
			/>
			<AboutUsCard
				title="Bireysel İhtiyaçlara Özel Yaklaşım"
				subtitle="Her bireyin hedefleri ve ihtiyaçları farklıdır. Uygulamamızda, size en uygun antrenörü bulmak için filtreleme seçenekleri bulunmaktadır. Böylece, sizin için en uygun antrenörü seçerek hedeflerinize daha hızlı ve etkili bir şekilde ulaşabilirsiniz."
			/>
			<AboutUsCard
				title="Motivasyon ve Destek"
				subtitle="Uygulamamız, sadece fiziksel olarak değil, aynı zamanda zihinsel olarak da sizi desteklemeyi amaçlar. Antrenörlerimiz, sizi motive etmek, hedeflerinize ulaşmanıza yardımcı olmak ve sizi en iyi versiyonunuza ulaştırmak için buradadır."
			/>
			<AboutUsCard
				title="Kişiselleştirilmiş İletişim"
				subtitle="Antrenörlerimizle doğrudan iletişime geçebilir ve ihtiyaçlarınıza uygun bir program oluşturabilirsiniz. Mesajlaşma özelliği sayesinde, sorularınızı sormak, ilerlemenizi paylaşmak ve gerektiğinde destek almak için antrenörünüzle kolayca iletişime geçebilirsiniz."
			/>
		</section>
	</div>
</template>

<script setup>
	import AboutUsCard from "@/components/AboutUsCard.vue";
</script>

<style lang="scss" scoped></style>
