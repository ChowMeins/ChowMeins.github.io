<script lang='ts'>
    import { onMount } from "svelte";

    let weeklyCash: (string)[] = Array(7).fill('');
    let weeklyCredit: (string)[] = Array(7).fill('');
    let cashInput: Array<[(HTMLElement | null), boolean]> = Array(7).fill([null, true]);
    let creditInput: Array<[(HTMLElement | null), boolean]> = Array(7).fill([null, true]);
    let days_of_week: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let sum: string = "$0";

    onMount(() => {
        for(let i = 0; i < cashInput.length; ++i) {
            cashInput[i] = [document.getElementById('cash-' + i), true];
            creditInput[i] = [document.getElementById('credit-' + i), true];
        }
    });

    function validateAmount(amount: string, index: number, type: string): boolean {
        if(amount == null) amount = "0";
        let amountParts: string[] = amount.toString().split(".");
        if (amountParts.length === 1 || (amountParts.length === 2 && amountParts[1].length <= 2)) {
            if(type === "cash") {
                cashInput[index][1] = true;
            }
            else if (type === "credit") { 
                creditInput[index][1] = true;
            }
            return true;
        }
        else if (amountParts.length === 2 && amountParts[1].length > 2) {
            if(type === "cash") {
                cashInput[index][1] = false;
            }
            else if (type === "credit") { 
                creditInput[index][1] = false;
            }
            return false;
        }
        return true;
    }

    function calcSum(): void {
        let temp: number = 0;
        sum = "";
        for(let i = 0; i < weeklyCash.length; ++i) {
            temp += (weeklyCash[i] === null || weeklyCash[i] === '' ? 0 : parseFloat(parseFloat(weeklyCash[i]).toFixed(2))) + 
            (weeklyCredit[i] === null || weeklyCredit[i] === '' ? 0 : parseFloat(parseFloat(weeklyCredit[i]).toFixed(2)));

        }
        temp = Math.trunc(temp * 100) / 100
        let tempToString: string[] = temp.toString().split(".");
        if (tempToString.length === 2 && tempToString[1].length === 1) {
            tempToString[1] += "0"
        }

        sum = "$" + tempToString.join(".");
    }

</script>

<div class='w-full h-[100%]'>
    <ul class='w-full bg-[#1d1d1d] text-white flex flex-wrap'>
        {#each days_of_week as day, i}
            <h1 class='day'> {day} </h1>
            <div class='w-full flex justify-between'>
                <div class='w-full flex flex-col gap-1 mx-auto'>
                    <p class='w-[85%] mx-auto font-semibold'> Cash </p>  
                    <input id="cash-{i}" class='w-fit' type="number" pattern="[0-9]*" inputmode="decimal" placeholder="Enter the total here" bind:value={weeklyCash[i]} 
                        on:input={() => {
                        validateAmount(weeklyCash[i], i, "cash")
                        calcSum()}} />
                    {#if cashInput[i][1] === false}
                        <p class='warning'> ⚠ Warning: Input is invalid. Please use digits up to 2 decimal places. Calculation may be incorrect</p>
                    {/if}
                </div>
                <div class='w-full flex flex-col gap-1 mx-auto'>
                    <p class='w-[85%] mx-auto font-semibold'> Credit </p>
                    <input id="credit-{i}" class='w-fit' type="number" pattern="[0-9]*" inputmode="decimal" placeholder="Enter the total here"  bind:value={weeklyCredit[i]} 
                    on:input={() => {
                        validateAmount(weeklyCredit[i], i, "credit")
                        calcSum()}} />
                    {#if creditInput[i][1] === false}
                        <p class='warning'> ⚠ Warning: Invalid Input. Please use digits up to 2 decimal places. Calculation may be incorrect</p>
                    {/if}
                </div>
            </div>
        {/each}
    </ul>
    <p class='day'> Total: {sum} </p>
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