<script lang='ts'>
    import { onMount } from "svelte";
    import Java from "../components/svg/techIcons/java.svelte";

    export let data: any;
    const images: [boolean, string, string][]= [[false, "demos/PokeTracker_demo.png", "demos/PokeTracker_demo.gif"], [false, "demos/Wizard101.png", "demos/Wizard101.gif"], [false, "demos/PokemonShinyHuntingBot.png", "demos/PokemonShinyHuntingBot.gif"], [false, "demos/CometDash.png", "demos/CometDash.gif"]];
    const techStack = new Map();
    data.publicUrls.forEach((element:any) => {
        const tech = element.name.substring(0, element.name.length - 4);
        techStack.set(tech, element.publicUrl);
    });
    

    onMount(() => {
        //console.log(data);
        //console.log(techStack);
    })
</script>

<!-- https://coolors.co/palette/0d1b2a-1b263b-415a77-778da9-e0e1dd -->
 <div class='full-page'>
    <div class='home-page'>
        <!-- Left side of home page -->
        <div class='profile'>
            <div class='w-full h-full flex row flex-wrap'>
                <p class='w-full h-fit py-4 text-white font-semibold text-5xl text-center drop-shadow-md'> Hello, I'm Jason. 👋</p>
                <img src='/hamster-camera.gif' class='profile-pic border-1 border-[#FFFFFF] rounded-full drop-shadow-xl' alt='My IRL Pic'/>
            </div>
        </div>
        <!-- Right side of home page -->
        <div class='intro'>
            <div class='w-full rounded-xl p-8 mx-auto'>
                <p class='w-full h-fit mb-12 py-4 text-white text-[2rem] max-md:text-[1.5rem] max-sm:text-[20px] text-wrap font-semibold text-center drop-shadow-md'> 
                    I am an aspiring Software Engineer with a passion for creating innovative and efficient software solutions. 
                    With a strong foundation in programming and a keen interest in tackling complex challenges, I strive to develop applications that are both functional and user-friendly.
                    My dedication to continuous learning and adaptability allows me to stay at the forefront of emerging technologies and contribute meaningfully to impactful projects. 
                </p>
                <ul class='tech-stack gap-4'>
                    {#each data.techStack as tech}
                        <li class='w-fit h-full flex flex-col bg-white rounded-xl p-2'> <img class='w-[64px] h-[64px] mx-auto' src={techStack.get(tech)} alt={tech}/> </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
    <div class='projects'>
        <div class='flex flex-col mt-16 max-xl:text-center'>
            <h1 class='px-8 text-xl'> Here's What I've Worked On! </h1>
            <h1 class='p-8 text-5xl font-semibold'> Projects. </h1>
        </div>
        <div class='grid grid-cols-3 gap-8 max-xl:grid-cols-1 px-8'>
            <!-- PokeTracker -->
            <section class='w-full mx-auto flex flex-col p-4 gap-2 rounded-lg border-2 border-white'>
                <h1 class='flex'> 
                    <p class='text-[24px] font-semibold'> PokeTracker </p> 
                    <ul class='flex gap-4 ml-auto'>
                        <li> <a href='https://github.com/ChowMeins/PokeTracker' target="_blank"><img src={techStack.get('github_white')} alt="GitHub" class='w-[32px] h-[32px]'></a></li>
                        <li> <a href='http://pkmn-tracker.vercel.app/' target="_blank"><img src={techStack.get('internet')} alt="GitHub" class='w-[32px] h-[32px]'></a></li>
                    </ul>
                </h1>
                <img src={images[0][0] ? images[0][2] : images[0][1]} alt='PokeTracker Demo' class='w-fit max-xl:h-[320px]' on:mouseenter={() => images[0][0] = true} on:mouseleave={() => images[0][0] = false}/>
                <p class='text-[18px] font-medium'> 
                    A web application for Pokémon enthusiasts to track their shiny hunting progress. 
                    Built with SvelteKit, TypeScript, Tailwind, and Firebase, it features real-time data management, optimized Pokémon image loading via PokeAPI, EV tracking, and secure user authentication. 
                    With a responsive designed interface ensure a seamless experience for all platforms. 
                </p>
                <ul class='flex gap-3 mt-auto ml-auto'> 
                    <img class='w-[32px] h-[32px] max-sm:w-[48px] max-sm:h-[48px]' src={techStack.get('svelte')} alt='Svelte' title='Svelte'/>
                    <img class='w-[32px] h-[32px] max-sm:w-[48px] max-sm:h-[48px]' src={techStack.get('typescript')} alt='TypeScript' title='TypeScript'/>
                    <img class='w-[32px] h-[32px] max-sm:w-[48px] max-sm:h-[48px]' src={techStack.get('tailwind')} alt='Tailwind' title='Tailwind'/>
                    <img class='w-[32px] h-[32px] max-sm:w-[48px] max-sm:h-[48px]' src={techStack.get('firebase')} alt='Firebase' title='Firebase'/>
                    <img class='w-[48px] h-fit my-auto' src='pokeapi.png' alt='PokeAPI' title='PokeAPI'/>
                </ul>
            </section>
            <!-- Wizard101 Quiz Solver -->
            <section class='w-full mx-auto flex flex-col p-4 gap-2 rounded-lg border-2 border-white'>
                <h1 class='flex text-xl'> 
                    <p class='text-[24px] font-semibold'> Wizard101 Quiz Solver </p>         
                    <ul class='flex gap-4 ml-auto'>
                        <li> <a href='https://github.com/ChowMeins/Wizard101-Quiz-Solver' target="_blank"><img src={techStack.get('github_white')} alt="GitHub" class='w-[32px] h-[32px]'></a></li>
                    </ul>
                </h1>
                <img src={images[1][0] ? images[1][2] : images[1][1]} alt='PokeTracker Demo' class='w-fit max-xl:h-[320px]' on:mouseenter={() => images[1][0] = true} on:mouseleave={() => images[1][0] = false}/>
                <p class='text-[18px] font-medium'> 
                    A Python script that allows users to automatically completed trivia for crowns (in-game currency). 
                    The Selenium package is used to automate web browser interactions to both click and navigate through the questions.
                    OpenAI's whisper (an automatic speech recognition system) allows us to bypass the reCAPTCHA verification pop-ups.
                    Using a bash script hosted on a Raspberry Pi, this program can be set to run daily.
                    
                </p>
                <ul class='flex gap-3 mt-auto ml-auto'> 
                    <img class='w-[32px] h-[32px] max-sm:w-[48px] max-sm:h-[48px]' src={techStack.get('python')} alt='Python' title='Python'/>
                    <img class='w-[32px] h-[32px] max-sm:w-[48px] max-sm:h-[48px]' src={techStack.get('raspberryPi')} alt='Raspberry Pi' title='Raspberry Pi'/>
                    <img class='w-[32px] h-[32px] max-sm:w-[48px] max-sm:h-[48px]' src={techStack.get('bash')} alt='Bash' title='Bash'/>
                    <img class='w-[32px] h-[32px] max-sm:w-[48px] max-sm:h-[48px]' src={techStack.get('openAI')} alt='OpenAI' title='OpenAI'/>
                </ul>
            </section>
            <!-- Musi To YouTube Playlist Converter -->
            <section class='w-full mx-auto flex flex-col p-4 gap-2 rounded-lg border-2 border-white'>
                <h1 class='flex'> 
                    <p class='text-[24px] font-semibold'> Musi To YouTube Playlist Converter </p> 
                    <ul class='flex gap-4 ml-auto'>
                        <li> <a href='https://github.com/ChowMeins/Musi-to-YouTube-Playlist' target="_blank"><img src={techStack.get('github_white')} alt="GitHub" class='w-[32px] h-[32px]'></a></li>
                    </ul>
                </h1>
                <img src='demos/MusiToYouTube.png' alt='Musi to YouTube playlist converter' class='w-fit max-xl:h-[320px]' on:mouseenter={() => images[0][0] = true} on:mouseleave={() => images[0][0] = false}/>
                <p class='text-[18px] font-medium'> 
                    A Python script that converts playlists from the mobile app Musi to YouTube.
                    Utilizes the following packages: Selenium to execute a headless chrome web driver, Beautiful Soup to scrape the YouTube links from the Musi URL,
                    and the YouTube API to create and insert the songs into a new playlist.
                </p>
                <ul class='flex gap-3 mt-auto ml-auto'> 
                    <img class='w-[32px] h-[32px] max-sm:w-[48px] max-sm:h-[48px]' src={techStack.get('python')} alt='Python' title='Python'/>
                </ul>
            </section>
            <!-- Pokemon Shiny Hunting Bot  -->
            <section class='w-full mx-auto flex flex-col p-4 gap-2 rounded-lg border-2 border-white'>
                <h1 class='flex text-xl font-semibold'> 
                    <p> Pokemon Shiny Hunting Bot </p> 
                    <ul class='flex gap-4 ml-auto'>
                        <li> <a href='https://github.com/ChowMeins/Pokemon-Shiny-Hunter-Bot' target="_blank"><img src={techStack.get('github_white')} alt="GitHub" class='w-[32px] h-[32px]'></a></li>
                    </ul>
                </h1>
                <img src={images[2][0] ? images[2][2] : images[2][1]} alt='Pokemon Shiny Hunting Bot Demo' class='w-fit max-xl:h-[320px]' on:mouseenter={() => images[2][0] = true} on:mouseleave={() => images[2][0] = false}/>
                <p class='text-[18px] font-medium'> 
                    A Python script that sends an Arduino commands in to operate a Nintendo 3DS to shiny hunt Pokemon.
                    Detection methods included image comparison with OpenCV/NumPy and photoresistor to detect light intensity, 
                    while servo motors press buttons to automate dialogue interactions and encounters.
                </p>
                <ul class='flex gap-3 mt-auto ml-auto'> 
                    <img class='w-[32px] h-[32px] max-sm:w-[48px] max-sm:h-[48px]' src={techStack.get('python')} alt='Python' title='Python'/>
                    <img class='w-[32px] h-[32px] max-sm:w-[48px] max-sm:h-[48px]' src={techStack.get('arduino')} alt='Arduino' title='Arduino'/>
                    <img class='w-[32px] h-[32px] max-sm:w-[48px] max-sm:h-[48px]' src={techStack.get('c++')} alt='C++' title='C++'/>
                </ul>
            </section>
            <!-- Comet Dash -->
            <section class='w-full mx-auto flex flex-col p-4 gap-2 rounded-lg border-2 border-white'>
                <h1 class='flex text-xl font-semibold'> 
                    <p> Comet Dash </p> 
                    <ul class='flex gap-4 ml-auto'>
                        <li> <a href='https://github.com/ZaneLeBlanc/Team16Project' target="_blank"><img src={techStack.get('github_white')} alt="GitHub" class='w-[32px] h-[32px]'></a></li>
                    </ul>
                </h1>
                <img src={images[3][0] ? images[3][2] : images[3][1]} alt='PokeTracker Demo' class='w-fit max-xl:h-[320px]' on:mouseenter={() => images[3][0] = true} on:mouseleave={() => images[3][0] = false}/>
                <p class='text-[18px] font-medium'> 
                    A game made in Unity in the style of a infinite-runner. Implemented infinite-level generation, including dynamic road and terrain creation,
                    a custom jump function with realistic gravitational physics to enhance the car's movement and gameplay mechanics.
                    Optimized procedural generation for efficient performance, memory management, and smooth transitions between generated segments.
                </p>
                <ul class='flex gap-3 mt-auto ml-auto'> 
                    <img class='w-[32px] h-[32px] max-sm:w-[48px] max-sm:h-[48px]' src={techStack.get('unity')} alt='Unity' title='Unity'/>
                    <img class='w-[32px] h-[32px] max-sm:w-[48px] max-sm:h-[48px]' src={techStack.get('c_sharp')} alt='C#' title='C#'/>
                </ul>
            </section>
            <!-- Aggregate Shopping Cart -->
            <section class='w-full mx-auto flex flex-col p-4 gap-2 rounded-lg border-2 border-white'>
                <h1 class='flex text-xl font-semibold'> 
                    <p> Aggregate Shopping Cart </p> 
                    <ul class='flex gap-4 ml-auto'>
                        <li> <a href='https://github.com/ChosenQuill/uARexpert' target="_blank"><img src={techStack.get('github_white')} alt="GitHub" class='w-[32px] h-[32px]'></a></li>
                    </ul>
                </h1>
                <iframe class='w-full h-[320px]' src="https://www.youtube.com/embed/_V5PumrW9W8?si=E_mkklOrUBclv6du" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p class='text-[18px] font-medium'> 
                    Sponsored by uARExpert, the Aggregate Shopping Cart provides a seamless virtual shopping cart between users and experts alike using React, PostgreSQL, and Chakra UI. 
                    The shopping cart will aggregate and source products/services, configuring it to provide multiple rounds of review before the products are sourced. 
                    Main features include a user-friendly UI involving secure login functionality, account management capabilities, 
                    the ability to manage project pages, incorporation of shopping carts for each project page, and integration within a database.
                </p>
                <ul class='flex gap-3 mt-auto ml-auto'> 
                    <img class='w-[32px] h-[32px] max-sm:w-[48px] max-sm:h-[48px]' src={techStack.get('react')} alt='React' title='React'/>
                    <img class='w-[32px] h-[32px] max-sm:w-[48px] max-sm:h-[48px]' src={techStack.get('postgresql')} alt='PostgreSQL' title='PostgreSQL'/>
                </ul>
            </section>
            <!-- Personal Portfolio Website -->
            <section class='w-full mx-auto flex flex-col p-4 gap-2 rounded-lg border-2 border-white'>
                <h1 class='flex text-xl font-semibold'> 
                    <p> My Portfolio Website </p> 
                    <ul class='flex gap-4 ml-auto'>
                        <li> <a href='https://github.com/ChowMeins/ChowMeins.github.io' target="_blank"><img src={techStack.get('github_white')} alt="GitHub" class='w-[32px] h-[32px]'></a></li>
                        <li> <a href='https://chowmeins.github.io/'><img src={techStack.get('internet')} alt="Website" class='w-[32px] h-[32px]'></a></li>
                    </ul>
                </h1>
                <img src='demos/PersonalPortfolio.png' alt='PokeTracker Demo' class='w-fit max-xl:h-[320px]' on:mouseenter={() => images[2][0] = true} on:mouseleave={() => images[2][0] = false}/>
                <p class='text-[18px] font-medium'> 
                    My personal website showcasing me! Includes things such as my portfolio, projects, and tools for my personal use that are public!
                </p>
                <ul class='flex gap-3 mt-auto ml-auto'> 
                    <img class='w-[32px] h-[32px] max-sm:w-[48px] max-sm:h-[48px]' src={techStack.get('svelte')} alt='Svelte' title='Svelte'/>
                    <img class='w-[32px] h-[32px] max-sm:w-[48px] max-sm:h-[48px]' src={techStack.get('tailwind')} alt='Tailwind' title='Tailwind'/>
                    <img class='w-[32px] h-[32px] max-sm:w-[48px] max-sm:h-[48px]' src={techStack.get('supabase')} alt='Supabase' title='Supabase'/>
                </ul>
            </section>
            
        </div>
    </div>
</div>

<style>
    .full-page {
        width: 100%;
        min-height: 100vh;
        height: fit-content;
        position: relative;
    }
    .home-page {
        width: 100%;
        height: 100%;
        display: flex;
    }
    .profile {
        width: 50%;
        height: 100%;
        padding: 2rem;
    }
    .profile-pic {
        width: 75%;
        height: fit-content;
        margin: 2rem auto 0rem auto;
        object-fit: contain;
    }
    .intro {
        width: 100%;
        height: 100%;
        display: flex;
        position: relative;
    }
    .tech-stack {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        flex-basis: 33%;
        justify-content: center;
    }
    .projects {
        width: 100%;
        display: flex-column;
        color: white;
    }
    @media (max-width: 900px) {
        .full-page {
            height: 100%;
        }
        .home-page {
            height: 100%;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            z-index: 1;
        }
        .profile {
            width: 100%;
            height: fit-content;
        }
        .profile-pic {
            width: 50%;
            height: 50%;
            border: 2px solid white;
        }
        .intro {
            height: 100%;
        }
    }
</style>
