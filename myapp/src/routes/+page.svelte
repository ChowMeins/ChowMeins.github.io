<script lang='ts'>
  import { onMount } from "svelte";
  import Footer from "../components/footer.svelte";

  let pikachuX: number, pikachuY: number = 0;
  let pikachu: (HTMLElement | null) = null;

  onMount(() => {
    pikachu = document.getElementById('pikachu');
    if (pikachu) {
        pikachuX = pikachu.offsetWidth;
        pikachuY = pikachu.offsetHeight;
        pikachu.style.left = `calc(50% - ${pikachuX / 2}px)`;

    }
    window.addEventListener('resize', () => {
    if (pikachu) {
        pikachuX = pikachu.offsetWidth;
        pikachuY = pikachu.offsetHeight;
        pikachu.style.left = `calc(50% - ${pikachuX / 2}px)`;
    }
  })
  });

</script>

<!-- https://coolors.co/palette/0d1b2a-1b263b-415a77-778da9-e0e1dd -->
 <div class='full-page'>
    <div class='home-page flex'>
        <!-- Left side of home page -->
        <div class='profile'>
            <div class='w-full h-full flex row flex-wrap'>
                <h1 class='w-full text-white font-semibold text-5xl text-center drop-shadow-md'> Welcome! </h1>
                <hr class='w-[90%] mt-4 mx-auto border-2 border-white'/>
                <p class='w-full h-fit py-4 text-white font-semibold text-5xl text-center  drop-shadow-md'> Hello, I'm Jason. </p>
                <img src='/hamster-camera.gif' class='profile-pic border-4 border-white rounded-full drop-shadow-xl' alt='My IRL Pic'/>
            </div>
        </div>
        <!-- Right side of home page -->
        <div class='intro'>
            <div class='w-full rounded-xl p-8 mx-auto'>
                <p class='w-full h-fit text-white text-[3rem] text-wrap font-semibold text-center drop-shadow-md'> An aspiring Software Engineer who loves to code.</p>
                <ul class='tech-stack'>
                    <li> <img src='java-icon.svg' alt='Java' /> </li>
                    <li> <img src='python-icon.svg' alt='Python' /> </li>
                    <li> <img src='react-icon.svg' alt='React'/> </li>
                    <li> <img src='svelte-icon.svg' alt='Svelte'/> </li>
                    <li> <img src='html-icon.svg' alt='HTML'/> </li>
                    <li> <img src='css-icon.svg' alt='CSS'/> </li> 
                    <li> <img src='js-icon.svg' alt='JavaScript' /> </li>
                    <li> <img src='ts-icon.svg' alt='TypeScript' /> </li>
                    <li> <img src='sql-icon.svg' alt='SQL' /> </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<style>
    .full-page {
        width: 100%;
        min-height: 100vh;
        height: fit-content;
        position: relative;
        background-color: #9DC7E8;
    }
    .home-page {
        width: 100%;
        height: 100%;
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
    
    .tech-stack li {
        width: fit-content;
        height: 0%;
        margin: 0.5vh 0.5vw 0.5vh 0.5vw;
        padding: 1vh 1vw 1vh 1vw;  
        background-color: white;
        border-radius: 25px;
    }
    .tech-stack li img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        margin: 0 auto 0 auto;
        padding: 0.5vh 0.5vw 0.5vh 0.5vw;

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
</style>
