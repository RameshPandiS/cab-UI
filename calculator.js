class calculator{
    static add(a,b){
        let c=a+b;
        return c;
    }
    sub(a,b){
        let c=a-b;
        return c;
    }
}
let c=calculator.add(10,20);
console.log(c);

let obj=new calculator();
let res=obj.sub(20,10);
console.log(res);