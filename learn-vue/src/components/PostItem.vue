<template>
  <div class="post">
    <div>
      <div><strong>Post name:</strong> {{ post.title }}</div>
      <div><strong>Post text:</strong> {{ post.body }}</div>
    </div>
    <my-button @click="$emit('remove', post)">Delete</my-button>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  methods: {},
};
</script>

<style>
.post {
  margin: 10px 0;
  padding: 15px;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
}
</style>
