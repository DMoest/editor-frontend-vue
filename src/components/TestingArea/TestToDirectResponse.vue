<template>
  <!-- Do you like TACOs? - Radio -->
  <h3 class="text-2xl">Radio Buttons/Text input to response </h3>

  <div class="w-full p-8">
    <h3>What is your favorite kind of taco?</h3>

    <textarea class="w-full p-1 border-gray-400 border-solid border-2 border-opacity-50"
              v-model="tacos">
      </textarea>

    <br>
    <button :class="[tacos ? activeClass : '']"
            class="text-white px-4 py-2 border-2 border-gray-200 bg-gray-200"
            v-show="tacos"
            type="submit">Let us know!
    </button>
  </div>

  <div class="w-full h-auto p-8 border-b-2 border-green-400">
    <h3 class="text-xl">Do you like tacos?</h3>

    <div class="w-2/3 m-auto my-2 flex flex-row justify-around">
      <label for="no"><input class="p-4"
                             v-model="tacos"
                             id="yes"
                             value="yes"
                             type="radio">Yes
      </label>
      <label for="no"><input v-model="tacos"
                             id="no"
                             value="no"
                             type="radio">No
      </label>
    </div>
    <p v-if="tacos === 'yes'"
       class="thumbs">Awesome human!</p>
    <p class="text-left w-1/2 m-auto" v-else-if="tacos === 'dan just dans tacos'">
      Yeah, you like my tacos! <br>
      That's awesome come over for some tacos any time...</p>
    <p v-else-if="tacos === 'no'">You're a monster!</p>
    <p v-else-if="tacos !== 'yes' && tacos !== 'no' && tacos !== ''">
      What is that answer? You should know tacos and buritos are brothers.
      Dont you think this is more of a yes vs. no question?</p>
  </div>
</template>



<script type="text/x-template" id="radio-text-to-direct-response-template">
  export default {
    name: "TestToDirectResponse",
    data() {
      return {
        counter: 0,
        tacos: '',
        activeClass: 'text-white px-3 py-2 border-2 border-blue-400 bg-blue-400 hover:bg-blue-200 hover:border-blue-300'

      };
    }
  };
</script>



<style scoped>
</style>
