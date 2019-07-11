// Object defines a 'recipes'object
var recipes = {}


//object updateObjectWithKeyAndValue() returns an object with the orignal key value pair:
//object updateObjectWithKeyAndValue() it does not modigy the orignalobject, but rather returns a clone with the new data:
// ReferenceError: updateObjectWithKeyAndValue is not defined
// ReferenceError: updateObjectWithKeyAndValue is not defined
function updateObjectWithKeyAndValue(object, key, value){
 return  Object.assign({},object, {[key]:value});
   }

//Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with the given `key` and `value` (it is destructive) and returns theentire updated object
 //ReferenceError: destructivelyUpdateObjectWithKeyAndValue is not defined
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
 object[key]=value
  return object; 
}

 //Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):
  //ReferenceError: deleteFromObjectByKey is not defined
  
 function deleteFromObjectByKey(object, key){
 const newobj = Object.assign({}, object)
 
  delete newobj[key]
  
  return newobj
 }
 
 //Objects deleteFromObjectByKey(object, key) does not modify the original object (it is non-destructive):TypeError: Cannot read property 'prop' of undefined

 //Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:
   //  ReferenceError: destructivelyDeleteFromObjectByKey is not defined
   function destructivelyDeleteFromObjectByKey(object, key){
     delete object[key]
     return object[key]
   }
   
  // Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object:
    // Error: Expected 1 to be undefined
   
 