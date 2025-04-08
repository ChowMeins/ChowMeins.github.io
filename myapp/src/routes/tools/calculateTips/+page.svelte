<script lang='ts'>
    import { onMount } from "svelte";
    import { validateAmount, calculateTotal } from "$lib/utils/tips";
    class Tips {
        cash: (number | null)[] = [null, null, null, null, null, null, null];
        credit: (number | null)[] = [null, null, null, null, null, null, null];
        cashInput: [HTMLElement | null, boolean][] = [[null, true], [null, true], [null, true], [null, true], [null, true], [null, true], [null, true]];
        creditInput: [HTMLElement | null, boolean][] = [[null, true], [null, true], [null, true], [null, true], [null, true], [null, true], [null, true]];
        days_of_week: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        sum: string = "0.00";
    }   
    let tips = new Tips();
    onMount(() => {
        for(let i = 0; i < 7; ++i) {
            tips.cashInput[i][0] = document.getElementById('cash-' + i);
            tips.creditInput[i][0] = document.getElementById('credit-' + i);
        }
    });
</script>

<div class='w-full h-[100%]'>
    <ul class='w-full bg-[#1d1d1d] text-white flex flex-wrap'>
        {#each tips.days_of_week as day, i}
            <h1 class='day'> {day} </h1>
            <div class='w-full flex justify-between'>
                <div class='w-full flex flex-col gap-1 mx-auto'>
                    <p class='w-[85%] mx-auto font-semibold'> Cash </p>  
                    <input id="cash-{i}" class='w-fit' type="number" pattern="[0-9]*" inputmode="decimal" placeholder="Enter the total here" bind:value={tips.cash[i]} 
                        on:input={() => {
                        tips.cashInput[i][1] = validateAmount(tips.cash[i], i)
                        if (tips.cashInput[i][1] === true) {
                            tips.sum = calculateTotal(tips.cash, tips.credit);
                        }
                        }} />
                    {#if tips.cashInput[i][1] === false}
                        <p class='warning'> ⚠ Warning: Input is invalid. Please use digits up to 2 decimal places. Calculation may be incorrect</p>
                    {/if}
                </div>
                <div class='w-full flex flex-col gap-1 mx-auto'>
                    <p class='w-[85%] mx-auto font-semibold'> Credit </p>
                    <input id="credit-{i}" class='w-fit' type="number" pattern="[0-9]*" inputmode="decimal" placeholder="Enter the total here"  bind:value={tips.credit[i]} 
                    on:input={() => {
                        tips.creditInput[i][1] = validateAmount(tips.credit[i], i);
                        if (tips.creditInput[i][1] === true) {
                            tips.sum = calculateTotal(tips.cash, tips.credit);
                        }
                        }} />
                    {#if tips.creditInput[i][1] === false}
                        <p class='warning'> ⚠ Warning: Invalid Input. Please use digits up to 2 decimal places. Calculation may be incorrect</p>
                    {/if}
                </div>
            </div>
        {/each}
    </ul>
    <p class='day'> Total: {tips.sum} </p>
</div>

<style>
    input {
        width: 85%;
        margin: 0 auto 0 auto;
        padding: 0.25rem;
        border-radius: 5px;
        border: none;
        color: black;
    }
    input:focus-visible {
        outline: 3.5px solid #000000;
    }
    .day {
        width: 100%;
        padding: 0.25rem 0 0.25rem 0.5rem;
        font-weight: 600;
        color: white;

        background-color: #2a2a2a;
    }
    .warning {
        width: 85%;
        margin: 0 auto 0 auto;
        padding: 0 0.5rem 0 0.25rem;
        font-size: calc(0.55vw + 0.55vh);
        text-align: center;
        background-color: #e58080;
        border: 2.5px solid #d65050;
        border-radius: 3px;
        color: white;        
    }


</style>