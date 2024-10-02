<script>
    import { hasLoginClicked, hasRightAnimationFinished } from "./store";
    import Input from "./Input.svelte";
    import { fly } from "svelte/transition";
    import { onDestroy } from "svelte";
    import { quintOut } from "svelte/easing";
    import Header from "./Header.svelte";
    
    onDestroy(()=>{
        hasRightAnimationFinished.set(false);
    });

    function handleClick(){
      hasLoginClicked.set(true);
    }

    function enlargeWidth(node, { delay=600, duration = 600 }){
      return {
        delay,
        duration,
        css: (t) => {
          return `
            width: ${t * 100}%;
            `;
        }
      };
    }

    const defs = {easing:quintOut, duration:1000, delay:300}

    let isWidthEnlarged = false;

</script>

{#if $hasRightAnimationFinished}
    <div class= 'modal-left'
        in:enlargeWidth 
        on:introend={()=>{isWidthEnlarged=true}}
    >
      {#if isWidthEnlarged}
          <Header/>
          <h1 class="modal-title" 
              in:fly={{y:40, ...defs}}
              out:fly={{y:-40}}
          >
              Welcome Back!
          </h1>

          <p class="modal-desc" in:fly={{y:50, ...defs}} out:fly={{y:-50}}
          >
              Fanny pack hexagon food truck, street art waistcoat kitsch.
          </p>
          
          <Input type='Email' {defs}/>
          <Input type='Password' {defs}/>
      
          <button class="login-button" in:fly={{y:70,...defs}} out:fly={{y:-70}} on:click={handleClick}
          >
              Login
          </button>
      
          <p class="sign-up" in:fly={{y:80,...defs}} out:fly={{y:-80}}
          >
              Don't have an account? <a href="/#">Sign up now</a>
          </p>
      {/if}
    </div>
{/if}

<style>

.modal-left{ 
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:100%; 
  position: relative;
  height: 100%;
}

.modal-title {
  text-align: center;
  max-width: 372px;
  transition-delay: 0.2s;
}

.modal-desc {
  margin: 6px 0 30px 0;
  text-align: center;
  max-width: 372px;
}

.sign-up {
  margin: 60px 0 0;
  font-size: 14px;
  text-align: center;
  max-width: 372px;
}

.sign-up a {
  color: rgba(0, 128, 0, 0.853);
}

.login-button {
  padding: 15px 12px;
  width: 100%;
  font-weight: bold;
  /* font-size:15px; */
  outline: none;
  border: 0;
  color: #fff;
  border-radius: 20px;
  background: rgba(0, 128, 0, 0.765);
  font-family: "Nunito", sans-serif;
  transition: 0.3s;
  max-width: 372px;
  cursor: pointer;
}

.login-button:hover {
  background: rgba(0, 128, 0, 0.853);
}

</style>