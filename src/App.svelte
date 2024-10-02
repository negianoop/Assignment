<script>
    import Container from "./modal/Container.svelte";
    import { hasLoginClicked } from "./modal/store";
    let checkbox = false;
    
</script>

<header>
  <label>
    <input type="checkbox" bind:checked={checkbox}/>
     Toggle Modal
  </label>
</header>


{#if checkbox}
  <Container/>
{/if}

<style>
  :global(body){
    margin:0;
    height: 100vh;
  }
  :global(#app){
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: rgb(51 51 51 / 50%);
  }

  header{
    position: absolute;
    align-self:center;
    padding: 20px;
    transform: scale(2);
    top:10px;
  }
</style>