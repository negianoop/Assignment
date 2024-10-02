<script>
    import { fly } from "svelte/transition";


</script>


<div class="header">
    <div class="header-left" style="margin-left:19px;" in:fly={{x:-50}} out:fly={{x:50}}>
        <p style="font-size:25px; font-weight:bold;">Regions</p>
        <p>Mortgage</p>
    </div>
    <div class="header-right" in:fly={{x:50}} out:fly={{x:-50}}>
        <p style="margin-top:10px; margin-right:10px; color:#878787">Are you a new customer ?</p>
        <button>Enroll Now</button>
    </div>
</div>

<style>
    .header{
        display: flex; 
        position: absolute;
        width: 100%; 
        top: 20px;  
        align-items: center;
        justify-content: space-around;
    }
    
    p{
        margin:0;
    }

    .header-right{
        display: flex; 
    }
    
    button {
        padding: 10px 10px;
        outline: none;
        border: 1px solid green;
        color: green;
        border-radius: 20px;
        font-weight: bold;
        background-color: white;
        font-family: "Nunito", sans-serif;
        cursor: pointer;
    }
    
</style>