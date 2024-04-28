<template>
  <input class="input" :value="modelValue" @input="updateInput" type="text" />
</template>

<script>
export default {
  name: "my-input",

  props: {
    modelValue: [String, Number],
  },

  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  padding: 10px 15px;
  width: 100%;
  border: 1px solid rgb(0, 255, 51);
}
</style>
