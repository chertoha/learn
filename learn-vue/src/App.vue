<template>
  <div class="app">
    <!-- <my-button @click="fetchPosts">TEMP BTN</my-button> -->
    <h1>Posts page</h1>
    <my-input v-model="searchQuery" />

    <div class="app__buttons">
      <my-button @click="showDialog">Add Post</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <!-- <post-list :posts="posts" @remove="deletePost" /> -->
    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostLoading"
    />
    <div v-else>LOADING....</div>
  </div>
</template>

<script>
import PostForm from "./components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
  },

  data() {
    return {
      dialogVisible: false,

      posts: [],

      isPostLoading: false,

      selectedSort: "",
      sortOptions: [
        {
          value: "title",
          name: "by title",
        },
        {
          value: "body",
          name: "by text",
        },
      ],

      searchQuery: "",
    };
  },

  methods: {
    createPost(post) {
      // console.log(post);

      this.posts.push(post);
      this.dialogVisible = false;
    },

    removePost(post) {
      // console.log(post.id);

      this.posts = this.posts.filter((p) => p.id !== post.id);
    },

    showDialog() {
      this.dialogVisible = true;
    },

    async fetchPosts() {
      try {
        this.isPostLoading = true;
        setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts?_limit=10"
          );
          this.posts = response.data;
          console.log(response);
          this.isPostLoading = false;
        }, 1000);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort((p1, p2) =>
        p1[this.selectedSort]?.localeCompare(p2[this.selectedSort])
      );
    },

    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(
        ({ title, body }) =>
          title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          body.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },

  watch: {
    // selectedSort(newValue) {
    //   this.posts.sort((p1, p2) => p1[newValue]?.localeCompare(p2[newValue]));
    // },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.app {
  margin: 0;
  padding: 30px;
}

.app__buttons {
  display: flex;
  justify-content: space-between;
}
</style>
