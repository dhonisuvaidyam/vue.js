<template>
    <div v-if="error.length">
        <b>please, correct the following errors</b>
        <ul>
            <li v-for="e in error" v-bind:key="e.id">{{ e }}</li>

        </ul>
    </div>

    <form @submit="login" class="mx-auto mt-28 border p-10 rounded w-fit">
        <input type="text" placeholder="enter name" v-model="name" class="border p-2 rounded" /> <br> <br>
        <input type="text" placeholder="enter password" v-model="password" class="border p-2 rounded" /> <br> <br>
        <button type="submit" class="border p-2 rounded bg-blue-500">login</button>
    </form>
</template>
<script>


export default {
    name: 'ajmat',
    data() {
        return {
            error: [],
            name: null,
            password: null
        }
    },
    methods: {
        login(e) {
            e.preventDefault();
            this.error = []

            if (this.name && this.password) {
                console.warn("no error")
            }
            if (!this.name) {
                this.error.push("user name is required");
                return console.log('Name id Rqd.');

            }
            if (!this.password) {
                this.error.push("password is required");
                return console.log('Password id Rqd.');
            }
            console.log(this.name);
            console.log(this.password);
        }
    }
}
</script>
