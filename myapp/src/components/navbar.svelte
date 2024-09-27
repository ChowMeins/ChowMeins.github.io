<script lang='ts'>
  import {onMount} from "svelte";
  import HamburgerIcon from "./hamburgerIcon.svelte";
  import { open } from "./store";
  import { fly } from "svelte/transition";

  let sidebar : (HTMLElement | null) = null;;
  let menuOpen: boolean = false;

  onMount(() => {
    sidebar = document.getElementById('sidebar');
    open.subscribe((val: boolean) => {
      menuOpen = val;
    });
    window.addEventListener("resize", () => {
      if(window.innerWidth > 900) {
        open.set(false);
      };
  });
  });


</script>

<!--  Navbar -->
<div class="w-full h-full bg-[#9DC7E8] shadow-md p-4 z-[1]">
  <ul class="navbar w-full h-full roboto-bold text-white flex  drop-shadow-md">
    <li class="w-fit text-[1.5rem] text-nowrap mr-auto my-auto">JC</li>
    <li class="nav-item"><a href="/"> HOME </a></li>
    <li class="nav-item"><a href="/tools"> TOOLS </a></li>
    <li class="nav-item">PORTFOLIO</li>
    <li class="nav-item">PROJECTS</li>
    <li class='hamburger-icon'><HamburgerIcon /></li>
  </ul>
</div>

<!-- Side Menu -->
{#if menuOpen}
  <div id='sidebar' in:fly={{duration: 500, x: 300}} out:fly={{duration: 500, x: 300}}>
    <ul class='w-full text-center'> 
      <li class="menu-bar"><a href="/"> HOME </a></li>
      <li class="menu-bar"><a href="/tools"> TOOLS </a></li>
      <li class="menu-bar">PORTFOLIO</li>
      <li class="menu-bar">PROJECTS</li>
    </ul>
  </div>
{/if}

<style>
  .navbar {
    gap: 5%;
  }
  .nav-item {
    margin-top: auto;
    margin-bottom: auto;
    font-size: 1.5rem;
  }
  #sidebar {
    width: 100%;
    background-color: #344d7b;
    position: absolute;
    right: 0;
    z-index: 1;
  }
  .menu-bar {
    color: white;
    font-size: 2rem;
    padding: 0.5rem 0 0.5rem 0;
  }
  .roboto-bold {
    font-family: "Roboto", system-ui;
    font-weight: 700;
    font-style: normal;
  }
  .hamburger-icon {
    width: 100%;
    height: fit-content;
    margin: auto 0 auto 0;
    display: none;
  }
  @media (max-width: 900px) {
    .navbar {
      gap: 0rem;
    }
    .nav-item {
      display: none;
    }
    .roboto-bold {
      font-weight: 500;
    }
    .hamburger-icon {
      display: flex;
    }
  }
  @media (max-width: 630px) {
    .roboto-bold {
      font-size: 1rem;
      font-weight: 500;
    }
  }
  @media (max-width: 160px) {
  }
  @media (max-width: 150px) {

  }
</style>
