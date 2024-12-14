<template>
    <slot name="dhoni">
        <h1>Dhoni is the best</h1>
    </slot>
    <slot name="samar">
        <h1>Dhoni is the best</h1>
    </slot>
    <slot name="aniket">
        <h1>Dhoni is the best</h1>
    </slot>
    <slot name="rahul">
        <h1>Dhoni is the best</h1>
    </slot>


</template>
<script>
export default {
    name: 'child'
}
</script>
<div style=" padding: 20px; display: flex; flex-wrap: wrap; gap: 30px; justify-content: center;  ">
    <div style="text-align: center;">
      <child>
        <template v-slot:dhoni>
          <h1>Wihout Dhoni life is boring</h1>
        </template>

        <template v-slot:samar>
          <div><a href="#"> Do you know who i am? </a></div>
</template>

<template v-slot:aniket>
          <img src="https://i.pinimg.com/564x/21/e1/51/21e1511ec49126f5cab3fa3638164aea.jpg"
            style="height: 600px; width: 500px;" />
        </template>

<template v-slot:rahul>
          <h1>MAHENDRA SINGH DHONI</h1>
        </template>

</child>
</div>
<div style="text-align: center;">
      <child>
        <template v-slot:dhoni>
          <h1>Wihout Virat life is boring</h1>
        </template>

        <template v-slot:samar>
          <div><a href="#"> Do you know who i am? </a></div>
</template>

<template v-slot:aniket>
          <img src="https://static.tnn.in/photo/107445058/107445058.jpg" style="height: 600px; width: 500px;" />
        </template>

<template v-slot:rahul>
          <h1>VIRAT KOHLI</h1>
        </template>
</child>
</div>
<div style="text-align: center;">
      <child>
        <template v-slot:dhoni>
          <h1>Wihout Rohit life is boring</h1>
        </template>

        <template v-slot:samar>
          <div><a href="#"> Do you know who i am? </a></div>
</template>

<template v-slot:aniket>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHP4LSlrklHTfwZGRLSi_y5s-uB5hWShiBA&s"
            style="height: 600px; width: 500px;" />
        </template>

<template v-slot:rahul>
    <h1>ROHIT SHARMA</h1>
</template>
</child>
</div>
</div>

</template>


<script>
import Child from './components/child.vue';
