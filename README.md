# vue-telescope

Vue telescope is a simple text truncation lib for your Vue3 projects

[![latest version on npm](https://img.shields.io/npm/v/vue-telescope)](https://www.npmjs.com/package/vue-telescope) [![npm downloads a month](https://img.shields.io/npm/dm/vue-telescope)](https://www.npmjs.com/package/vue-telescope) [![bundlephobia minified size](https://badgen.net/bundlephobia/min/vue-telescope)](https://bundlephobia.com/result?p=vue-telescope@0.0.3)


## How to use

```
npm i vue-telescope
```

```js/ts
import { createApp } from "vue";
import App from "./App.vue";
import telescope from 'vue-telescope'
import "./assets/styling/index.css";

const app = createApp(App)

app.use(telescope)
app.mount('#app')
```

```vue
<template>
 <p v-telescope="{ length: 12 }">truncated text</p>
</template>
```

## Output

![image](https://drive.google.com/uc?export=view&id=14zhnJP0FXxUkJLIzaSdd6_brAP08_Eug)

## Settings

```
{length: Number}
```

## License

MIT
