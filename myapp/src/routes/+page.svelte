<script lang="ts">
	import { onMount, type Component } from "svelte";
	import Python from "$lib/techIcons/python.svelte";
	import Java from "$lib/techIcons/java.svelte";	
	import HTML from "$lib/techIcons/html.svelte";
	import CSS from "$lib/techIcons/css.svelte";
	import JavaScript from "$lib/techIcons/javascript.svelte";
	import Typescript from "$lib/techIcons/typescript.svelte";
	import Svelte from "$lib/techIcons/svelte.svelte";
	import React from "$lib/techIcons/react.svelte";
	import Tailwind from "$lib/techIcons/tailwind.svelte";
	import SQL from "$lib/techIcons/sql.svelte";
	import Firebase from "$lib/techIcons/firebase.svelte";
	import Git from "$lib/techIcons/git.svelte";
	import GitHub from "$lib/techIcons/github-black.svelte";

	interface TechIconProps {
		className: string;
	}

	const techStack: string[] = ['python', 'java', 'html', 'css', 'javascript', 'typescript', 'svelte', 'react', 'tailwind', 'sql', 'firebase', 'git', 'github'];
	const techMap: Record<string, Component<TechIconProps>> = {
		python: Python,
		java: Java,
		html: HTML,
		css: CSS,
		javascript: JavaScript,
		typescript: Typescript,
		svelte: Svelte,
		react: React,
		tailwind: Tailwind,
		sql: SQL,
		firebase: Firebase,
		git: Git,
		github: GitHub
	}

	const demos: Map<string, string[]> = new Map([
		['pokeTracker', ['PokeTracker_demo.png', 'PokeTrackerDemo.gif']],
		['wizard101QuizSolver', ['Wizard101.png', 'wizard101.gif']],
		['musiToYouTube', ['musiToYouTube.png', 'musiToYouTubeDemo.gif']],
		['pokemonShinyHuntingBot', ['pokemonShinyHuntingBot.png', 'pokemonShinyHuntingBotDemo.gif']],
		['cometDash', ['cometDash.png', 'cometDashDemo.gif']],
		['aggregateShoppingCart', ['aggregateShoppingCart.png']]
	]);
</script>

<!-- https://coolors.co/palette/0d1b2a-1b263b-415a77-778da9-e0e1dd -->
<div class="full-page">
	<div class="home-page">
		<!-- Introduction -->
		<div class="w-full h-full px-56 py-32 max-md:px-8 max-md:py-16 flex flex-col flex-wrap">
			<p class="w-5/6 h-fit py-4 text-white font-semibold text-3xl text-left drop-shadow-md"> Hello, my name is </p>
			<p class="w-5/6 font-semibold text-[64px] text-transparent gradient-text bg-clip-text"> Jason Chau </p> 
			<p class="w-5/6 max-w-[1000px] h-fit mb-12 py-4 text-white text-[2rem] max-md:text-[1.5rem] max-sm:text-[20px] text-wrap font-semibold text-left drop-shadow-md">
				I'm a software engineer with a focus on full-stack development and automation. 
				I enjoy building creative, practical tools—like dynamic web apps and automation scripts that make life easier and more efficient.
				I'm always exploring new ways to solve problems and bring ideas to life through code.
			</p>
		</div>
		<!-- Skills -->
		<div class="intro">
			<div class="w-full px-56 py-32 max-md:px-8 max-md:py-16 rounded-xl p-8 mx-auto">
				<p class="text-[48px] text-white font-semibold"> Tech Stack </p>
				<div class="w-fit mx-auto px-4 py-4 flex flex-wrap justify-center bg-[#333333] gap-4 rounded-xl ">
					{#each techStack as tech}
					<div class="flex gap-4 p-4 bg-gray-200 rounded-3xl">
						<svelte:component this={techMap[tech]} className="w-[80px] h-[100px] m-auto" />
					</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<!-- Tech Stack Icons
	<div class="projects">
		<div class="flex flex-col mt-16 max-xl:text-center">
			<h1 class="px-8 text-xl">Here's What I've Worked On!</h1>
			<h1 class="p-8 text-5xl font-semibold">Projects.</h1>
		</div>
		<div class="grid grid-cols-3 gap-8 max-xl:grid-cols-1 px-8">
			{#each Array.from(demos.keys()) as project}
				<div class="w-full h-fit bg-[#151515] rounded-xl p-4">
					<h1 class="text-white text-2xl font-semibold mb-4">{project}</h1>
					<div class="w-full h-fit flex flex-col gap-4">
						{#each demos.get(project) as demo}
							<img class="w-full h-fit rounded-lg" src={`../assets/${demo}`} alt={project} />
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
-->
</div>


<style>
	.gradient-text{
		background: linear-gradient(to right, #a3bbf0, #2ca4e9, #5be479, #2ca4e9, #a3bbf0, #2ca4e9, #5be479);
		background-clip: text;
		-webkit-background-clip: text;  /* Add webkit prefix */
		-webkit-text-fill-color: transparent;  /* Make text transparent */
		background-size: 300%;
		animation: gradientShift 3s linear infinite;
	}
	@keyframes gradientShift {
		0% { background-position: 0% 50%; }    /* Start at left */ /* Move to right */
		100% { background-position: 100% 50%; }  /* Back to left */
	}
</style>
