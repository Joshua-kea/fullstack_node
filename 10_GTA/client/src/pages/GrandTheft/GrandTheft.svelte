<script>
  import { fetchGet } from "../../util/fetch.js";

    let crime = $state('Sneezing too loud');

    async function getWantedStatus() {
        const result = await fetchGet('/api/crimes')
        console.log(result);
    }

    async function commitCrime() {
        const result = await fetchGet('/api/crimes', { crime });
        console.log(result);

        getWantedStatus();
    }

</script>

<h1>Grand Theft</h1>
<h3>Wanted Status: 0</h3>

<input bind:value={crime}>
<button onclick={commitCrime}>Commit Crime</button>