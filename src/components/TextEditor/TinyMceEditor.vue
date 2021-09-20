<template>
  <nav class="w-full h-auto p-4 bg-gray-700">
    <div class="w-3/4 flex flex-row justify-around ">
      <button @click="saveDocument"
              class="ml-1 mr-auto px-3 py-2 bg-blue-400 rounded text-white font-bold hover:bg-blue-200">Save Change</button>
    </div>
  </nav>


  <div class="flex flex-row justify-between">
    <editor
        class="h-full"
        :api-key="apiKey"
        v-model="textContent"
        :init="{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar:
             'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
         }"
    />


    <div class="w-1/ flex flex-col justify-between">
      <CreateDocumentForm @createDocument="createDocument"></CreateDocumentForm>
      <DocumentMenu @getThisDocument="getThisDocument" :documents="documents"></DocumentMenu>
    </div>
  </div>
</template>



<script>
/**
 * Import Module Dependencies.
 */
import Editor from '@tinymce/tinymce-vue';
import axios from "axios";
import CreateDocumentForm from './CreateDocumentForm';
import DocumentMenu from './DocumentMenu';

/**
 * Module Exports.
 */
export default {
  name: "TinyMceEditor",
  components: {
    Editor,
    DocumentMenu,
    CreateDocumentForm
  },
  data: () => ({
    textContent: '',
    apiKey: '8lf1fazjlcfjsvscqsr6alyidgxfw27oez3a3mw8ytzfllv7',
    currentDocument: undefined,
    documents: undefined
  }),
  methods: {
    consoleLogText() {
      console.log('*> --- Console Log Text from Tiny MCE Editor ----- *')
      console.log(this.textContent)
    },
    // showDocumentsMenu() {
    //   console.log("CLICK -> Select document.");
    //
    //   DocumentMenu.isShowing = !DocumentMenu.isShowing;
    //
    //   console.log(DocumentMenu.isShowing);
    // },
    // showCreateDocumentForm() {
    //   console.log('CLICK -> showCreateDocumentForm()');
    // },
    getDocuments() {
      axios.get('https://editor-backend-express.azurewebsites.net/document')
          .then(response => {
            this.documents = response.data;

            console.log('Documents: ', this.documents);
          }).catch(error => {
        console.log(`Error Status: ${error.response.status} \n Error Message: ${error.response.message}`);
      })
    },
    getThisDocument(id) {
      console.log('KLICK -> getThisDocument');
      axios.get(`https://editor-backend-express.azurewebsites.net/document/${id}`)
        .then(response => {
          this.currentDocument = response.data;
          this.textContent = response.data.text;

          console.log('Current Document: ', this.currentDocument);
        }).catch(error => {
        console.log(`Error Status: ${error.response.status} \n Error Message: ${error.response.message}`);
      })
    },
    createDocument({author, title, category}) {
      axios.post('https://editor-backend-express.azurewebsites.net/document', {
        author: author,
        title: title,
        category: category,
        text: '',
        status: 'created',
      }).then(response => {
        console.log('Create Document RESPONSE: ', response.data);

        this.getDocuments();
        this.getThisDocument(response.data._id);
      }).catch(error => {
        console.log(`Error Status: ${error.response.status} \n Error Message: ${error.response.message}`);
      })
    },
    saveDocument() {
      axios.put('https://editor-backend-express.azurewebsites.net/document', {
        _id: this.currentDocument._id,
        author: this.currentDocument.author,
        title: this.currentDocument.title,
        category: this.currentDocument.category,
        text: this.textContent,
        status: 'updated',
      }).then(response => {
        JSON.stringify(response, null, 2)
        console.log('Response: ', response.data);
      }).catch(error => {
        console.log(`Error Status: ${error.response.status} \n Error Message: ${error.response.message}`);
      })
    },
  },
  watch: {
    textContent(textValue) {
      this.currentDocument.text = textValue;
      // this.consoleLogText()
    },
    documents() {
      // this.documents = newValue
      // this.getDocuments()
    }
  },
  created() {
    this.getDocuments()
    console.log('Editor acquired existing documents.');
  }
}
</script>



<style>

</style>
