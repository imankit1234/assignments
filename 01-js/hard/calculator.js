class Calculator {
  constructor(){
    this.result=0;
  }
  add(value){
    this.result+=value;
  }
  subtract(value){
    this.result-=value;
  }
  multiply(value){
    this.result*=value;
  }
  divide(value){
    if (value==0) 
    throw new Error;
    else{
      this.result/=value;
    }
  }
  clear(){
    this.result=0;
  }
  getResult(){
    return this.result;
  }
  calculate(expr){
    expr=expr.replace(/\s/g,"");
    if(/[a-zA-z@!$#]/g.test(expr)){
      throw new Error;
   }
   else if(expr.includes("/0")){
     throw new Error;
   }
   else{
      return this.result=eval(expr);
   }
    
  }
}

module.exports = Calculator;
