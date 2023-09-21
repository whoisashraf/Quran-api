<!-- Hero -->
<div class="bg-slate-900">
	<div class="bg-gradient-to-b from-violet-600/[.15] via-transparent">
		<div class="mx-auto max-w-[1200px] space-y-8 px-4 py-24 sm:px-6 lg:px-8 min-h-screen">
			<!-- Title -->
			<div class="mx-auto max-w-3xl text-center">
				<h1 class="block text-4xl font-medium text-gray-200 sm:text-5xl md:text-6xl lg:text-7xl">
					Al-Quran Api
				</h1>
			</div>
			<!-- End Title -->

			<div class="mx-auto max-w-3xl text-center">
				<p class="text-xl text-gray-300 mb-3">The simplest documentation you'll ever read</p>
				<p class="text-lg text-gray-400">
					To get started, you don't need an API key, authentication, or any complicated setup. Just
					make simple HTTP requests to our endpoints, and you'll get the data you need.
				</p>
				<p class="text-lg text-gray-400">
					*All api endpoints start with the base url <span class="text-gray-300 underline"
						>https://domain.page.dev</span
					>
				</p>
				<p class="text-2xl text-gray-200 mt-3">Endpoints</p>
				<p class="text-xl text-gray-400 -mb-5">Get the Whole Quran</p>
			</div>

			<!-- Buttons -->
			<div class="w-fit mx-auto flex-row md:flex md:gap-3">
				<div class="text-center">
					<a
						class="mb-2 md:mb-0 inline-flex items-center justify-center gap-x-1 rounded-full border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 px-3 py-3 text-center text-sm font-medium text-white shadow-lg shadow-transparent hover:shadow-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
						href="/api/quran"
					>
						<span>/api/quran</span>
						<svg class="h-2.5 w-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path
								d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
							/>
						</svg>
					</a>
				</div>
				
			</div>
			<!-- End Buttons -->

			<div class="mx-auto max-w-3xl text-center">
				<p class="text-xl text-gray-400">Get Quran by surah</p>
				<p class="text-lg text-gray-400 -mb-5">
					*surah_number has a range of <span class="text-gray-300">1-114</span>
				</p>
			</div>

			<!-- Buttons -->
			<div class="w-fit mx-auto flex-row md:flex md:gap-3">
				<div class="text-center">
					<a
						class="inline-flex items-center justify-center gap-x-1 rounded-full border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 px-3 py-3 text-center text-sm font-medium text-white shadow-lg shadow-transparent hover:shadow-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
						href="/api/quran/114"
					>
						<span>/api/quran/[surah_number]</span>
						<svg class="h-2.5 w-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path
								d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
							/>
						</svg>
					</a>
				</div>
			</div>

      <div class="mx-auto max-w-3xl text-center">
				<p class="text-xl text-gray-400 -mb-5">Get Quran by surah</p>
			</div>

			<!-- Buttons -->
			<div class="w-fit mx-auto flex-row md:flex md:gap-3">
				<div class="text-center">
					<a
						class="inline-flex items-center justify-center gap-x-1 rounded-full border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 px-3 py-3 text-center text-sm font-medium text-white shadow-lg shadow-transparent hover:shadow-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
						href="/api/quran/114/1"
					>
						<span>/api/quran/[surah_number]/[ayah_number]</span>
						<svg class="h-2.5 w-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path
								d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
							/>
						</svg>
					</a>
				</div>
			</div>
			<!-- End Buttons -->
			<div class="mx-auto max-w-3xl text-center">
				<p class="text-2xl text-gray-200 mt-3">Displaying Arabic Text</p>
				<p class="text-lg text-gray-400 -mb-5">You'll need the Uthmani font to the arabic text properly</p>
			</div>

			<div class="text-center">
				<a
					class="inline-flex items-center justify-center gap-x-3 rounded-full border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 px-3 py-3 text-center text-sm font-medium text-white shadow-lg shadow-transparent hover:shadow-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
					href="/static/fonts/uthmanic_hafs_v20.ttf"
					download
				>
					Download
					<svg class="h-2.5 w-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
						<path
							d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</div>
<!-- End Hero -->
