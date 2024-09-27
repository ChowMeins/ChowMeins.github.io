<script lang='ts'>
  import { onMount } from "svelte";
  import Footer from "../components/footer.svelte";
  import Wave from "../components/wave.svelte";

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
    <div class='home-page bg-[#9DC7E8] flex'>
        <!-- Left side of home page -->
        <div class='profile'>
            <div class='w-full h-full flex row flex-wrap'>
                <p class='w-full h-fit py-4 text-white font-semibold text-[3rem] text-center z-[1]  drop-shadow-md'> Hello, I'm Jason. </p>
                <img src='/hamster-camera.gif' class='profile-pic border-4 border-white rounded-full drop-shadow-xl' alt='My IRL Pic'/>
            </div>
        </div>
        <!-- Right side of home page -->
        <div class='intro'>
            <p class='w-full h-full text-white text-[3rem] font-semibold text-center drop-shadow-md'> An aspiring Software Engineer who loves to code.</p>
        </div>
    </div>
</div>
<Footer />

<style>
    .full-page {
        width: 100%;
        height: fit-content;
        position: relative;
    }
    .home-page {
        width: 100%;
        height: 100%;
    }
    .profile {
        width: 50%;
        height: 100%;
        padding: 0 1rem 0 1rem;
    }
    .profile-pic {
        width: 75%;
        height: fit-content;
        margin: 2rem auto 2rem auto;
        object-fit: contain;
    }
    .intro {
        width: 100%;
        height: 100%;
        position: relative;
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
            width: fit-content;
            height: fit-content;
        }
        .intro {
            height: 100%;
        }
        #pikachu {
            top: 0;
        }
    }
</style>
