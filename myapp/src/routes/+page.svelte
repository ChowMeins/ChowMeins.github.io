<script lang="ts">
	import { onMount, type Component } from "svelte";
	import Python from "$lib/techIcons/python.svelte";
	import Java from "$lib/techIcons/java.svelte";	
	import HTML from "$lib/techIcons/html.svelte";
	import CSS from "$lib/techIcons/css.svelte";
	import JavaScript from "$lib/techIcons/javascript.svelte";
	import TypeScript from "$lib/techIcons/typescript.svelte";
	import Svelte from "$lib/techIcons/svelte.svelte";
	import React from "$lib/techIcons/react.svelte";
	import Tailwind from "$lib/techIcons/tailwind.svelte";
	import SQL from "$lib/techIcons/sql.svelte";
	import Firebase from "$lib/techIcons/firebase.svelte";
	import Git from "$lib/techIcons/git.svelte";
	import GitHub from "$lib/techIcons/github-white.svelte";
	import RaspberryPi from "$lib/techIcons/raspberry-pi.svelte";
	import Bash from "$lib/techIcons/bash.svelte";
	import Arduino from "$lib/techIcons/arduino.svelte";
	import Cpp from "$lib/techIcons/c++.svelte";
	import Csharp from "$lib/techIcons/csharp.svelte";
	import Unity from "$lib/techIcons/unity.svelte";

	interface TechIconProps {
		className: string;
	}

	const techStack: string[] = ['python', 'java', 'html', 'css', 'js', 'ts', 'svelte', 'react', 'tailwind', 'sql', 'firebase', 'git', 'github'];
	const techMap: Record<string, Component<TechIconProps>> = {
		python: Python,
		java: Java,
		cpp: Cpp,
		csharp: Csharp,
		html: HTML,
		css: CSS,
		js: JavaScript,
		ts: TypeScript,
		svelte: Svelte,
		react: React,
		tailwind: Tailwind,
		sql: SQL,
		firebase: Firebase,
		git: Git,
		github: GitHub,
		raspberryPi: RaspberryPi,
		arduino: Arduino,
		bash: Bash,
		unity: Unity
	}

	const demos: Map<string, {description: string, images?: string[], videos?: string[], techStack?: string[]}> = new Map([
    [
      'PokeTracker',
      {
        description: "A web application for Pokémon enthusiasts to track their shiny hunting progress. Built with SvelteKit, TypeScript, Tailwind, and Firebase, it features real-time data management, optimized Pokémon image loading via PokeAPI, EV tracking, and secure user authentication. With a responsive designed interface ensure a seamless experience for all platforms.",
        images: ['PokeTracker.png', 'PokeTracker.gif'],
		techStack: [
		 	"svelte",
			"ts",
			"tailwind",
			"firebase"
		]
      }
    ],
	[
      'Pokemon Shiny Hunting Bot',
      {
        description: 'A Python script that sends an Arduino commands in to operate a Nintendo 3DS to shiny hunt Pokemon. Detection methods included image comparison with OpenCV/NumPy and photoresistor to detect light intensity, while servo motors press buttons to automate dialogue interactions and encounters.',
        images: ['PokemonShinyHuntingBot.png', 'PokemonShinyHuntingBotDemo.gif'],
		techStack: [
			"python",
			"arduino",
			"cpp"
		]
      }
    ],
    [
      'Wizard101 Quiz Solver',
      {
        description: "A Python script that allows users to automatically completed trivia for crowns (in-game currency). The Selenium package is used to automate web browser interactions to both click and navigate through the questions. OpenAI\'s whisper (an automatic speech recognition system) allows us to bypass the reCAPTCHA verification pop-ups. Using a bash script hosted on a Raspberry Pi, this program can be set to run daily.",
        images: ['Wizard101.png', 'wizard101.gif'],
		techStack: [
			"python"
		]
      }
    ],
    [
      'Musi to YouTube Playlist Converter',
      {
        description: 'A Python script that converts playlists from the mobile app Musi to YouTube using the following: Selenium to execute a headless chrome web driver, Beautiful Soup to scrape the YouTube links from the Musi URL, and the YouTube API to create and insert the songs into a new playlist.',
        images: ['MusiToYouTube.png'],
		techStack: [
			"python"
		]
      }
    ],
    [
      'Comet Dash',
      {
        description: 'A game made in Unity in the style of a infinite-runner. Implemented infinite-level generation, including dynamic road and terrain creation, a custom jump function with realistic gravitational physics to enhance the car\'s movement and gameplay mechanics. Optimized procedural generation for efficient performance, memory management, and smooth transitions between generated segments.',
        images: ['CometDash.png', 'CometDashDemo.gif'],
		techStack: [
			"unity",
			"csharp"
		]
      }
    ],
    [
      'Aggregate Shopping Cart',
      {
        description: 'Sponsored by uARExpert, the Aggregate Shopping Cart provides a seamless virtual shopping cart between users and experts alike using React, PostgreSQL, and Chakra UI. The shopping cart will aggregate and source products/services, configuring it to provide multiple rounds of review before the products are sourced. Main features include a user-friendly UI involving secure login functionality, account management capabilities, the ability to manage project pages, incorporation of shopping carts for each project page, and integration within a database.',
        videos: ['https://www.youtube.com/embed/_V5PumrW9W8?si=nsu1_4d3ZYUCa53q'],
		techStack: [
			'react',
			'ts',
			'sql',
		]
      }
    ],
	[
      'Personal Portfolio Website',
      {
        description: 'A personal portfolio website built with SvelteKit, showcasing my projects, skills, and experience. The site features a responsive design and a clean layout to highlight my work effectively.',
        images: ['PersonalPortfolio.png'],
		techStack: [
			'svelte',
			'ts',
			'tailwind',
		]
      }
    ]
  ]);
</script>


<!-- https://coolors.co/palette/0d1b2a-1b263b-415a77-778da9-e0e1dd -->
<div class="w-full flex">
	<div class="w-full flex px-[24rem] py-[4rem] max-2xl:px-[8rem] max-xl:px-[6rem] max-md:px-[4rem] max-sm:px-[2rem] max-sm:py-8 text-left max-sm:text-center flex flex-col gap-8 items-center justify-center">
		<!-- Introduction -->
		<div class="w-full h-full py-4 flex flex-col flex-wrap">
			<p class= "py-4 text-white font-semibold text-3xl drop-shadow-md"> Hello, my name is </p>
			<p class="font-semibold text-[64px] text-transparent gradient-text bg-clip-text"> Jason Chau </p> 
			<p class="max-w-[1000px] h-fit py-4 text-white text-[2rem] max-md:text-[1.5rem] max-sm:text-[20px] text-wrap font-semibold drop-shadow-md">
				I'm a software engineer with a focus on full-stack development and automation. 
				I enjoy building creative, practical tools that make life easier and more efficient.
				I'm always exploring new ways to solve problems and bring ideas to life through code.
			</p>
		</div>

		<!-- Skills -->
		<div class="w-full flex flex-col gap-4 py-4 mx-auto">
			<p class="w-fit max-sm:mx-auto text-[3rem] text-white font-semibold bg-gray-700 bg-opacity-[0.5] p-2 rounded-xl"> Technologies </p>
			<div class="w-fit flex flex-wrap justify-start max-sm:justify-center gap-4 rounded-xl ">
				{#each techStack as tech}
				<div class="flex gap-4 p-4 rounded-3xl">
					<svelte:component this={techMap[tech]} className="w-[6rem] h-[6rem] p-4 m-auto hover:bg-gray-100 hover:bg-opacity-[0.5] hover:cursor-pointer rounded-xl" />
				</div>
				{/each}
			</div>
		</div>

		<!-- Projects -->
		<div class="w-full flex flex-col gap-16 py-4 mx-auto">
			<p class="w-fit px-6 max-sm:mx-auto text-[3rem] text-white font-semibold bg-gray-700 bg-opacity-[0.5] p-2 rounded-2xl"> Projects </p>
			<div class="flex flex-col flex-wrap justify-start max-sm:justify-center gap-32">
				{#each [...demos.entries()] as [projectName, project]}
					<div class="w-full max-sm:mx-auto flex max-lg:flex-col gap-4 bg-gray-700 bg-opacity-[0.5] p-4 rounded-xl shadow-lg">
						<div class='w-[36rem] max-lg:w-full h-full max-sm:mx-auto rounded-md'>
						{#if project.images && project.images.length > 0}
							<img class='w-full rounded-md' src="/demos/{project.images[0]}" alt="">
						{:else if project.videos && project.videos.length > 0}
							<iframe style="aspect-radio: 16/9;" title='Aggregate Shopping Cart Demo' src={project.videos[0]} frameborder="0" allowfullscreen></iframe>
						{/if}
						</div>
						<!-- Project Description -->
						<div class="w-full flex flex-col gap-4 font-semibold text-[1.5rem] max-sm:text-[1.25rem] text-white bg-gray-900 bg-opacity-[0.5] p-4 rounded-xl">
							<p class='w-fit max-sm:mx-auto bg-gray-700 bg-opacity-[0.5] p-2 rounded-xl'> {projectName} </p>
							<p class='text-[1rem] text-left flex flex-row'> {project.description} </p>
							<div class="w-fit mt-auto flex flex-row bg-gray-700 bg-opacity-[0.5] rounded-xl">
							{#each project.techStack ?? [] as tech}
								<svelte:component this={techMap[tech]} className="w-[3rem] h-[3rem] p-1 m-1 rounded-lg hover:bg-gray-300 hover:bg-opacity-[0.5] hover:cursor-pointer" />
							{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

</div>


<style>
	iframe{
		width: 100%;
		aspect-ratio: 16 / 9;
		height: 100%;
		border-radius: 6px;
	}
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
