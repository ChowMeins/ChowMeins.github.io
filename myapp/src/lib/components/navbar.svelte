<script lang='ts'>
  import {onMount} from "svelte";
  import HamburgerIcon from "./hamburgerIcon.svelte";
  import { open } from "./store";
  import { fly } from "svelte/transition";
  import GitHub from "$lib/techIcons/github-white.svelte";

  let sidebar : (HTMLElement | null) = null;
  let hamburgerIcon : (HTMLElement | null) = null;
  let menuOpen: boolean = false;

  onMount(() => {
    open.subscribe((val: boolean) => {
      menuOpen = val;
    });
    window.addEventListener("resize", () => {
      if(window.innerWidth > 900) {
        open.set(false);
      }
    });
    window.addEventListener("click", (event: MouseEvent) => {
        if(hamburgerIcon && !hamburgerIcon.contains(event.target as Node) && menuOpen == true) {
          open.set(false);
        }
    });
  });

  function closeSideBar() {
    open.set(false);
  }
</script>

<!--  Navbar -->
<div class="w-full h-full flex gap-8 bg-[#151515] px-[24rem] max-xl:px-[8rem] max-md:px-[4rem] max-sm:px-[2rem] py-4 z-[1]">
  <ul class="navbar w-full h-full oswald text-white flex">
    <li class="w-fit text-[1.5rem] text-nowrap mr-auto my-auto"> <a href="/"> JASON CHAU </a> </li>
    <li class="nav-item"><a href="/"> HOME </a></li>
    <li class="nav-item"><a href="/tools"> TOOLS </a></li>
    <li class="nav-item"><a href="/portfolio.pdf">PORTFOLIO</a></li>
    <li class="nav-item"><a href='https://github.com/ChowMeins'> <GitHub className="w-[24px] h-[24px]"/> </a> </li>
  </ul>
  <li id='hamburger-icon' bind:this={hamburgerIcon}><HamburgerIcon className='w-[32px] h-[32px]' /></li>
</div>

<!-- Side Menu for smaller devices -->
{#if menuOpen}
  <div id='sidebar' bind:this={sidebar} class='oswald' in:fly={{duration: 500, y: 0}} out:fly={{duration: 500, y: 0}}>
    <ul class='w-full flex flex-col'> 
      <li class="menu-bar"><a href="/" on:click={closeSideBar}> HOME </a> </li>
      <li class="menu-bar"><a href="/tools" on:click={closeSideBar}> TOOLS </a> </li>
      <li class="menu-bar"><a href="/portfolio.pdf" on:click={closeSideBar}> PORTFOLIO </a> </li>
      <li class="menu-bar"><a href="https://github.com/ChowMeins" on:click={closeSideBar}> GITHUB </a> </li>
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
    background-color: #0d0d0d;
    position: absolute;
    left: 0;
    z-index: 1;
    border-width: 5px 5px 5px 5px;
    border-style: solid;
    border-color: #303030;
  }
  .menu-bar {
    width: 100%;
    color: white;
    font-size: 2rem;
    padding: 0.5rem 0 0.5rem 0;
  }
  .menu-bar:nth-child(odd) {
    background-color: #1d1d1d;
  }
  .menu-bar a {
    display: block;
    width: 100%;
    margin: 0 auto 0 auto;
    text-align: center;
  }
  #hamburger-icon {
    width: 32px;
    height: 32px;
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
    #hamburger-icon {
      display: flex;
    }
  }
  @media (max-width: 630px) {
  }
  @media (max-width: 160px) {
  }
  @media (max-width: 150px) {

  }
</style>
