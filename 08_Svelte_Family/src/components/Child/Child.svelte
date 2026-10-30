<script>
    const { name, familySheep, isGirl, onShowLove, onEatCookie, cookieCount = $bindable() } = $props();

    import { fridgeMessages } from "../../stores/fridgeMessagesStore.js";

    let fridgeMessageInput = $state("");

    function writeFridgeMessage() {
        // fridgeMessages.set([...$fridgeMessages, { name, message: fridgeMessageInput }]);

        fridgeMessages.update((fridgeMessagesStoreValue) => {
            fridgeMessagesStoreValue.push({ name, message: fridgeMessageInput });
            return fridgeMessagesStoreValue;
        });

        fridgeMessageInput = "";
    }

</script>

<div 
    class={familySheep || "not-a-sheep"}
    class:is-girl={isGirl}
    class:is-boy={!isGirl}
>
    <h2>I am {name}</h2>

    <button onclick={() => onShowLove(name)}>Show Love</button>

    <button onclick={() => onEatCookie(name)}>Eat a cookie</button>

    <input bind:value={fridgeMessageInput}>
    <button onclick={writeFridgeMessage}>Write fridge message</button>
</div>

<style>
    .black-sheep h2 {
        color: blueviolet;
    }

    .grey-sheep h2 {
        color: darkolivegreen;
    }

    .not-a-sheep h2 {
        color: greenyellow;
    }

    .is-girl {
        border: 0.3rem dashed blue;
    }

    .is-boy {
        border: 0.3rem dashed aquamarine;
    }
</style>