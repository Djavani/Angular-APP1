export class Frase {

  /* --- criando os atributos e construtor de forma padrão 
  
  public fraseEng: string
  public frasePtBr: string

  constructor(fraseEng: string, frasePtBr: string){
    this.fraseEng = fraseEng
    this.frasePtBr = frasePtBr
  }
  
  ---*/
  /* --- outra forma de criar atributos atribuindo os parametros dentro do construtor --- */
  constructor(public fraseEng: string, public frasePtBr: string) { }

}