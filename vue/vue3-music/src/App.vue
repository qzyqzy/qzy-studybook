<template>
  <Header />
  <router-view />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";

export default {
  name: "app",
  components: {
    Header,
  },
};
</script>
<style lang="less">
</style>
