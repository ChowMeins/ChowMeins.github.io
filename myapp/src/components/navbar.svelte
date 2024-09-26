<script>
  import HamburgerIcon from "./hamburgerIcon.svelte";
</script>

<div class="w-full h-full bg-[#0d1b2a] shadow-xl">
  <ul class="navbar w-full h-full p-4 roboto-bold text-white flex">
    <li class="w-fit text-[1.5rem] text-nowrap mr-auto my-auto">Jason Chau</li>
    <li class="nav-item"><a href="/"> HOME </a></li>
    <li class="nav-item"><a href="/tools"> TOOLS </a></li>
    <li class="nav-item">PORTFOLIO</li>
    <li class="nav-item">PROJECTS</li>
    <li class="hamburger-icon"><HamburgerIcon /></li>
  </ul>
</div>

<style>
  .navbar {
    gap: 5%;
  }
  .nav-item {
    margin-top: auto;
    margin-bottom: auto;
    font-size: 1.5rem;
  }
  .roboto-bold {
    font-family: "Roboto", system-ui;
    font-weight: 700;
    font-style: normal;
  }
  .hamburger-icon {
    width: fit-content;
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
