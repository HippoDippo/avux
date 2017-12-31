module.exports.createStore = function(initialState=false) {
    var err = 'Error: You have to provide an initial state.';
  
    if (initialState) {
      var state = initialState;
      var currentState = state;
    } else {
      throw err; // Throw error if initial state is not provided.
    }
    
    function getState(prop=false) {
      if (prop) {
        return currentState[prop]
      }
      
      return currentState;
    }

    function selectState(props) {
      let selectedState = {};
      for (var y in currentState) {
        if (props.includes(y)) {
          selectedState[y] = currentState[y];
        }
      }
      return selectedState;
    }

    function updateState(newStuff) {
      currentState = Object.assign({}, state, newStuff); 
      return currentState;
    }

    return {
      getState,
      updateState,
      selectState
    }
  }