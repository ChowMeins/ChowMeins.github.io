<script lang='ts'>
    import { onMount } from "svelte";
    import Java from "../components/svg/techIcons/java.svelte";

    export let data: any;
    const techStack = data.publicUrls;
    onMount(() => {
        console.log(techStack);
    });

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
                <p class='w-full h-fit mb-12 py-4 text-white text-[2rem] max-md:text-[1.5rem] max-sm:text-[1rem] text-wrap font-semibold text-center drop-shadow-md'> 
                    I am an aspiring Software Engineer with a passion for creating innovative and efficient software solutions. 
                    With a strong foundation in programming and a keen interest in tackling complex challenges, I strive to develop applications that are both functional and user-friendly.
                    My dedication to continuous learning and adaptability allows me to stay at the forefront of emerging technologies and contribute meaningfully to impactful projects. 
                </p>
                <ul class='tech-stack gap-4'>
                    {#each techStack as tech}
                        <li class='w-fit h-full flex flex-col bg-white rounded-xl p-2'> <img class='w-[64px] h-[64px] mx-auto' src={tech.publicUrl} alt={tech.name}/> </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
    <div class='projects'>
        <div class='flex flex-col'>
            <h1 class='text-3xl'> Here's What I've Worked On! </h1>
            <h1 class='py-4 text-5xl font-semibold'> Projects. </h1>
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
            border-width: 5px 5px 2.5px 5px;
            border-style: solid;
            border-color: white;
        }
        .profile-pic {
            width: 75%;
            height: 75%;
        }
        .intro {
            height: 100%;
            border-width: 2.5px 5px 5px 5px;
            border-style: solid;
            border-color: white;
        }
    }
    .projects {
        width: 100%;
        display: flex;
        padding: 2rem;
        color: white;
    }
</style>
