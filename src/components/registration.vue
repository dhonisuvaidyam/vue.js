<template>
    <div>
        <h1>Hello everyone</h1>
        <ul>
            <li v-for="item in error" v-bind:key="item">{{ item }} not valid</li>
        </ul>

        <p>{{ form }}</p>

        <form>
            <label>Name : </label>
            <input type="text" placeholder="enter your name" v-model="form.Name"> <br> <br>

            <label>email : </label>
            <input type="email" placeholder="enter your name" v-model="form.email"><br> <br>

            <label for=""> Country </label>
            <select v-model="form.country" placeholder="Country">
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="China">China</option>
                <option value="Russia">Russia</option>
            </select>

            <h3>Gender</h3>
            <label>male </label>
            <input type="radio" v-model="form.gender" v-on:change="genderChange" value="male">
            <br> <br>

            <label>female </label>
            <input type="radio" v-model="form.gender" v-on:change="genderChange" value="female"> <br> <br>


            <button v-on:click="login" type="button">Login</button>


        </form>
    </div>
</template>
<script>
export default {
    name: 'registration',
    data() {
        return {
            form: {
                Name: "",
                email: "",
                country: "",
                gender: ""
            },
            error: [],
        }
    },
    methods: {
        login() {
            this.error = [];
            for (const item in this.form) {
                if (this.form[item] === "" || this.form[item].length === 0) { this.error.push(item) }
            }

            if (this.error.length === 0) {
                alert("form is submitted ")
            }

            console.warn(this.form, this.error)
        },
        genderChange(event) {
            let value = event.target.value
            if (value) {
                this.error = this.error.filter((err) => err != "gender")
            }
        }
    }
}
</script>