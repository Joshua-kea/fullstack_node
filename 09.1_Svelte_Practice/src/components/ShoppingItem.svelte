<script>
    const { id, name, onRemove } = $props();
</script>

<p>{name}</p>

<button onclick={() => onRemove(id)}>Remove item</button>