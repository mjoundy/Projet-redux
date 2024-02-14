let state = {
  counter:3
};

const listeners = [];

function subscribe(callback) {
  listeners.push(callback);
}

function updateView() {
  document.querySelector('#counter').innerText = state.counter;
}

function reducer(state, action) {
  switch(action) {
    case 'INC': return Object.assign({}, state, {counter: state.counter + 1});
    case 'DEC': return Object.assign({}, state, {counter: state.counter - 1});
    default: return state; 
  }
}

function dispatch(action) {
  const newState = reducer(state, action); // 3
  
  if (newState !== state) {
    state = newState;
    listeners.forEach(listener => listener());
  }
}


//dispatch
document.querySelector('#inc').onclick = () => dispatch('INC');
document.querySelector('#dec').onclick = () => dispatch('DEC');


//update
updateView()
subscribe(updateView)