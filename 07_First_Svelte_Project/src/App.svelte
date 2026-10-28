<script>
  import Weapons from "./components/Weapons/Weapons.svelte";
  
  import Planets from "./components/Planets/Planets.svelte";

  const version = "First";

</script>

<h1>My {version} Svelte Project</h1>

<h3>Under construction</h3>

<Weapons weapon={"Scimitar"} damage={4}></Weapons>

<Planets></Planets>

<style>
  h1 {
    color: bisque;
  }
</style>