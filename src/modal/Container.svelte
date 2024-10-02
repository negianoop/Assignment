<script>   
    import { fade } from 'svelte/transition';
    import Icon from './Icon.svelte';
    import Left from './Left.svelte'
    import Right from './Right.svelte'
    import { hasLoginClicked, hasRightAnimationFinished } from './store.js';
    import { onDestroy } from 'svelte';
    
    onDestroy(()=>{
        hasLoginClicked.set(false); 
    }); 

    
</script>

    <div style='background-color:{$hasRightAnimationFinished ? 'white':'initial'}' out:fade={{delay:100}}>
        <Icon/>
        <Left/>
        <Right/>
    </div>

<style>
    div{
        display: flex; 
        position: relative;
        justify-content: center;
        align-items: center;
        width: 1300px;
        height: 700px;
        overflow: hidden;
        border-radius: 15px;
    }

</style>