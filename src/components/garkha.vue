<template>
    <div class="dhoni">
        <h1 v-bind:class="{ bittu: show, }">Samar</h1>
        <h2 v-bind:style="{ color: 'blue' }">composing with components</h2>
    </div>
</template>
<script>
export default {
    name: 'garkha',
    data() {
        return {
            show: true
        }
    }
};
</script>
<style scoped>
.dhoni {
    background-color: rgb(235, 161, 78);
    text-align: center;
    font-size: 30px;
    width: 400px;
    height: 200px;
    margin: 20px;
}

.bittu {
    color: red;
    background-color: aqua;
}
</style>