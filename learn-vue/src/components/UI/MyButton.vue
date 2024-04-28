<template>
  <button class="btn" type="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",

  // props: {
  //   content: {
  //     default: "Button",
  //     type: String,
  //   },
  // },
};
</script>

<style scoped>
.btn {
  cursor: pointer;
  padding: 10px;
  background-color: transparent;
  border: 1px solid green;
  border-radius: 5px;
}
</style>
