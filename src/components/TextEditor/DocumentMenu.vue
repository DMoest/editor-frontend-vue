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
          <tr v-for="document in documents"
              :key="document"
              class="p-4 rounded bg-gray-100 hover:bg-blue-200">
            <td @click="thisIsTheDocument(document['_id'])"
                class="px-4 py-1 text-left"
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
    thisId: undefined,
    documents: []
  },
  methods: {
    thisIsTheDocument(documentId) {
      console.log('Document ID: ', documentId);

      return this.$emit('getThisDocument', documentId)
    }
  }
}
</script>



<style>

</style>