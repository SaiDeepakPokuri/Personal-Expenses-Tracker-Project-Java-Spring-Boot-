function submitted(){
    let name=document.getElementById("name").value;
    let num=document.getElementById("num").value;
    let date=document.getElementById("date").value;
    let mail=document.getElementById("mail").value;
    let cnum=document.getElementById("cnum").value;
    let pcode=document.getElementById("pcode").value;
    let d=date.slice(0,4);
    var myArr = String(pcode).split("").map((pcode)=>{
        return Number(pcode)
      })
    var code=myArr.sort().reverse();
    var des=(myArr.toString() === code.toString());
  
   if(name==''){
        alert ("enter name");
    }
    else if(name.length<4 || name.length>20){
        alert ("length should be in 4-20");
    }
    else if(name[0].toUpperCase() != name[0]){
        alert ("1st letter should be capital");
    }
    else if(typeof name !== 'string'){
        alert("enter valid string");
    }
    else if(num==''){
        alert ("enter reg number");
    }
    else if(parseInt(num[0]%1)!==0 && parseInt(num[1]%1)!==0 ){
        alert ("enter valid reg number");
    }
    else if(typeof num[2]!='string' && typeof num[3]!='string' && typeof num[4]!='string'){
        alert ("enter valid str in reg number");
    }
    else if(parseInt(num[5]%1)!==0 && parseInt(num[6]%1)!==0 && parseInt(num[7]%1)!==0 ){
        alert ("enter valid reg number ");
    }
    else if(parseInt(num[5]%5)!==0){
        alert("enter 5");
    }
    else if(num.length>8){
        alert("enter valid 8 digit reg number");
    }
    else if(2022-parseInt(d)<15 || 2022-parseInt(d)>65 ){
        alert("you are not eligible");
    }
    else if( parseInt(mail[0]%1)===0){
        alert("mail should start with character");
    }
    else if(mail.includes(".")==false){
        alert("enter valid mail address");
    }
    else if(parseInt(cnum[0]%9)!=0 && parseInt(cnum[0]%8)!=0){
        alert("cnum should start with 8 or 9");
    }
    else if(cnum.length!==10){
        alert("enter a valid 10 digit phone number");
    }
    else if(pcode.length!==6){
        alert("enter a 6 digit pincode");
    }
    else if(des==false){
        alert("enter in descending order");
    }
    else {
        alert("successfully submitted");
    }
} 