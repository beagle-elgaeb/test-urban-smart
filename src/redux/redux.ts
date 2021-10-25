import { createStore } from 'redux';

//отвечает за обновление состояния
//принимает значение текущего состояния и обьект события (action)
//содержит два свойства — это тип события (action.type) и значение события (action.value)
function reducer(state, action) {
  switch(action.type) {
      case ACTION_1: return { value: action.value_1 };
      case ACTION_2: return { value: action.value_2 };
      
      default: return state;
  }
}

//строки описывающие состояние
const ACTION_1 = "ACTION_1";
const ACTION_2 = "ACTION_2";

//создаёт событие (ф-я actionCreator)
function action_1(value) {
  return { 
      type: ACTION_1,
      value_1: value
  };
}

function action_2(value) {
  return { 
      type: ACTION_1,
      value_1: value
  };
}

//изначальные значения - необязательный аргумент
const initialState = {
  date_1: "value...",
  date_2: "value..."
};

//глобальное хранилище (второй аргумент необязательный)
const store = createStore(reducer, initialState);

//обновляет store
store.dispatch(action_1("Some value"));
store.dispatch(action_2("Some value"));

//возвращает значения полей события
store.getState().value_1;
store.getState().value_2;

//вызывает ф-ю при каждом обновлении store (при каждом вызове dispatch())
store.subscribe(() => console.info(store.getState()))

export default store;