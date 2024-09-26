
<!-- https://coolors.co/palette/0d1b2a-1b263b-415a77-778da9-e0e1dd -->

<div class='home-page w-full h-[35.4rem] bg-[#1b263b] flex'>
    <!-- Left side of home page -->
    <div class='profile pb-16 bg-[#1E293E] shadow-xl'>
        <div class='w-full h-fit flex row flex-wrap'>
            <p class='w-full h-1/3 text-gray-300 font-semibold text-center my-8'> Hello, I'm <span class='text-white'> Jason. </span> </p>
            <img src='/hamster-camera.gif' class='profile-pic border-4 border-white rounded-full drop-shadow-xl' alt='My IRL Pic'/>
        </div>
    </div>
    <!-- Right side of home page -->
    <div class='intro w-2/3 h-full'>
        <p class='text-white text-2xl text-center mt-4'> An aspiring Software Engineer who loves to code.</p>
    </div>
</div>

<style>
    .profile {
        width: 33%;
        height: 40rem;
        font-size: 5vw;
    }
    .profile-pic {
        width: 80%;
        margin: 0 auto 0 auto;
    }
    @media (max-width: 900px) {
        .home-page {
            display: flex;
            flex-direction: column;
        }
        .intro {
            width: 100%;
            height: 100%;
        }
        .profile {
            width: 100%;
            height: 40rem;
        }
        .profile-pic {
            width: 50%;
        }
    }
</style>
