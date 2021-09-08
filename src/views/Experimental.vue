<template>

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
