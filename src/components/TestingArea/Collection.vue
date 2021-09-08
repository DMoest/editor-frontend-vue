<template>
  <!-- Record store -->
  <div class="p-8 border-b-2 border-blue-500">
    <h2 class="text-2xl">Records Collection</h2>

    <div class="new">
      <h3>Add new album</h3>
      <form @submit.prevent="addAlbum">
        <input class="p-2 bg-gray-100 border-2 m-4 rounded"
               v-model="newBand"
               placeholder="band name"
               required>
        <input class="p-2 bg-gray-100 border-2 m-4 rounded"
               v-model="newAlbum"
               placeholder="album name"
               required>
        <select class="p-2 bg-gray-100 border-2 m-4 rounded"
                v-model="newCategory"
                required>
          <option value="" disabled>Add a new category</option>
          <option v-for="category in categories" :key="category">{{ category }}</option>
        </select>
        <button class="block m-auto py-2 px-3 bg-blue-500 rounded" type="submit">Add New Record Post</button>
      </form>
    </div>

    <select v-model="selected"
            class="p-2 bg-gray-100 border-2 m-4 rounded">
      <option value="" disabled>Filter with a category</option>
      <option v-for="category in categories" :key="category">{{ category }}</option>
    </select>

    <div v-for="album in filteredByCategory"
         :key="album.album"
         class="album w-3/4 m-auto block px-8 py-4 bg-gray-100 rounded mb-1 flex flex-row justify-between hover:bg-blue-200">
      <small class="w-full text-sm text-left">{{ album.band }}</small>
      <p class="w-full text-sm text-left">{{ album.album }}</p>
      <span class="w-full category capitalize text-sm text-left">{{ album.category }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collection",
  data() {
    return {
      selected: '',
      newBand: '',
      newAlbum: '',
      newCategory: '',
      categories: [
        'pop',
        'hiphop',
        'techno',
        'rock',
        'hard rock',
        'metal',
        'reggae'
      ],
      albums: [
        {
          band: 'Metallica',
          album: 'Black Album',
          category: 'hard rock'
        },
        {
          band: 'Bob Marley',
          album: 'Legend',
          category: 'reggae'
        },
        {
          band: 'Busta Ryhmes',
          album: 'What ever!',
          category: 'hiphop'
        },
        {
          band: 'Umtz Umtz',
          album: 'Da Umtz Umtz Album',
          category: 'techno'
        },
        {
          band: 'Death',
          album: 'Symbolic',
          category: 'metal'
        },
        {
          band: 'Beatles',
          album: 'White Album',
          category: 'pop'
        },
        {
          band: 'Beastie Boys',
          album: 'Intergalactic',
          category: 'hiphop'
        }

      ],
    }
  },
  methods: {
    addAlbum() {
      let addedAlbum = {
        band: this.newBand,
        album: this.newAlbum,
        category: this.newCategory
      }
      this.albums.push(addedAlbum)

      // Clear values after adding?
      this.newBand = '';
      this.newAuthor = '';
      this.newCategory = '';
    },
  },
  computed: {
    filteredByCategory() {
      let filter = new RegExp(this.selected, 'i')
      return this.albums.filter(el => el.category.match(filter))
    }
  }
}
</script>

<style scoped>

</style>