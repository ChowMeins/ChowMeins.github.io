<script lang='ts'>

    let weeklyCash: (number | '')[] = Array(7).fill('');
    let weeklyCredit: (number | '')[] = Array(7).fill('');
    let days_of_week: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let sum: number = 0;
    function calcSum() {
        sum = 0;
        for(let i = 0; i < weeklyCash.length; ++i) {
            sum += (weeklyCash[i] == '' ? 0 : Number(weeklyCash[i])) + (weeklyCredit[i] == '' ? 0 : Number(weeklyCredit[i]));
        }
    }

</script>

<div class='w-full h-[100%] bg-[#1b263b]'>
    <ul class='w-full bg-[#1b263b] text-white flex flex-wrap'>
        {#each days_of_week as day, i}
            <h1 class='w-full bg-[#415a77]'> {day} </h1>
            <div class='w-[90%] py-4 flex'>
                <div class='w-[45%] mr-auto'>
                    <p class='ml-3'> Cash </p> 
                    <input type="number" bind:value={weeklyCash[i]} on:input={calcSum} placeholder="Enter the total here" class="p-1 text-black border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div class='w-[45%] ml-auto '>
                    <p class='ml-3'> Credit </p>
                    <input type="number" bind:value={weeklyCredit[i]} on:input={calcSum} placeholder="Enter the total here" class="p-1 text-black border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
            </div>
        {/each}
    </ul>
    <p class='bg-[#0d1b2a] text-white pl-4'> Total: ${sum} </p>
</div>

<style>
    input {
        width: 100%;
        margin-left: 0.75rem;
        margin-right: 0.75rem;
    }

</style>