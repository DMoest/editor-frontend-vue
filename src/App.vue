<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
<!--    <router-link :to="{ name: 'TextEditor' }">Text Editor</router-link> |-->
    <router-link :to="{ name: 'TestingArea' }">Testing Area</router-link>
  </div>

  <router-view/>



  <!-- HOW DO I SPLT THIS SHIT INTO SMALL & CLEAN COMPONENTS -->




  <!--  &lt;!&ndash; V-Model text area - type to direct print &ndash;&gt;-->
  <!--  <TextToDirectPrint message="{{ message }}"></TextToDirectPrint>-->
  <div class="h-auto mb-6 flex flex-row justify-between p-8 border-b-2 border-blue-400">
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



  <!--  &lt;!&ndash; Who is a Beatle - checkbox response V-Model &ndash;&gt;-->
  <!--  <CheckBoxToArrayPrint></CheckBoxToArrayPrint>-->
  <div class="h-auto mb-6 flex flex-col justify-between p-8 border-b-2 border-red-400">
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



  <!--  &lt;!&ndash; Taco - text direct response to print out &ndash;&gt;-->
  <!--  <TextToDirectResponse></TextToDirectResponse>-->
  <!-- Do you like TACOs? - Radio -->
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



  <!-- Taco YES/NO radio buttons -->
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



  <!--  &lt;!&ndash; Backpack/ShoppingCart - quantity click event &ndash;&gt;-->
  <!--  <QuantityCounter></QuantityCounter>-->
  <!-- Backpack - quantity click event -->
  <div class="item mb-6 p-8 flex flex-col justify-between gap-4 border-b-2 border-yellow-500">
    <h3 class="text-2xl">ShoppingCart / Backpack thing...</h3>
    <div class="w-10 h-10 m-auto bg-blue-500 block"></div>
    <div class="w-1/2 m-auto px-4 py-2 block flex flex-row justify-between bg-blue-400 rounded-3xl">
      <button class="inc" @click="counter > 0 ? counter -= 1 : 0">-</button>
      <span class="quant-text">Quantity: {{ counter }}</span>
      <button class="inc" @click="counter += 1">+</button>
    </div>
    <button class="submit" @click="submit">Submit</button>
  </div>



  <!--  &lt;!&ndash; Addition with number inputs &ndash;&gt;-->
  <!--  <Addition></Addition>-->
  <div class="mb-6 p-8 border-b-2 border-purple-400">
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



  <!-- MouseMoves -->
  <div class="p-8 border-b-2 border-gray-700"
       @mousemove="xCoordinate"
       :style="{
    backgroundColor: `hsl(${x}), 80%, 50%` }">
    <h3 class="text-2xl">MouseMoves</h3>

    <p>
      <button @click="decrement">-</button>
      {{ counter2 }}
      <button @click="increment">+</button>
    </p>
    <p>Pixels across: {{ x }}</p>
  </div>

  <div class="p-8 border-b-2 border-purple-700">
    <h3 class="text-2xl">Some list addition thing...</h3>
    <div class="w-10 h-10 bg-blue-100 m-auto"></div>
    <div class="main-info">
      <span class="name">Daniel</span>
      <h3>It´s awesome after the rain!</h3>
    </div>
    <hr>

    <ul>
      <li v-for="comment in comments" :key="comment">
        {{ comment }}
      </li>
    </ul>

    <input @keyup.enter="addComment"
           v-model="newComment"
           placeholder="Add a comment" />
  </div>



  <!-- Forms submit request & stuff -->
  <div class="p-8 border-b-2 border-pink-500">
    <h3 class="text-2xl">This form thing...</h3>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name: </label><br>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div>
        <label for="email">Email: </label><br>
        <input type="text" v-model="email" required>
      </div>
      <div>
        <label for="caps">How do I turn off capslock?</label><br>
        <input type="text" v-model="caps" required>
      </div>
      <button :class="[name ? activeClass : '']" type="submit">Submit</button>
      <div>
        <h3>Response from Server:</h3>
        <pre>{{ response }}</pre>
      </div>
    </form>
  </div>



  <!-- Sort tables with v-for -->
  <div class="p-8 border-b-2 border-yellow-800">
    <h3 class="text-2xl">Sort table with V-for</h3>

    <h3>Sort title by:
      <button class="p-2" @click="sortLowest">Lowest Rated</button>
      <button class="p-2" @click="sortHighest">Highest Rated</button>
    </h3>
    <table class="m-auto">
      <thead>
        <tr>
          <th v-for="key in columns" :key="key"> {{ key }} </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="entry in ratingsInfo" :key="entry">
          <td v-for="key in columns" :key="key">{{ entry[key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>



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
         class="album block p-4 bg-gray-100 rounded mb-1 flex flex-row justify-around hover:bg-blue-200">
      <small class="text-sm">{{ album.band }}</small>
      <p class="text-sm">{{ album.album }}</p>
      <span class="category capitalize text-sm">{{ album.category }}</span>
    </div>
  </div>
</template>



<script>
// @ is an alias to /src
// Server requests
import axios from 'axios';

// import TextToDirectPrint from "@/components/TestingArea/TextToDirectPrint.vue";
// import CheckBoxToArrayPrint from "@/components/TestingArea/CheckBoxToArrayPrint.vue";
// import TextToDirectResponse from "@/components/TestingArea/TestToDirectResponse.vue";
// import QuantityCounter from "@/components/TestingArea/QuantityCounter.vue";
// import Addition from "@/components/TestingArea/Addition.vue";

export default {
  name: 'TestingArea',
  components: {
    // TextToDirectPrint,
    // CheckBoxToArrayPrint,
    // TextToDirectResponse,
    // QuantityCounter,
    // Addition
  },
  data() {
    return {
      message: 'Hello World!',
      newComment: '',
      comments: [
          'Looks great Dude!',
          'I love the sea.',
          'Where are you at?'
      ],
      checkedNames: [],
      options: [
        { value: 'John' },
        { value: 'Paul' },
        { value: 'George' },
        { value: 'Ringo' },
        { value: 'Pete' },
      ],
      tacos: '',
      activeClass: 'active',
      counter: 0,
      counter2: 0,
      x: 0,
      num1: 1,
      num2: 1,
      name: '',
      email: '',
      caps: '',
      response: '',
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

      ]
    };
  },
  methods: {
    increment() {
      this.counter2++;
    },
    decrement() {
      this.counter2--;
    },
    xCoordinate(e) {
      this.x = e.clientX;
    },
    addComment() {
      this.comments.push(this.newComment)
      this.newComment = ''
    },
    submitForm() {
      axios.post('jsonplaceholder.typicode.com/posts', {
        name: this.name,
        email: this.email,
        caps: this.caps
      }).then(response => {
        this.response = JSON.stringify(response, null, 2)
      }).catch(error => {
        this.response = 'Error: ' + error.response.status
      })
    },
    sortLowest() {
      this.ratingsInfo.sort((a, b) => a.rating > b.rating ? 1 : -1);
    },
    sortHighest() {
      this.ratingsInfo.sort((a, b) => a.rating < b.rating ? 1 : -1);
    },
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
    }
  },
  computed: {
    filteredByCategory() {
      let filter = new RegExp(this.selected, 'i')
      return this.albums.filter(el => el.category.match(filter))
    }
  }
};
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.active {
  background: #3d868f;
}

</style>
