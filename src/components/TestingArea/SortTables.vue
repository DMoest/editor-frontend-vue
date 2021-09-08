<template>
  <!-- Sort tables with v-for -->
  <div class="p-8 border-b-2 border-yellow-800">
    <h3 class="text-2xl">Sort table with V-for</h3>

    <h3>Sort title by:
      <button class="m-1 p-2 bg-gray-200 hover:bg-blue-200 rounded-sm" @click="sortLowest">Lowest Rated</button>
      <button class="m-1 p-2 bg-gray-200 hover:bg-blue-200 rounded-sm" @click="sortHighest">Highest Rated</button>
    </h3>
    <table class="m-auto">
      <thead>
      <tr>
        <th class="px-4 py-2 text-left"
            v-for="key in columns"
            :key="key"> {{ key }} </th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="entry in ratingsInfo"
          :key="entry">
        <td class="px-4 py-1 text-left"
            v-for="key in columns"
            :key="key">{{ entry[key] }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "SortTables",
  data() {
    return {
      columns: ["title", "rating"],
      ratingsInfo: [
        { title: `Futurama`, rating: 91 },
        { title: `Family Guy`, rating: 88 },
        { title: `Simpsons`, rating: 87 },
        { title: `F is for Family`, rating: 94 },
        { title: `Rick and Monty`, rating: 99 },
      ],
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
    sortLowest() {
      this.ratingsInfo.sort((a, b) => a.rating > b.rating ? 1 : -1);
    },
    sortHighest() {
      this.ratingsInfo.sort((a, b) => a.rating < b.rating ? 1 : -1);
    },
  }
}
</script>

<style scoped>

</style>