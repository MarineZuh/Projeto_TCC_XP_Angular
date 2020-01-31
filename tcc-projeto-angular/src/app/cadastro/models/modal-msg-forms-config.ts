export interface ModalMsgFormsConfig {
  titulo: string;
  msg: string;
  tipo: TipoMsg;
}

export type TipoMsg = 'sucesso' | 'error';