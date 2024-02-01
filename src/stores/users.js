import { defineStore } from 'pinia';
import axios from 'axios';

/**
 * Store for working with users
 */
export const useUsersStore = defineStore({
  id: 'users',
  state: () => ({
    /**
     * Array of users
     * @type {Array<Object>}
     */
    users: [],
    /**
     * Flag indicating the data loading state
     * @type {boolean}
     */
    payload: false,
    /**
     * Page and results information
     * @type {Object}
     */
    info: {
      page: 1,
      results: 10
    }
  }),
  getters: {
    /**
     * Get the array of users
     * @returns {Array<Object>}
     */
    getUsers: (state) => state.users
  },
  actions: {
    /**
     * Fetch users
     * @returns {Promise<void>}
     */
    async fetchUsers() {
      const params = this.info;
      try {
        this.payload = true;
        const response = await axios.get('https://randomuser.me/api', {
          params
        });
        this.users = [
          ...this.users,
          ...response.data.results.map(({ name, id, picture }) => ({
            name,
            id,
            picture
          }))
        ];
      } catch (error) {
        console.error(error);
      } finally {
        this.payload = false;
      }
    }
  }
});
