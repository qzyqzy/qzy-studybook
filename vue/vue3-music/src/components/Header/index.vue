<template>
  <div class="header">
    <span class="icon"></span>
    <h1 class="text">Chicken Music</h1>
  </div>
</template>

<script>
export default {
  name: "header",
};
</script>

<style scoped lang="less">
.header {
  height: 44px;
  color: @color-theme;
  font-size: 0;
  text-align: center;

  .icon {
    display: inline-block;
    width: 30px;
    height: 32px;
    margin-top: 6px;
    margin-right: 9px;
    vertical-align: top;
    background-size: 30px 32px;
    .bg-image("logo");
  }

  .text {
    display: inline-block;
    font-size: @font-size-large;
    line-height: 44px;
    vertical-align: top;
  }

  .mine {
    position: absolute;
    top: 0;
    right: 0;

    .icon-mine {
      display: block;
      padding: 12px;
      color: @color-theme;
      font-size: @font-size-large-x;
    }
  }
}
</style>
