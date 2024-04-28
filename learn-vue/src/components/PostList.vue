<template>
  <div class="post-list" v-if="posts.length > 0">
    <h4>Post List</h4>
    <!-- <post-item class="post" v-for="post in posts" :post="post" :key="post.id"
    @remove="$emit("remove", post)" /> -->

    <transition-group name="post-list">
      <post-item
        class="post"
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <h3 v-else>List is empty</h3>
</template>

<script>
import PostItem from "./PostItem.vue";

export default {
  components: {
    PostItem,
  },

  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.post-list {
  margin-top: 30px;
}

.post-list-move {
  transition: all 1s ease;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
