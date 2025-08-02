<script lang='ts'>
    import {onMount} from 'svelte';
    onMount(() => {
        let pikachu: (HTMLElement | null) = document.getElementById('pikachu');
        if (pikachu) {
        }
    });
</script>
    
<div class='wave'>
    <img src='/pikachuSurfing.png' id='pikachu' alt='Surfing Pikachu'>
</div>

<style>
    .wave {
        width: 100%;
        position: relative;
        aspect-ratio: 960/300;
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: cover;
        background-image: url("./wave.svg");

    }
    #pikachu {
        width: auto;
        height: 100%;
        position: absolute;
        left: 35%;
        margin: 0 auto 0 auto;
        animation-name: surfing;
        animation-duration: 2s;
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