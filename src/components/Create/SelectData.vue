<template>
    <div class= "select">
        <div id="SelectTitle">{{Msg}}</div>
        <select id="in">
            <option>first_ca</option>
            <option>second_ca</option>
        </select> 
    </div>
</template>

<script>
import Default from '../../views/default.vue'

export default {
  components: {  Default },

    props:{
        Msg:{
            type:String,
            default: "預設文字",
        },
    },
    data(){
        return{
        }
    },
    mounted() {
      onbeforeunload = (event) => { this.reload };
    }

}
</script>

<style>

    .select{
        /* background-color: red; */
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 15%;
    }
    #in{
        height: 50%;
        width: 60%;
    }
    #SelectTitle{
        height: 50%;
        width: 20%;
        font-size: 20px;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
    }
    input:focus{
      outline: none;
    }


</style>