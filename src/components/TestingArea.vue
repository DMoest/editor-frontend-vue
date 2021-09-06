<template>
  <h1 class="text-4xl">Experimental Area</h1>

  <!-- V-Model text area - type to direct print -->
  <div class="h-auto mb-6 flex flex-row justify-between p-4 border-b-2 border-blue-400">
    <div class="w-full flex flex-col justify-around">
      <h3 class="text-left text-lg">Type here:</h3>
      <textarea v-model="message"
                class="message p-2 border-2 border-gray-800"
                rows="10"
                maxlength="400"/>
    </div>
    <div class="w-full h-auto flex flex-col justify-between">
      <p class="text-left text-lg">Look here:</p>
      <p class="booktext p-2 w-full h-full text-left p-4 border-2">{{ message }}</p>
    </div>
  </div>



  <!-- Who is a Beatle - checkbox response V-Model -->
  <div class="h-auto mb-6 flex flex-col justify-between p-4 border-b-2 border-red-400">
    <div>
      <h2 >Who is a Beatle?</h2>
      <div class="w-full h-auto p-4 flex flex-row justify-around">
          <span class="container" v-for="option in options"
                :key="option">
            <input class="border-gray-700 border-2"
                   v-model="checkedNames"
                   :id="option.value"
                   :value="option.value"
                   type="checkbox" />
            <label class="p-2"
                   for="option.value">{{ option.value }}</label>
         </span>
      </div>
    </div>
    <span class="w-full h-auto">Checked Names: {{ checkedNames }}</span>
  </div>



  <!-- Taco - text direct response to print out -->
  <div class="w-full p-8 border-b-2 border-green-200">
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



  <!-- Do you like TACOs? - Radio -->
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


  <!-- Backpack - quantity click event -->
  <div class="item mb-6 p-4 flex flex-col justify-between gap-4 border-b-2 border-yellow-500">

    <div class="w-10 h-10 m-auto bg-blue-500 block"></div>
    <div class="w-1/2 m-auto px-4 py-2 block flex flex-row justify-between bg-blue-400 rounded-3xl">
      <button class="inc" @click="counter > 0 ? counter -= 1 : 0">-</button>
      <span class="quant-text">Quantity: {{ counter }}</span>
      <button class="inc" @click="counter += 1">+</button>
    </div>
    <button class="submit" @click="submit">Submit</button>
  </div>

  <div class="mb-6 p-4 border-b-2 border-purple-400">
    <h3 class="text-2xl block">Addition</h3>

    <div class="w-1/3 m-auto p-4 flex flex-row justify-around">
      <input class="w-10"
             v-model.number="num1"
             type="number">
      <span>+</span>
      <input class="w-10"
             v-model.number="num2"
             type="number">
      <span>=</span>
      <span>{{ num1 + num2 }}</span>
      <p></p>
    </div>

    <select v-model="name">
      <option>Carls Tacos</option>
      <option>Taco Bell</option>
      <option>Dan Just Dan's Tacos</option>
    </select>

    <p  class="p-4" v-if="name">My favorite taco place is {{ name }}.</p>
  </div>
</template>



<script>
    export default {
        name: 'Testingarea'
    };
</script>
