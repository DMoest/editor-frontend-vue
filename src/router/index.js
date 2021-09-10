/**
 * Import Vue-Router.
 */
import { createRouter, createWebHistory } from 'vue-router'


/**
 * Import Views for router
 */
import Home from '../views/Home-View.vue'
import About from '../views/About-View.vue'
import Experimental from '../views/Experimental-View.vue'
import TextEditor from '../views/TextEditor-View.vue'


/**
 * Defined routes for application.
 * @type {[{path: string, component: {components: {HelloWorld: {name: string, props: {msg: String | StringConstructor}}}, name: string}, name: string}, {path: string, component, name: string}, {path: string, component, name: string}, {path: string, component: {components: {TextToDirectPrint: *, Addition: *, SortTables: {data(): {newAlbum: string, albums, ratingsInfo: [{rating: number, title: string}, {rating: number, title: string}, {rating: number, title: string}, {rating: number, title: string}, {rating: number, title: string}], newCategory: string, columns: string[], newBand: string, categories, selected: string}, methods: {sortLowest(): void, sortHighest(): void}, name: string}, QuantityCounter: *, TextToDirectResponse: *, MouseMoves: *, Collection: {data(): {newAlbum: string, albums, newCategory: string, newBand: string, categories, selected: string}, computed: {filteredByCategory(): *}, methods: {addAlbum(): void}, name: string}, AppendToListThing: *, CheckBoxToArrayPrint: *, FormPostRequestResponse: {data(): {passiveClass: string, activeClass: string, response: string, email: string, caps: string}, methods: {submitForm(): void}, name: string}, Watchers: {data(): {orderStatus: string, orderSubmitted: null}, watch: {orderStatus(): void, counter(*=, *): void}, methods: {getStuff(): void}, name: string}}, name: string}, name: string}]}
 */
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/text-editor',
    name: 'TextEditor',
    component: TextEditor
  },
  {
    path: '/experimental',
    name: 'Experimental',
    component: Experimental
  }
]


/**
 * Create Router.
 * @type {Router}
 */
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


/**
 * Vue-Router Module Export for external accessibility.
 */
export default router
