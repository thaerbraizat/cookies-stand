'use strict';
function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let sum=0;
const seattle ={
    min:23,
    max:65,
    avg:6.3,
    workHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    genN:[],
    simulateNumber:[],


    genRandomNumber:function (){
        for(let i=0 ;i<this.workHours.length;i++ ){
            this.genN[i]=randomIntFromInterval(23,65);

        }
    },
    simuLate:function (){
        for(let i=0 ;i<this.workHours.length;i++ ){
          this.simulateNumber[i] =Math.floor(this.genN[i] *6.3);   
    }
},
    totall:function(){
        for(let i=0 ;i<this.simulateNumber.length;i++ ){
              sum=sum +this.simulateNumber[i];
        }return (sum);

    } ,
    render:function() {
        let first = document.getElementById(mainn);
        let h2 =document.createElement('h2');
        mainn.appendChild(h2);
        h2.textContent="seattle";

        let unorderList = document.createElement('ul');
        mainn.appendChild(unorderList);
        let li = null;
        for(let i = 0 ; i < this.workHours.length ; i++){
            li = document.createElement('li');
            unorderList.appendChild(li);
            li.textContent = this.workHours[i] + ": "+this.simulateNumber[i] +" cookies";
        }
        li = document.createElement('li');
            unorderList.appendChild(li);
            li.textContent ="Total :  "+sum +" cookies";
    }
}



seattle.genRandomNumber();
// let a=[];
// a = seattle.genN;
// console.log(a);
seattle.simuLate();
// let b =seattle.simulateNUmber;
// console.log(b);
// let c =seattle.totall();
// console.log(c);
seattle.totall();
seattle.render();

let sum1=0;
const Tokyo ={
    min:3,
    max:24,
    AVG:1.2,
    workHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    genN:[],
    simulateNumber:[],


    genRandomNumber:function (){
        for(let i=0 ;i<this.workHours.length;i++ ){
            this.genN[i]=randomIntFromInterval(3,24);

        }
    },
    simuLate:function (){
        for(let i=0 ;i<this.workHours.length;i++ ){
          this.simulateNumber[i] =Math.floor(this.genN[i] *1.2);   
    }
},
    totall:function(){
        for(let i=0 ;i<this.simulateNumber.length;i++ ){
              sum1=sum1 +this.simulateNumber[i];
        }return (sum1);

    } ,
    render:function() {
        let first = document.getElementById(mainn);
        let h2 =document.createElement('h2');
        mainn.appendChild(h2);
        h2.textContent="Tokyo";

        let unorderList = document.createElement('ul');
        mainn.appendChild(unorderList);
        let li = null;
        for(let i = 0 ; i < this.workHours.length ; i++){
            li = document.createElement('li');
            unorderList.appendChild(li);
            li.textContent = this.workHours[i] + ": "+this.simulateNumber[i] +" cookies";
        }
        li = document.createElement('li');
            unorderList.appendChild(li);
            li.textContent ="Total :  "+sum1 +" cookies";
    }
}



Tokyo.genRandomNumber();
// let a=[];
// a = Tokyo.genN;
// console.log(a);
Tokyo.simuLate();
// let b =Tokyo.simulateNUmber;
// console.log(b);
// let c =Tokyo.totall();
// console.log(c);
Tokyo.totall();
Tokyo.render();

let sum2=0;
const Dubai ={
    min:11,
    max:38,
    AVG:3.7,
    workHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    genN:[],
    simulateNumber:[],


    genRandomNumber:function (){
        for(let i=0 ;i<this.workHours.length;i++ ){
            this.genN[i]=randomIntFromInterval(11,38);

        }
    },
    simuLate:function (){
        for(let i=0 ;i<this.workHours.length;i++ ){
          this.simulateNumber[i] =Math.floor(this.genN[i] *3.7);   
    }
},
    totall:function(){
        for(let i=0 ;i<this.simulateNumber.length;i++ ){
              sum2=sum2 +this.simulateNumber[i];
        }return (sum2);

    } ,
    render:function() {
        let first = document.getElementById(mainn);
        let h2 =document.createElement('h2');
        mainn.appendChild(h2);
        h2.textContent="Dubai";

        let unorderList = document.createElement('ul');
        mainn.appendChild(unorderList);
        let li = null;
        for(let i = 0 ; i < this.workHours.length ; i++){
            li = document.createElement('li');
            unorderList.appendChild(li);
            li.textContent = this.workHours[i] + ": "+this.simulateNumber[i] +" cookies";
        }
        li = document.createElement('li');
            unorderList.appendChild(li);
            li.textContent ="Total :  "+sum2 +" cookies";
    }
}



Dubai.genRandomNumber();
// let a=[];
// a = seattle.genN;
// console.log(a);
Dubai.simuLate();
// let b =seattle.simulateNUmber;
// console.log(b);
// let c =seattle.totall();
// console.log(c);
Dubai.totall();
Dubai.render();


let sum3=0;
const Paris ={
    min:20,
    max:38,
    AVG:2.3,
    workHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    genN:[],
    simulateNumber:[],


    genRandomNumber:function (){
        for(let i=0 ;i<this.workHours.length;i++ ){
            this.genN[i]=randomIntFromInterval(11,38);

        }
    },
    simuLate:function (){
        for(let i=0 ;i<this.workHours.length;i++ ){
          this.simulateNumber[i] =Math.floor(this.genN[i] *3.7);   
    }
},
    totall:function(){
        for(let i=0 ;i<this.simulateNumber.length;i++ ){
              sum3=sum3 +this.simulateNumber[i];
        }return (sum3);

    } ,
    render:function() {
        let first = document.getElementById(mainn);
        let h2 =document.createElement('h2');
        mainn.appendChild(h2);
        h2.textContent="Paris";

        let unorderList = document.createElement('ul');
        mainn.appendChild(unorderList);
        let li = null;
        for(let i = 0 ; i < this.workHours.length ; i++){
            li = document.createElement('li');
            unorderList.appendChild(li);
            li.textContent = this.workHours[i] + ": "+this.simulateNumber[i] +" cookies";
        }
        li = document.createElement('li');
            unorderList.appendChild(li);
            li.textContent ="Total :  "+sum3 +" cookies";
    }
}


Paris.genRandomNumber();
// let a=[];
// a = seattle.genN;
// console.log(a);
Paris.simuLate();
// let b =seattle.simulateNUmber;
// console.log(b);
// let c =seattle.totall();
// console.log(c);
Paris.totall();
Paris.render();
let sum4=0;
const Lima ={
    min:2,
    max:16,
    AVG:4.6,
    workHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    genN:[],
    simulateNumber:[],


    genRandomNumber:function (){
        for(let i=0 ;i<this.workHours.length;i++ ){
            this.genN[i]=randomIntFromInterval(11,38);

        }
    },
    simuLate:function (){
        for(let i=0 ;i<this.workHours.length;i++ ){
          this.simulateNumber[i] =Math.floor(this.genN[i] *3.7);   
    }
},
    totall:function(){
        for(let i=0 ;i<this.simulateNumber.length;i++ ){
              sum4=sum4 +this.simulateNumber[i];
        }return (sum4);

    } ,
    render:function() {
        let first = document.getElementById(mainn);
        let h2 =document.createElement('h2');
        mainn.appendChild(h2);
        h2.textContent="Lima";

        let unorderList = document.createElement('ul');
        mainn.appendChild(unorderList);
        let li = null;
        for(let i = 0 ; i < this.workHours.length ; i++){
            li = document.createElement('li');
            unorderList.appendChild(li);
            li.textContent = this.workHours[i] + ": "+this.simulateNumber[i] +" cookies";
        }
        li = document.createElement('li');
            unorderList.appendChild(li);
            li.textContent ="Total :  "+sum4 +" cookies";
    }
}


Lima.genRandomNumber();
// let a=[];
// a = seattle.genN;
// console.log(a);
Lima.simuLate();
// let b =seattle.simulateNUmber;
// console.log(b);
// let c =seattle.totall();
// console.log(c);
Lima.totall();
Lima.render();



