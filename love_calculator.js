function clear(){
    inputv1.remove();
    inputv2.remove();
    b1.remove();
}

function lovecalculat(){
    name1=document.getElementById("inputv1").value;
    name2=document.getElementById("inputv2").value;
    number=Math.round(Math.random()*100);
    name1=name1.toUpperCase();
    name2=name2.toUpperCase();
    clear();
    if((name1.charAt(0)=="S" && name2.charAt(0)=="S") || (name1.charAt(0)=="S" && name2.charAt(0)=="V") || (name1.charAt(0)=="S" && name2.charAt(0)=="C") 
    || (name1.charAt(0)=="S" && name2.charAt(0)=="D") || (name1.charAt(0)=="V" && name2.charAt(0)=="S") || (name1.charAt(0)=="C" && name2.charAt(0)=="S") 
    || (name1.charAt(0)=="D" && name2.charAt(0)=="S") || (name1.charAt(0)=="O" && name2.charAt(0)=="M") || (name1.charAt(0)=="S" && name2.charAt(0)=="K") 
    || (name1.charAt(0)=="H" && name2.charAt(0)=="P") || (name1.charAt(0)=="H" && name2.charAt(0)=="S") || (name1.charAt(0)=="R" && name2.charAt(0)=="G") 
    || (name1.charAt(0)=="R" && name2.charAt(0)=="S") || (name1.charAt(0)=="B" && name2.charAt(0)=="S") || (name1.charAt(0)=="K" && name2.charAt(0)=="D") 
    || (name1.charAt(0)=="A" && name2.charAt(0)=="P")){
        document.getElementById("p1").innerHTML=name1;
        document.getElementById("p2").innerHTML="<img src='h.png' style='width:50px; transform: translate(225px,-112px);'>";
        document.getElementById("p3").innerHTML=name2; 
        document.getElementById("p4").innerHTML="Love Between You";
        document.getElementById("p5").innerHTML="100%";
        document.getElementById("p6").innerHTML="<pre>Manga Nahi Khuda Se Tumhe Ishara Tumhi Ko Tha,<br>          Nam Liya Nahi Maine Magar, <br>             Pukara Tumhi Ko Tha</pre>";
    }
    else if((name1.charAt(0)=="S" && name2.charAt(0)=="N") || (name1.charAt(0)=="S" && name2.charAt(0)=="A") || (name1.charAt(0)=="A" && name2.charAt(0)=="A")
    || (name1.charAt(0)=="A" && name2.charAt(0)=="K")){
        document.getElementById("p1").innerHTML=name1;
        document.getElementById("p2").innerHTML="<img src='h1.png' style='width:50px; transform: translate(225px,-112px);'>";
        document.getElementById("p3").innerHTML=name2;
        document.getElementById("p4").innerHTML="Love Between You";
        document.getElementById("p5").innerHTML="0%";
        document.getElementById("p6").innerHTML="<pre>Filhall Toh Yun Hain Ke Kuch Kar Nahi Sakte,<br> Tere Bin Hi Marna Hoga Saath Mar Nahi Sakte,<br>   Sookhe Se Patte Hain Ek Tehni Pe Lage,<br>    Qismat Toh Dekho Ke Jhad Nahi Sakte,<br>Filhall Toh Yun Hain Ke Kuch Kar Nahi Sakte,,</pre>";
    }
    else{
        document.getElementById("p1").innerHTML=name1;
        document.getElementById("p2").innerHTML="<img src='h.png' style='width:50px; transform: translate(225px,-112px);'>";
        document.getElementById("p3").innerHTML=name2;
        document.getElementById("p4").innerHTML="Love Between You";
        document.getElementById("p5").innerHTML=number+"%";
        document.getElementById("p6").innerHTML="<pre>          Koshish Karne Walo Ki<br>          Kabhi Haar Nahi Hoti,<br>           Lockdown Mei Ki Gai<br>           Chatting Payar Nahi <br>                 Hoti,</pre>";
    }

}