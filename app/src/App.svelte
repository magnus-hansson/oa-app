<script>
  import { onMount } from "svelte";
  import API from "./config";
  export let name;
  onMount(async () => await getProducts());
  async function getProducts() {
    try {
      const response = await fetch(`${API}/clubs`, {
        method: "GET"
      });
      const products = await parseList(response);
      console.log(products);
      return products;
    } catch (error) {
      return console.log(error);
    }
  }
  const parseList = async response => {
    if (response.status !== 200)
      throw Error(response.message || `Error, status ${response.status}`);
    let list = await response.json();
    if (typeof list !== "object") {
      list = [];
    }
    return list;
  };
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</main>
