<template>
    <button @click="dhoni = 'php'">Load php</button>
    <button @click="dhoni = 'java'">Load java</button>
    <button @click="dhoni = 'node'">Load node</button>

    <component :is="dhoni" />

</template>
<script>
import php from './php.vue';
import java from './java.vue';
import node from './node.vue';

export default {
    name: 'compo',
    components: {
        php, java, node
    },
    data() {
        return {
            dhoni: ''
        }
    }
}
</script>