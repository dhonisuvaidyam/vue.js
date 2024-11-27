<template>
    <!-- <div class=" text-center  text-3xl">
        <h1>I am Vishwash</h1> -->
    <!-- <h1>{{ data }}</h1>
        <h1>{{ msg }}</h1>
        <button v-on:click="Namaste" class="border p-3 rounded bg-blue-600">Welcome</button> -->
    <!-- <button v-on:mouseover="pranam" class="border p-3 text-2xl rounded bg-blue-600 mb-32 mt-10">Pranam</button>
        <p v-if="show">Expect or Accept, choose wisely</p>
        <p v-else>Billo bagge billiyaan da ki karengi</p>
        <button v-on:click="display" class="border p-3 rounded bg-blue-600 mt-10">Knowledge</button> -->
    <!-- <table>
        <tr>
            <td>No</td>
            <td>name</td>
            <td>village</td>
        </tr>
        <tr v-for="user in users" :key="user.id">
            <td>{{ user.No }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.village }}</td>
        </tr>
    </table> -->
    <!-- </div> -->
    <div></div>
</template>
<script>
export default {
    name: 'Home',
    props: {
        data: String,
        msg: String
    },
    // data() {
    //     return {
    //         show: false,

    //     }
    // },
    // methods: {
    // Namaste() {
    //     console.log("Namaste Amresh Bhaiya")
    // },
    //     pranam() {
    //         alert("Pranam Amresh bhaiya")
    //     },
    //     display() {
    //         this.show = !this.show;
    //     }
    // }


    // data() {
    //     return {
    //         users: [
    //             { No: 1, name: "Dhoni", village: "Adhupur" },
    //             { No: 2, name: "Samar", village: "Dumariya" },
    //             { No: 1, name: "Rahul", village: "Chainpur" },
    //         ],
    //     }
    // },


}
</script>
