<script>
    let { weapon, damage } = $props();
    
    function resetDamage() {
        damage = 0;
    }
</script>

<p>{weapon}</p>
<p>{damage}</p>
<button onclick={() => damage++}>Increase damage</button>
<button onclick={resetDamage}>Reset damage</button>