<template>
  <div>
    <h3 class="text-2xl font-bold">Documents</h3>
    <table class="m-auto">
      <thead>
      <tr class="border-b-2 border-blue-500 mb-6">
        <th class="px-4 py-2 text-left capitalize"
            v-for="key in columns"
            :key="key">{{ key }}</th>
      </tr>
      </thead>

      <tbody>
          <tr @click="thisIsTheDocument"
              v-for="document in documents"
              :key="document"
              class="p-4 rounded bg-gray-100 hover:bg-blue-200">
            <td class="px-4 py-1 text-left"
                v-for="key in columns"
                :key="key">{{ document[key] }}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>



<script>
export default {
  name: "DocumentMenu",
  components: {

  },
  data: () => ({
    columns: ["author", "title", "category"],
  }),
  props: {
    documents: []
  },
  methods: {
    thisIsTheDocument() {
      return this.emit('getThisDocument', { id: document._id })
    }
  }
}
</script>



<style>

</style>