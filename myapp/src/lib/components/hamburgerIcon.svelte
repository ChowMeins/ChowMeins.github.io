<script lang='ts'>
  import {onMount} from "svelte";
  import {get} from "svelte/store";
  import {open} from "./store";
  export let className = "";
  let boxes: (HTMLElement | null)[] = [];
  let isOpen: boolean;

  onMount(() => {
    boxes = [document.getElementById("box1"), document.getElementById("box2"), document.getElementById("box3")];
    open.subscribe((val) => {
      isOpen = val;
    });
  });

  $: animate($open);

  function animate(bool: boolean) : void {
    if (bool) {
      if (boxes[0] && boxes[1] && boxes[2]) {
        boxes[0].style.transform = 'translateX(19px) rotate(45deg)';
        boxes[1].style.width = '0';
        boxes[1].style.opacity = '0';
        boxes[2].style.transform = 'translate(-18px, 22px) rotate(-45deg)';
      }
    }
    if (!bool) {
      if (boxes[0] && boxes[1] && boxes[2]) {
        boxes[0].style.transform = 'rotate(0deg) translateX(0px) ';
        boxes[1].style.width = '73';
        boxes[1].style.opacity = '1';
        boxes[2].style.transform = 'rotate(0deg) translate(0px, 0px) ';
      }
    }
  }
</script>

<button class='hamburger' on:click={() => open.update((o) => !o)}>
  <svg class={className}

    viewBox="0 0 75 50"
    fill="none"
    role="button"
    xmlns="http://www.w3.org/2000/svg"
  >
  <title> Open Menu </title>
      <rect id="box1"
        x="0.5"
        y="0.5"
        width="73"
        height="7"
        rx="3.5"  
        fill="white"
        stroke="white"
      />
      <rect id="box2" y="21" width="73" height="8" rx="4" fill="white" />
      <rect id="box3" y="42" width="73" height="8" rx="4" fill="white" />
  </svg>
</button>  

<style>
  #box1, #box2, #box3 {
    transition: 0.5s;
    z-index: 10;
  }
  .hamburger {
    width: fit-content;
    height: 100%;
    margin-left: auto;
    overflow: visible;
  }
</style>
