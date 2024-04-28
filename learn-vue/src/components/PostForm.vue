<template>
  <form class="form" @submit.prevent>
    <h4>Add post</h4>
    <!-- <input v-model="post.title" type="text" placeholder="Post name" /> -->
    <my-input v-model="post.title" placeholder="Post title" />
    <my-input
      v-bind:value="post.body"
      @input="post.body = $event.target.value"
      placeholder="Post text"
    />
    <!-- <input
      v-bind:value="post.title"
      @input="post.title = $event.target.value"
      class="input"
      type="text"
      placeholder="Post name"
    /> -->
    <!-- <input
      v-bind:value="post.text"
      @input="post.text = $event.target.value"
      class="input"
      type="text"
      placeholder="Post text"
    /> -->

    <my-button class="add-btn" type="submit" @click="createPost">
      Add Post
    </my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },

  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.add-btn {
  width: 100%;
}
</style>
