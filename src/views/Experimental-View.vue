<template>
  <h1 class="text-3xl my-8">Experimental Area for Vue3</h1>

  <p class="italic p-4">This area is only for experimental parts construction with the intention to learn more about the Vue3 framework for JavaScript.
    What you see here have no real functionality except trying to do small portions of things nessecery to know for webdevelopement and possibly to be implement later on but elsewhere.</p>

  <hr>

  <TextToDirectPrint></TextToDirectPrint>
  <CheckBoxToArrayPrint></CheckBoxToArrayPrint>
  <TextToDirectResponse></TextToDirectResponse>
  <QuantityCounter></QuantityCounter>
  <Addition></Addition>
  <MouseMoves></MouseMoves>
  <AppendToListThing></AppendToListThing>
  <FormPostRequestResponse></FormPostRequestResponse>
  <SortTables></SortTables>
  <Collection></Collection>
  <Watchers></Watchers>
</template>



<script>
/**
 * Import View Module Dependencies.
 */
// @ is an alias to /src
import TextToDirectPrint from "@/components/TestingArea/TextToDirectPrint.vue";
import CheckBoxToArrayPrint from "@/components/TestingArea/CheckBoxToArrayPrint.vue";
import TextToDirectResponse from "@/components/TestingArea/TestToDirectResponse.vue";
import QuantityCounter from "@/components/TestingArea/QuantityCounter.vue";
import Addition from "@/components/TestingArea/Addition.vue";
import MouseMoves from "@/components/TestingArea/MouseMoves.vue";
import AppendToListThing from "@/components/TestingArea/AppendToListThing.vue";
import FormPostRequestResponse from "@/components/TestingArea/FormPostRequestResponse.vue";
import SortTables from "@/components/TestingArea/SortTables.vue";
import Collection from "@/components/TestingArea/Collection.vue";
import Watchers from "@/components/TestingArea/Watchers.vue";


/**
 * Module Exports.
 */
export default {
  name: 'Experimental',
  components: {
    TextToDirectPrint,
    CheckBoxToArrayPrint,
    TextToDirectResponse,
    QuantityCounter,
    Addition,
    MouseMoves,
    AppendToListThing,
    FormPostRequestResponse,
    SortTables,
    Collection,
    Watchers
  }
};
</script>
