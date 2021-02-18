<template>
  <v-autocomplete
    :items="entries"
    :search-input.sync="search"
    color="grey"
    item-text="name"
    item-value="name"
    hide-no-data
    hide-selected
    placeholder="Search"
    return-object
    append-icon="mdi-magnify"
    @click:append="searchAction"
    solo
    clearable
    :class="styles ? 'searchbar search-on' : 'searchbar search-off'"
  >
    <template v-slot:item="{ item }">
      <v-list-item link :to="'/search?q=' + item.slug">{{
        item.name
      }}</v-list-item>
    </template></v-autocomplete
  >
</template>

<script>
export default {
  data: () => ({
    descriptionLimit: 60,
    entries: [],
    isLoading: false,
    error: '',
    search: null
  }),
  computed: {
    styles() {
      return this.entries.length > 0 ? true : false;
    }
  },
  methods: {
    searchAction() {
      if (!this.search || !this.search.length > 0) {
        return;
      }

      this.$root.$router.push({
        path: `/search`,
        query: { q: this.search }
      });
    },
    mock(success, timeout) {
      const data = [
        { id: 1, name: 'Spotify', slug: 'spotify' },
        { id: 2, name: 'Settings', slug: 'settings' },
        { id: 3, name: 'Samsung', slug: 'samsung' },
        { id: 4, name: 'Staples', slug: 'staples' }
      ];

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (success) {
            resolve(data);
          } else {
            reject({ message: 'Error fetching API data.' });
          }
        }, timeout);
      });
    }
  },
  watch: {
    async search() {
      try {
        if (this.entries.length > 0) return;

        if (this.isLoading) return;

        this.isLoading = true;

        const data = await this.mock(true, 1000);

        this.entries = data;
      } catch (error) {
        this.error = error;
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>

<style>
.searchbar {
  max-width: 700px !important;
  margin: 0 auto !important;
}

.searchbar .notranslate {
  transform: none !important;
}
</style>
