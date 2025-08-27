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

<div class='w-full h-[100%] px-[24rem] max-2xl:px-[8rem] max-xl:px-[6rem] max-md:px-[4rem] max-sm:px-[2rem]'>
    <div class='w-full py-2 text-white flex flex-wrap gap-2'>
        {#each tips.days_of_week as day, i}
            <div class='w-full flex flex-col mx-auto gap-1'>
                <p class='day px-3 py-0.5'> {day} </p>
                <div class='w-full grid grid-cols-2 px-1 pb-1.5 gap-2 bg-[#b9b9b9] bg-opacity-[0.1] rounded-md'>
                    <!--- Cash Input -->
                    <div class='w-full flex flex-col mx-auto'>
                        <p class='w-fit mx-auto font-semibold'> Cash </p>  
                        <input id="cash-{i}" class='w-fit' type="number" pattern="[0-9]*" inputmode="decimal" placeholder="Enter the total here..." bind:value={tips.cash[i]} 
                            on:input={() => {
                            tips.cashInput[i][1] = validateAmount(tips.cash[i], i)
                            if (tips.cashInput[i][1] === true) {
                                tips.sum = calculateTotal(tips.cash, tips.credit);
                            }
                            }} />
                        {#if tips.cashInput[i][1] === false}
                            <p class='warning'> ⚠ Warning: Input is invalid. Please use digits up to 2 decimal places.</p>
                        {/if}
                    </div>
                    <!--- Credit Input -->
                    <div class='w-full mx-auto'>
                        <p class='w-fit mx-auto font-semibold'> Credit </p>
                        <input id="credit-{i}" class='w-fit' type="number" pattern="[0-9]*" inputmode="decimal" placeholder="Enter the total here..."  bind:value={tips.credit[i]} 
                        on:input={() => {
                            tips.creditInput[i][1] = validateAmount(tips.credit[i], i);
                            if (tips.creditInput[i][1] === true) {
                                tips.sum = calculateTotal(tips.cash, tips.credit);
                            }
                            }} />
                        {#if tips.creditInput[i][1] === false}
                            <p class='warning'> ⚠ Warning: Invalid Input. Please use digits up to 2 decimal places.</p>
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </div>
    <p class='day px-3'> Total: {tips.sum} </p>
</div>

<style>
    input {
        width: 100%;
        margin: 0 auto 0 auto;
        padding: 0.25rem;
        border-radius: 0.4rem;
        color: black;
        font-size: 1rem;
    }
    input:focus {
        outline: 2px solid #1ca2f0;
    }
    .day {
        width: fit-content;
        margin: 0 auto 0 auto;
        border-radius: 0.4rem;
        text-align: center;
        font-weight: 600;
        color: white;
        background-color: #b9b9b932;
    }
    .warning {
        width: 100%;
        padding: 0 0.5rem 0 0.25rem;
        font-size: calc(0.55vw + 0.55vh);
        text-align: center;
        background-color: #e58080;
        border: 2.5px solid #d65050;
        border-radius: 3px;
        color: white;        
    }


</style>