<script>
    import { quintOut } from 'svelte/easing';
    import {fly} from 'svelte/transition'
    export let type;
    export let defs;
</script>

<div class="input-block" transition:fly={{y:60, ...defs}}>
    <label for={type} class="input-label">{type}</label>
    <input type={type.toLowerCase()} name={type} id={type} placeholder={type}>
</div>

<style>
.input-label {
  font-size: 11px;
  text-transform: uppercase;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  letter-spacing: 0.7px;
  color: #8c7569;
}

.input-block {
  display: flex;
  flex-direction: column;
  padding: 10px 10px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  max-width: 350px;
  width:100%;
}

.input-block input {
  outline: 0;
  border: 0;
  padding: 4px 0 0;
  font-size: 14px;
  font-family: "Nunito", sans-serif;
}


.input-block input::placeholder {
  color: #ccc;
  opacity: 1;
}

.input-block:focus-within {
  border-color: #8c7569;
}

.input-block:focus-within .input-label {
  color: rgba(140, 117, 105, 0.8);
}
</style>