# Avux
-----------------------------------
Avux is a work in progress. I will let everyone know when it is completed! Apologies to those who have already downloaded it.

So far Avux allows you to create a store that has 3 methods pre-packaged for manipulating the state. 

## Methods:
-----------------------------------
1.) store.getState() - Gets the current state.

2.) store.selectState(['name', 'age']) - Selects only certain props/values from state. Pass an array containing the property names, and selectState will return an object containing those props/values.

3.) store.updateState({favColor: 'White'}) - Updates state by merging the object you pass in.

## Example code:
------------------------------------
`const { createStore } = require('avux');`

OR

`import { createStore } from 'avux';`


`const state = {
  name: 'Kaycee',
  age: 23
}`

`const store = createStore(state);`

`store.getState();`<br />
`store.updateState({favColor: 'blue'});`<br />
`store.selectState(['name', 'age']);`<br />
