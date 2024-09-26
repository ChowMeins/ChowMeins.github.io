<script lang='ts'>
    import Page from "../+page.svelte";

    let weeklyTotal: (number | '')[] = Array(7).fill('');
    let days_of_week: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let sum: number = 0;
    function calcSum() {
        sum = 0;
        for(let i = 0; i < weeklyTotal.length; ++i) {
            sum += (weeklyTotal[i] == '' ? 0 : Number(weeklyTotal[i]));
        }
    }

</script>

<div class='w-full h-[100%] bg-[#1b263b]'>
    <ul class='w-full bg-[#1b263b] text-white flex flex-wrap py-4'>
        {#each days_of_week as day, i}
            <label for='monTotal'> {day} </label> <input type="number" bind:value={weeklyTotal[i]} on:input={calcSum} placeholder="Enter the total here" class="text-black border border-gray-500 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        {/each}
    </ul>
    <p class='bg-[#0d1b2a] text-white pl-4'> Total: ${sum} </p>
</div>

<style>
    label {
        width: 100%;
        padding: 0.75rem;
    }
    input {
        width: 100%;
        margin-left: 0.75rem;
        margin-right: 0.75rem;
    }

</style>