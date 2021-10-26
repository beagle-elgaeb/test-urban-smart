

//отвечает за обновление состояния
//принимает значение текущего состояния и обьект события (action)
//содержит два свойства — это тип события (action.type) и значение события (action.value)



//строка описывающая событие
const SUBMIT = "Submit data";

//создаёт событие (ф-я actionCreator)
function submit(isLogin: boolean) {
  return {
    type: SUBMIT,
    value: isLogin
  };
}

//обновляет store
store.dispatch(submit(true));