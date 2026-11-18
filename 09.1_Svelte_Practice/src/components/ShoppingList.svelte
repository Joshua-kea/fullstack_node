<script>
import ShoppingItem from "./ShoppingItem.svelte";

  const title = "Shopping list";

  let items = $state([
    { id: 1, name: "Milk" },
    { id: 2, name: "Bread" },
    { id: 3, name: "Eggs" },
    { id: 4, name: "Butter" }
  ]);

  let newItem = $state("");

  function addItem() {
    items.push({id: Date.now(), name: newItem });

    newItem = "";
  }

  function handleRemove(id){
    items = items.filter((item) => {
        return id != item.id
    });
  }
</script>
<h1>{title}</h1>
<h2>There are {items.length} items on your shopping list</h2>

{#each items as item (item.id)}
<ShoppingItem id={item.id} name={item.name} onRemove={handleRemove} />
{/each}

<input bind:value={newItem} placeholder="New Item" />
<button onclick={addItem}>Add</button>