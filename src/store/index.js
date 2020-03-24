import{combineReducers} from 'redux'
import {tarefaReducer} from './tarefasReducer'
import {mensagemReducer} from './mensagensReduce'

const mainReducer = combineReducers({
    tarefas: tarefaReducer,
    mensagens: mensagemReducer
})

export default mainReducer;