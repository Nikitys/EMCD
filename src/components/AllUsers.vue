<script setup>
  /**
   * @file File description
   * @module Module name
   */

  import { ref, onMounted } from 'vue';
  import { useUsersStore } from '../stores/users';
  import OneUser from './OneUser.vue';
  import CirclePreloader from './CirclePreloader.vue';

  /**
   * Users store
   * @type {Object}
   */
  const usersStore = useUsersStore();

  /**
   * Preloader reference
   * @type {Object}
   */
  const preloader = ref(null);

  /**
   * Handler for the intersection observer
   * @param {Array} elems - Array of observed elements
   */
  const handleObserver = (elems) => {
    elems.forEach((elem) => {
      if (elem.isIntersecting) {
        usersStore.info.page++;
        usersStore.fetchUsers();
      }
    });
  };

  /**
   * Lifecycle hook onMounted
   */
  onMounted(() => {
    /**
     * Intersection observer
     * @type {IntersectionObserver}
     */
    const observ = new IntersectionObserver(handleObserver);

    observ.observe(preloader.value);
  });
</script>

<template>
  <div class="main">
    <div v-if="usersStore.getUsers.length > 0" class="users">
      <OneUser
        v-for="user in usersStore.getUsers"
        :key="user.id.value"
        :user="user"
      />
    </div>
  </div>
  <div ref="preloader" class="preloader">
    <CirclePreloader />
  </div>
</template>

<style lang="scss" scoped>
  .users {
    max-width: 920px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    gap: 10px;
  }
  .preloader {
    display: flex;
    justify-content: center;
    padding: 30px;
  }
</style>
