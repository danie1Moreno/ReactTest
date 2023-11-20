export const inputText = (word:string) => {
  if(word===""){
    return true
  }
  const RX = new RegExp("^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$");
  return RX.test(word);
};

export const inputNumber = (num:string) => {
  if(num===""){
    return true
  }
  const RX = new RegExp("^[0-9]+$");
  return RX.test(num);
};
