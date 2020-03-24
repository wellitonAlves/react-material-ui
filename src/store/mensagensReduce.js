
const ESTADO_INICIAL = {
    mensagem:'',
    mostramensagem:false


}

export const ACTION = {
    MOSTRAR_MENSAGEM:'MENSAGENS_MOSTRAR',
    ESCONDER_MENSAGEM:'MENSAGEM_ESCONDER'
}

export function mensagemReducer (state=ESTADO_INICIAL, action){
        switch(action.type){
            case ACTION.MOSTRAR_MENSAGEM:
                return {...state, mensagem: action.mensagem,mostramensagem:true}
            case ACTION.ESCONDER_MENSAGEM:
                return {...state, mensagem:'',mostramensagem:false}
            default:
                return state;    
        }
}

export function mostramensagem(mensagem){
    return{
        type:ACTION.MOSTRAR_MENSAGEM,
        mensagem: mensagem
    }
}

export function esconderMensagem(){
    return{
        type:ACTION.ESCONDER_MENSAGEM,
    }
}