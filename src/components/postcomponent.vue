<template>
    <form @submit="submitdata" method="post">
        <input type="text" name="title" v-model="post.title"> <br> <br>
        <input type="text" name="author" v-model="post.author"> <br> <br>
        <button>post</button>
    </form>
</template>
<script>
import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


export default {
    name: 'postcomponent',
    data() {
        return {
            post: {
                title: null,
                author: null
            }
        }
    },
    methods: {
        submitdata(e) {
            e.preventDefault();
            this.axios.post('http://localhost:5173/posts', this.post).then((result) => { console.warn('result', result) })
        }
    }
}

</script>