<template>
    <div>
        <table style="border: 2px solid black;">
            <tr>
                <td>title</td>
                <td>userId</td>
                <td>id</td>
            </tr>

            <tr v-for="item in list" v-bind:key="item.id">
                <td>{{ item.title }}</td>
                <td>{{ item.userId }}</td>
                <td>{{ item.id }}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name: 'EmployeeList',
    data() {
        return {
            list: []
        }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data =>

                this.list = data

            ).catch((err) => {
                console.log(err);
            })
    }

};
</script>
