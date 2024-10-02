<script>
    import {hasLoginClicked, toggleModal} from './store.js';
    import { quintOut } from "svelte/easing";
    import { scale } from "svelte/transition";

    const scaleProps = {delay:1200, easing:quintOut, duration:400};

    function handleAnimationEnd(event){
        if(event.animationName == 'rev'){
            toggleModal.set(false); 
        }
    }
    

</script>

<div class={$hasLoginClicked ? 'animate-out':'div'} in:scale={{...scaleProps}} on:animationend={handleAnimationEnd}>
    <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="green" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
</div>

<style>
    div{
        position: absolute;
        display: flex; 
        align-items: center;
        justify-content: center;
        width: 70px; 
        height: 70px; 
        left: 48%; 
        top: 50%;
        background-color: white;
        border-radius: 50%;
        animation: anim;
        animation-timing-function: cubic-bezier(.23,-0.37,0,1.01);
        animation-fill-mode: forwards;
        animation-delay: 400ms;
        animation-duration: 750ms;
        text-align: center;
    }
     
    .animate-out{
        animation: rev;
        animation-duration: 750ms; 
        animation-timing-function: cubic-bezier(.23,-0.37,0,1.01);
    }
    @keyframes rev{
        from{
            left: 10px; 
            top: 10px;
            rotate: 360deg;
        }
        to{
            left: 48%; 
            top: 50%; 
        }
    }

    @keyframes anim{
        to{
            left:10px;
            top:10px;
            rotate: 360deg;
        }
    }


</style>