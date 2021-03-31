# vue-telescope

Vue telescope is a simple text truncation lib for your Vue3 projects


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
 <p v-telescope="{ length: 6 }">truncation text</p>
</template>
```
## Settings

```
{length: Number}
```

## License

MIT
