<!-- <template>
    <div class="text-center">
        <h1 class="text-5xl m-10">composition of components</h1>
        <h3 v-for="user in clients" :key="user.name" class="text-2xl  ">
            {{ user.name }} --{{ user.email }}
        </h3>
        <button class="border p-2 rounded" v-on:click="updatetitle">update title</button>
    </div>
</template>
<script>
export default {
    name: 'props',
    props: ['clients'],
    methods: {
        updatetitle() {
            this.$emit('changetitle', "parent updated")
        }
    }
}
</script> -->