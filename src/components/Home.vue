<template>
    <div class=" text-center  text-5xl">
        <!-- <h1>I am Vishwash</h1>
        <h1>{{ data }}</h1>
        <h1>{{ msg }}</h1>
        <button v-on:click="Namaste" class="border p-3 rounded bg-blue-600">Welcome</button> -->
        <button v-on:mouseover="pranam" class="border p-3 text-2xl rounded bg-blue-600 mb-32 mt-10">Pranam</button>
        <p v-if="show">Expect or Accept, choose wisely</p>
        <p v-else>Billo bagge billiyaan da ki karengi</p>
        <button v-on:click="display" class="border p-3 rounded bg-blue-600 mt-10">Knowledge</button>
    </div>
</template>
<script>
export default {
    name: 'Home',
    props: {
        data: String,
        msg: String
    },
    data() {
        return {
            show: false,

        }
    },
    methods: {
        // Namaste() {
        //     console.log("Namaste Amresh Bhaiya")
        // },
        pranam() {
            alert("Pranam Amresh bhaiya")
        },
        display() {
            this.show = !this.show;
        }
    }
}
</script>
