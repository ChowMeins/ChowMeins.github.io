<script lang='ts'>
    import {onMount} from 'svelte';
    onMount(() => {
        let pikachu: HTMLElement = document.getElementById('pikachu');
        if (pikachu) {
            pikachu.style.transform = "translate(1000px, 1000px)";
        }
    });
</script>
    
<div class='wave'>
    <img src='/pikachuSurfing.png' id='pikachu' alt='Surfing Pikachu'>
</div>

<style>
    .wave {
        width: 100%;
        margin-top: 10%;
        aspect-ratio: 960/300;
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: cover;
        background-image: url("./wave.svg");
    }
    #pikachu {
        width: fit-content;
        height: fit-content;
        margin: 0 auto 0 auto;
        animation-name: surfing;
        animation-duration: 2s;
        left: 45%;
        animation-iteration-count: infinite;
        z-index: 1;
    }
    @keyframes surfing {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-20px); /* Move up by 20px */
        }
        100% {
            transform: translateY(0px); /* Back to original position */
        }
    }
</style>