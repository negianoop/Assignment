<script>
    import { fade } from 'svelte/transition';
    import {hasRightAnimationFinished, hasLoginClicked} from './store.js';
    import { onDestroy } from 'svelte';
    
    function update(){
        hasRightAnimationFinished.set(true); 
    }

</script>

<div on:animationend = {update}>

</div>

<style>
    div{
        border-radius:15px;
        animation: fill-spread 1s ease-in-out;
        animation-fill-mode: forwards;
        background-image: url(https://images.unsplash.com/photo-1538137524007-21e48fa42f3f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ac9fa0975bd2ebad7afd906c5a3a15ab&auto=format&fit=crop&w=1834&q=80);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        object-fit: cover;
        animation-duration: 700ms; 
        animation-delay:700ms;
    }

    @keyframes fill-spread {
        0% {
            width: 50px;
            height: 50px;
        }

        100%{
            width: 100%; 
            height: 100%; 
        }
    }
</style>