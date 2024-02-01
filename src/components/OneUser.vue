<script setup>
  defineProps({
    /**
     * User object
     * @type {Object}
     * @required
     */
    user: {
      type: Object,
      required: true
    }
  });
</script>

<template>
  <div class="user-card">
    <img :src="user.picture.large" :alt="user.name.first" class="picture" />
    <div class="name">
      <span class="first">{{ user.name.first }}</span>
      <span class="last">{{ user.name.last }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .user-card {
    width: 100%;
    max-width: 600px;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid rgba(#000, 0.2);
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;
    & > .picture {
      width: 100%;
      max-width: 100px;
      margin: 0 auto;
      border-radius: 50%;
      margin-bottom: 16px;
    }
    & > .name {
      text-align: center;
      & > .first {
        margin-right: 6px;
      }
    }
  }
</style>
