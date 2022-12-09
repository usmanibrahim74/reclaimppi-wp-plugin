//useComp.js

//import ref function to define reactive properties
// import {ref} from 'vue'
export default function Reusable(){

    // const reuseData = ref ("Reusable data")
    function filterEmptyKeys(object){
        return Object.keys(
                Object.fromEntries(
                  Object.entries(object).filter(([_, v]) => v === null || v === "")
                )
              );
        }

    function hasSome(array1=[], array2=[]){
      return array1.some(k => array2.includes(k))
    }
    function hasEvery(array1=[], array2=[]){
      return array1.every(k => array2.includes(k))
    }
    function arrayIntersection(array1=[], array2=[]){
      return array1.filter(k => array2.includes(k))
    }

    function range(start=0, step=1, end=10){

      const arrayLength = Math.floor(((end - start) / step)) + 1;
      return [...Array(arrayLength).keys()].map(x => (x * step) + start);
    }
    return {
        filterEmptyKeys,
        hasSome,
        hasEvery,
        arrayIntersection,
        range,
    }
}