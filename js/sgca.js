
//on click of next button
var mpointer=0;
var repeat =0;
var a,p,lastp,n,b,q,flag=0,avg,average;

var values=[
	[1, 42, 42, 2.5, 2.381, 1, 50, 50, 3, 7.5, 1, 62, 62, 3.5, 4.032, 2, 42, 84, 4.5, 2.381, 2, 50, 100, 5.4, 5.350, 2, 62, 124, 6, -4.637],
	[1, 42, 42, 2.4, -2.738, 1, 50, 50, 2.9, 3.2, 1, 62, 62, 3.3, -2.903, 2, 42, 84, 4.5, -7.857, 2, 50, 100, 4.9, -5.400, 2, 62, 124, 5.9, -6.371],
	[1, 42, 42, 2.4, 2.738, 1, 50, 50, 2.8, -1.1, 1, 62, 62, 3.2, -6.371, 2, 42, 84, 4.2, -5.298, 2, 50, 100, 4.8, -7.55, 2, 62, 124, 6.2, -1.169],	
	[1, 42, 42, 2.6, 7.5, 1, 50, 50, 2.9, 3.2, 1, 62, 62, 3.5, -4.032, 2, 42, 84, 4.1, -7.857, 2, 50, 100, 4.9, -5.400, 2, 62, 124, 6.1, -2.903],
	[1, 42, 42, 2.5, 2.381, 1, 50, 50, 2.9, 3.2, 1, 62, 62, 3.3, -2.903, 2, 42, 84, 4.3, -2.738, 2, 50, 100, 5.4, 5.350, 2, 62, 124, 6.6, 5.766]	
];



p=Math.floor(Math.random()*(5));

total = (values[p][4] + values[p][9] + values[p][14] +  + values[p][19] + values[p][24] + values[p][29])/6

function navNext()
{
  for (temp = 0; temp <= 9 ; temp++)
  {
      document.getElementById('canvas'+temp).style.visibility="hidden";
  }

 simsubscreennum+=1;
// simsubscreennum = 9;
 document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
 document.getElementById('nextButton').style.visibility="hidden";
 document.getElementById("questDiv").style.visibility="hidden";
 magic();
}


var ca;
var questions=["If the cement is exposed to extreme moisture content due to bad weather</br> conditions, then the speci",
				"The amount of cement taken is calculated as ",
				"Care should be taken for the Kerosene to be free from water.",
				"If the cement is exposed to extreme moisture content due to bad weather</br> conditions, then the specific gravity of cement may go up to "];

var options2=[["100ml","250ml","500ml","1000ml"],//250ml
			  ["W1+W2","W1-W2","W2-W1","W2"],//W2-W1
			  ["True","False"],//True
			  ["3.9","3.11","3.16","3.19"]];//3.19



function validateAnswer(qn,ans,left,top)
{
	 $("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);

	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];

		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{

				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
   if (document.getElementById('arrow1').style.visibility=="hidden")
       document.getElementById('arrow1').style.visibility="visible";
   else
       document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction()
{
clearInterval(myInt);
document.getElementById('arrow1').style.visibility="hidden";
}

//-------------------------------------function magic starts here----------------------------------------------------

function magic()
{

	if (simsubscreennum==1)
	{
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 70px; top: 245px; height: 40px; z-index: 10;";

		myInt = setInterval(function(){ animatearrow(); }, 500);

		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('canvas1_img1').onclick=function() { step1(); };
	}

	else if (simsubscreennum==2)
	{
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('canvas1_img2').style.visibility="hidden";
		document.getElementById('canvas1_txt1').style.visibility="hidden";
		document.getElementById('canvas2_txt1').innerHTML = "Click on the Weight to add it to the Bell Crank";
		step2()
	}
	else if (simsubscreennum==3)
	{
		document.getElementById('canvas2_img1').style.visibility="hidden";
		document.getElementById('canvas3_txt1').innerHTML='Click on the Weight to move it to a different location';
		step3()
	}
	else if (simsubscreennum==4)
	{
		document.getElementById('canvas3_img1').style.visibility="hidden";
		document.getElementById('canvas3_img2').style.visibility="hidden";
		document.getElementById('canvas4_txt1').innerHTML='Click on the Weight to move it to a different location';
		step4()
	}
	else if (simsubscreennum==5)
	{
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('canvas4_img2').style.visibility="hidden";
		document.getElementById('canvas4_img1').style.visibility="hidden";
		document.getElementById('canvas4_txt1').style.visibility="hidden";
		document.getElementById('canvas5_txt1').innerHTML = "Click on the Weight to add it to the Bell Crank";
		step5()
	}
	else if (simsubscreennum==6)
	{
		document.getElementById('canvas5_img1').style.visibility="hidden";
		document.getElementById('canvas6_txt1').innerHTML='Click on the Weight to move it to a different location';
		step6()
	}
	else if (simsubscreennum==7)
	{
		document.getElementById('canvas6_img1').style.visibility="hidden";
		document.getElementById('canvas7_txt1').innerHTML='Click on the Weight to move it to a different location';
		step7()
	}
	else if (simsubscreennum==8)
	{
		document.getElementById('canvas7_img1').style.visibility="hidden";
		table = document.getElementById("results")
		for (var i = 2; i<=7; i++)
		{
			table.rows[i].cells[1].innerHTML = Math.round((values[p][5*(i-2)])*10)/10
			table.rows[i].cells[2].innerHTML = Math.round((values[p][5*(i-2)+1])*10)/10
			table.rows[i].cells[3].innerHTML = Math.round((values[p][5*(i-2)+2])*10)/10
			table.rows[i].cells[4].innerHTML = 0.5
			table.rows[i].cells[5].innerHTML = Math.round((values[p][5*(i-2)+3])*10)/10
			table.rows[i].cells[6].innerHTML = Math.round((values[p][5*(i-2)+3] - 0.5)*10)/10
			table.rows[i].cells[7].innerHTML = 21.5
			table.rows[i].cells[8].innerHTML = Math.round(((values[p][5*(i-2)+3] - 0.5) * 21.5)*10)/10
			table.rows[i].cells[9].innerHTML = Math.round(((values[p][5*(i-2)+3] - 0.5) * 21.5 - values[p][5*(i-2)+2])*10)/10
			table.rows[i].cells[10].innerHTML = Math.round((values[p][5*(i-2)+4])*100)/100


		}
		document.getElementById('nextButton').style.visibility="visible";

	}
	else if(simsubscreennum == 9)
	{
		document.getElementById('weight6').style.visibility="hidden";
		document.getElementById('canvas8_txt1').innerHTML= "Average Percentage Error = " + Math.round(total*100)/100  + "%"
	} 

}

function step1()
{
	myStopFunction();
	document.getElementById('canvas1_img1').style.visibility="hidden";
	document.getElementById('canvas1_img2').style.visibility="visible";
	document.getElementById('canvas1_txt1').style.visibility="visible";
 	document.getElementById('nextButton').style.visibility="visible";
}

function step2()
{
	myStopFunction();
	document.getElementById('canvas2_img1').style.visibility="visible";
	document.getElementById('weight').style.left="70px";
	document.getElementById('weight').style.top="380px";
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 50px; top: 450px; height: 40px; z-index: 10;";

	myInt = setInterval(function(){ animatearrow(); }, 500);

	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById('weight').onclick=function() { step2_1(); };
}

function step2_1()
{
	myStopFunction();
	document.getElementById('weight').style.left="500px";
	document.getElementById('weight').style.top="325px";
	document.getElementById('canvas2_txt1').innerHTML="Tighten the Screw to Align the bar horizontally";
	document.getElementById('canvas2_img1').style.visibility="hidden";
	document.getElementById('canvas2_img2').style.visibility="visible";

	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 80px; top: 245px; height: 40px; z-index: 10;";

	myInt = setInterval(function(){ animatearrow(); }, 500);

	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById('canvas2_img2').onclick=function() { step2_2(); };
}

function step2_2()
{
	myStopFunction();
	document.getElementById('canvas2_img2').style.visibility="hidden";
	document.getElementById('canvas2_img1').style.visibility="visible";
	document.getElementById('canvas2_txt2').innerHTML="Load applied on lever = " + values[p][0] + " kg <br> Distance from center of Lever = " + values[p][1] + " cm <br> Recorded Readings on Spring = " + values[p][3] + " N";
	document.getElementById('nextButton').style.visibility="visible";
}

function step3()
{
	myStopFunction();
	document.getElementById('weight2').style.left="500px";
	document.getElementById('weight2').style.top="325px";

	document.getElementById('canvas3_img1').style.visibility="visible";
	document.getElementById('canvas3_img2').style.visibility="hidden";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 538px; top: 314px; height: 40px; z-index: 10;";

    document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
		// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(270deg)";

	document.getElementById('weight2').onclick=function() { step3_1(); };
}

function step3_1()
{
	myStopFunction();
	document.getElementById('canvas3_img1').style.visibility="hidden";
	document.getElementById('canvas3_img2').style.visibility="visible";
	document.getElementById('weight2').style.left = "525px";

	document.getElementById('canvas3_txt1').innerHTML="Tighten the Screw to Align the bar horizontally";
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 80px; top: 245px; height: 40px; z-index: 10;";

	myInt = setInterval(function(){ animatearrow(); }, 500);

	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById('canvas3_img2').onclick=function() { step3_2(); };
}

function step3_2()
{
	myStopFunction();
	document.getElementById('canvas3_img2').style.visibility = "hidden";
	document.getElementById('canvas3_img1').style.visibility = "visible";
	document.getElementById('canvas3_txt2').innerHTML="Load applied on lever = " + values[p][5] + " kg <br> Distance from center of Lever = " + values[p][6] + " cm <br> Recorded Readings on Spring = " + values[p][8] + " N";
	document.getElementById('nextButton').style.visibility="visible";
}
function step4()
{
	myStopFunction();
	document.getElementById('weight3').style.left="525px";
	document.getElementById('weight3').style.top="325px";

	document.getElementById('canvas4_img1').style.visibility="visible";
	document.getElementById('canvas4_img2').style.visibility="hidden";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 561px; top: 320px; height: 40px; z-index: 10;";

    document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
		// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(270deg)";

	document.getElementById('weight3').onclick=function() { step4_1(); };
}

function step4_1()
{
	myStopFunction();
	document.getElementById('canvas4_img1').style.visibility="hidden";
	document.getElementById('canvas4_img2').style.visibility="visible";
	document.getElementById('weight3').style.left = "540px";

	document.getElementById('canvas4_txt1').innerHTML="Tighten the Screw to Align the bar horizontally";
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 80px; top: 245px; height: 40px; z-index: 10;";

	myInt = setInterval(function(){ animatearrow(); }, 500);

	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById('canvas4_img2').onclick=function() { step4_2(); };
}

function step4_2()
{
	myStopFunction();
	document.getElementById('canvas4_img2').style.visibility = "hidden";
	document.getElementById('canvas4_img1').style.visibility = "visible";
	document.getElementById('canvas4_txt2').innerHTML="Load applied on lever = " + values[p][10] + " kg <br> Distance from center of Lever = " + values[p][11] + " cm <br> Recorded Readings on Spring = " + values[p][13] + " N";	
	document.getElementById('nextButton').style.visibility="visible";
}

function step5()
{
	myStopFunction();
	document.getElementById('canvas5_img1').style.visibility="visible";
	document.getElementById('weight4').style.left="70px";
	document.getElementById('weight4').style.top="380px";
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 50px; top: 450px; height: 40px; z-index: 10;";

	myInt = setInterval(function(){ animatearrow(); }, 500);

	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById('weight4').onclick=function() { step5_1(); };
}

function step5_1()
{
	myStopFunction();
	document.getElementById('weight4').style.left="500px";
	document.getElementById('weight4').style.top="325px";
	document.getElementById('canvas5_txt1').innerHTML="Tighten the Screw to Align the bar horizontally";
	document.getElementById('canvas5_img1').style.visibility="hidden";
	document.getElementById('canvas5_img2').style.visibility="visible";

	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 80px; top: 245px; height: 40px; z-index: 10;";

	myInt = setInterval(function(){ animatearrow(); }, 500);

	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById('canvas5_img2').onclick=function() { step5_2(); };
}

function step5_2()
{
	myStopFunction();
	document.getElementById('canvas5_img2').style.visibility="hidden";
	document.getElementById('canvas5_img1').style.visibility="visible";
	document.getElementById('canvas5_txt2').innerHTML="Load applied on lever = " + values[p][15] + " kg <br> Distance from center of Lever = " + values[p][16] + " cm <br> Recorded Readings on Spring = " + values[p][18] + " N";	
	document.getElementById('nextButton').style.visibility="visible";
}

function step6()
{
	myStopFunction();
	document.getElementById('weight5').style.left="500px";
	document.getElementById('weight5').style.top="325px";

	document.getElementById('canvas6_img1').style.visibility="visible";
	document.getElementById('canvas6_img2').style.visibility="hidden";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 538px; top: 314px; height: 40px; z-index: 10;";

    document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
		// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(270deg)";

	document.getElementById('weight5').onclick=function() { step6_1(); };
}

function step6_1()
{
	myStopFunction();
	document.getElementById('canvas6_img1').style.visibility="hidden";
	document.getElementById('canvas6_img2').style.visibility="visible";
	document.getElementById('weight5').style.left = "525px";

	document.getElementById('canvas6_txt1').innerHTML="Tighten the Screw to Align the bar horizontally";
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 80px; top: 245px; height: 40px; z-index: 10;";

	myInt = setInterval(function(){ animatearrow(); }, 500);

	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById('canvas6_img2').onclick=function() { step6_2(); };
}

function step6_2()
{
	myStopFunction();
	document.getElementById('canvas6_img2').style.visibility = "hidden";
	document.getElementById('canvas6_img1').style.visibility = "visible";
	document.getElementById('canvas6_txt2').innerHTML="Load applied on lever = " + values[p][20] + " kg <br> Distance from center of Lever = " + values[p][21] + " cm <br> Recorded Readings on Spring = " + values[p][23] + "N";	
	document.getElementById('nextButton').style.visibility="visible";
}

function step7()
{
	myStopFunction();
	document.getElementById('weight6').style.left="525px";
	document.getElementById('weight6').style.top="325px";

	document.getElementById('canvas7_img1').style.visibility="visible";
	document.getElementById('canvas7_img2').style.visibility="hidden";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 561px; top: 320px; height: 40px; z-index: 10;";

    document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
		// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(270deg)";

	document.getElementById('weight6').onclick=function() { step7_1(); };
}

function step7_1()
{
	myStopFunction();
	document.getElementById('canvas7_img1').style.visibility="hidden";
	document.getElementById('canvas7_img2').style.visibility="visible";
	document.getElementById('weight6').style.left = "540px";

	document.getElementById('canvas7_txt1').innerHTML="Tighten the Screw to Align the bar horizontally";
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 80px; top: 245px; height: 40px; z-index: 10;";

	myInt = setInterval(function(){ animatearrow(); }, 500);

	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById('canvas7_img2').onclick=function() { step7_2(); };
}

function step7_2()
{
	myStopFunction();
	document.getElementById('canvas7_img2').style.visibility = "hidden";
	document.getElementById('canvas7_img1').style.visibility = "visible";
	document.getElementById('canvas7_txt2').innerHTML="Load applied on lever = " + values[p][25] + " kg <br> Distance from center of Lever = " + values[p][26] + " cm <br> Recorded Readings on Spring = " + values[p][28] + " N";	
	document.getElementById('nextButton').style.visibility="visible";
}


function step8()
{
	myStopFunction();
	document.getElementById('weight6').style.left="480px";
	document.getElementById('weight6').style.top="272px";
	document.getElementById('canvas8_img1').style.visibility="hidden";
	document.getElementById('canvas8_img2').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 60px; top: 200px; height: 40px; z-index: 10;";

    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
		// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";

	document.getElementById('canvas8_img2').onclick=function() { step8_1(); };
}

function step8_1()
{
	myStopFunction();
	document.getElementById('canvas8_img2').style.visibility="hidden";
	document.getElementById('canvas8_img1').style.visibility="visible";
	document.getElementById('question6').style.visibility="hidden";
	document.getElementById('question7').style.visibility="visible";
}

function step8_2()
{
	myStopFunction()
	if(document.getElementById('myList7').value == 3)
	{
		document.getElementById('Answer7').textContent="Correct Answer!";
		document.getElementById('nextButton').style.visibility="visible";
	}
else
{
	document.getElementById('Answer7').textContent="Incorrect Answer!";
}
}

function refresh1()
{
	document.getElementById('hand').style.transformOrigin = "";
	document.getElementById('hand').style.animation = "";
	document.getElementById('hand3').style.transformOrigin = "";
	document.getElementById('hand3').style.animation = "";
	document.getElementById('hand4').style.transformOrigin = "";
	document.getElementById('hand4').style.animation = "";
	document.getElementById('hand5').style.transformOrigin = "";
	document.getElementById('hand5').style.animation = "";
	document.getElementById("arrow1").style.animation = "";

	document.getElementById('can1').innerHTML="Empty weight of flask with stopper (W<sub>1</sub>)	=";
	document.getElementById('can2').innerHTML="Weight of flask + cement (W<sub>2</sub>) = ";
	document.getElementById('can3').innerHTML="Weight of flask + cement + kerosene (W<sub>3</sub>) =";

	document.getElementById('can4').innerHTML="Weight of flask + kerosene (W<sub>4</sub>) = ";
	document.getElementById('can5').innerHTML="Weight of flask+water (W<sub>5</sub>) =";
	document.getElementById('can6-1').innerHTML="Empty weight of flask with stopper (W<sub>1</sub>)=";

	document.getElementById('can6-2').innerHTML="Weight of flask + cement (W<sub>2</sub>) = ";
		document.getElementById('can6-3').innerHTML="Weight of flask + cement + kerosene (W<sub>3</sub>) =";
	document.getElementById('can6-4').innerHTML="Weight of flask + kerosene (W<sub>4</sub>) = ";
	document.getElementById('can6-5').innerHTML="Weight of flask+water (W<sub>5</sub>) =";

	 document.getElementById('v1').innerHTML="";
	 document.getElementById('v2').innerHTML="";
	 document.getElementById('v3').innerHTML="";
	 document.getElementById('v4').innerHTML="";
	 document.getElementById('v5').innerHTML="";


}

function refresh2()
{
	document.getElementById('output').value="";
}

function calculateSpecificGravity()
{
	document.getElementById("form").onclick=function()
	{
		document.getElementById("formula").style.visibility="visible";
		document.getElementById("r1").style.visibility="hidden";
		document.getElementById("w1").style.visibility="hidden";
	}

	document.getElementById("check").onclick=function()
	{
		document.getElementById("formula").style.visibility="hidden";
		if(!document.getElementById("output").value  || !document.getElementById("output").value!=" ")
		{
			alert("Enter the value to proceed ");
		}
		else
		{
			n = document.getElementById("output").value;
			console.log(values[p][7]);
			if(Math.round(n) == Math.round(values[p][7]))
			{
				document.getElementById("check").style.visibility="hidden";
				document.getElementById("form").style.visibility="hidden";
				document.getElementById("r1").style.visibility="visible";
				document.getElementById("result").style.visibility="hidden";
				document.getElementById("w1").style.visibility="hidden";
				// document.getElementById("p6-1").innerHTML="Specific gravity of cement = "+values[p][7];
				// document.getElementById("p6-1").style.visibility="visible";
				document.getElementById("nextButton").style.visibility="visible";
			}
			else
			{
				document.getElementById("result").style.visibility="visible";
				document.getElementById("w1").style.visibility="visible";
			}
		}
		document.getElementById("result").onclick=function()
		{
			document.getElementById("check").style.visibility="hidden";
			document.getElementById("result").style.visibility="hidden";
			document.getElementById("r1").style.visibility="hidden";
			document.getElementById("w1").style.visibility="hidden";
			document.getElementById("form").style.visibility="hidden";
			document.getElementById("formula").style.visibility="hidden";
			document.getElementById("6-1").style.visibility="hidden";
			document.getElementById("p6-1").innerHTML="Specific gravity of cement = "+values[p][7];
			document.getElementById("p6-1").style.visibility="visible";
			document.getElementById("nextButton").style.visibility="visible";
		}
	}
}

function calculateSpecificGravity2()
{
	document.getElementById("l6-1").style.visibility="hidden";
	document.getElementById("6-2").style.visibility="visible";
	document.getElementById("l6-2").style.visibility="visible";
	document.getElementById("form2").onclick=function()
	{
		document.getElementById("formula2").style.visibility="visible";
		document.getElementById("r2").style.visibility="hidden";
		document.getElementById("w2").style.visibility="hidden";
	}

	document.getElementById("check2").onclick=function()
	{
		document.getElementById("formula2").style.visibility="hidden";
		if(!document.getElementById("output2").value  || !document.getElementById("output2").value!=" ")
		{
			alert("Enter the value to proceed ");
		}
		else
		{
			n2 = document.getElementById("output2").value;
			console.log(values[p][7]);
			if(Math.round(n2) == Math.round(values[p][7]))
			{
				document.getElementById("check2").style.visibility="hidden";
				document.getElementById("form2").style.visibility="hidden";
				document.getElementById("r2").style.visibility="visible";
				document.getElementById("result2").style.visibility="hidden";
				document.getElementById("w2").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			}
			else
			{
				document.getElementById("result2").style.visibility="visible";
				document.getElementById("w2").style.visibility="visible";
			}
		}
		document.getElementById("result2").onclick=function()
		{
			document.getElementById("l6-2").style.visibility="hidden";
			document.getElementById("check2").style.visibility="hidden";
			document.getElementById("result2").style.visibility="hidden";
			document.getElementById("w2").style.visibility="hidden";
			document.getElementById("form2").style.visibility="hidden";
			document.getElementById("formula2").style.visibility="hidden";
			document.getElementById("6-2").style.visibility="hidden";
			document.getElementById("p6-2").innerHTML="Specific gravity of cement = "+values[p][7];
			document.getElementById("p6-2").style.visibility="visible";
			document.getElementById("nextButton").style.visibility="visible";
		}
	}
}

function checkInference()
{
	document.getElementById("ans").style.visibility="visible";
	if($("input[name='inf']:checked").val()==2)
	{
		document.getElementById("ans").innerHTML="Correct answer!";
	}
	else
	{
		document.getElementById("ans").innerHTML="Wrong! Answer is 2.8 - 3.15";
	}

	setTimeout(function()
	{
		document.getElementById("inference").style.visibility="hidden";
		if(average>=2.8 && average<=3.15)
		{
			document.getElementById("infAns").innerHTML="According to IS 10262, suggested range of specific gravity of cement for marine application is 2.8 - 3.15. The Specific gravity obtained for given cement sample is "+average+". So the test result is in range.";
		}
		else
		{
			document.getElementById("infAns").innerHTML="According to IS 10262, suggested range of specific gravity of cement for marine application is 2.8 - 3.15. The Specific gravity obtained for given cement sample is "+average+". So the test result is not in range.";
		}
		$("#infAns").fadeIn(750);
	},1000);
}

function displayAnswer1() {
    if (document.getElementById('option-11').checked) {
      document.getElementById('block-11').style.border = '3px solid limegreen'
      document.getElementById('result-11').style.color = 'limegreen'
	  document.getElementById('result-11').innerHTML = 'Correct!'
	  step2()
    }
    if (document.getElementById('option-12').checked) {
      document.getElementById('block-12').style.border = '3px solid red'
      document.getElementById('result-12').style.color = 'red'
      document.getElementById('result-12').innerHTML = 'Incorrect!'
      showCorrectAnswer1()
    }
    if (document.getElementById('option-13').checked) {
      document.getElementById('block-13').style.border = '3px solid red'
      document.getElementById('result-13').style.color = 'red'
      document.getElementById('result-13').innerHTML = 'Incorrect!'
      showCorrectAnswer1()
    }
    if (document.getElementById('option-14').checked) {
      document.getElementById('block-14').style.border = '3px solid red'
      document.getElementById('result-14').style.color = 'red'
      document.getElementById('result-14').innerHTML = 'Incorrect!'
      showCorrectAnswer1()
    }
  }
  // the functon displays the link to the correct answer
  function showCorrectAnswer1() {
    let showAnswer1 = document.createElement('p')
    showAnswer1.innerHTML = 'Show Corrent Answer'
    showAnswer1.style.position = 'relative'
    showAnswer1.style.top = '-180px'
    showAnswer1.style.fontSize = '1.75rem'
    document.getElementById('showanswer1').appendChild(showAnswer1)
    showAnswer1.addEventListener('click', () => {
      document.getElementById('block-11').style.border = '3px solid limegreen'
      document.getElementById('result-11').style.color = 'limegreen'
      document.getElementById('result-11').innerHTML = 'Correct!'
	  document.getElementById('showanswer1').removeChild(showAnswer1)
	  step2()
    })
  }

  function displayAnswer2() {
    if (document.getElementById('option-21').checked) {
      document.getElementById('block-21').style.border = '3px solid limegreen'
      document.getElementById('result-21').style.color = 'limegreen'
	  document.getElementById('result-21').innerHTML = 'Correct!'
	  step2()
    }
    if (document.getElementById('option-22').checked) {
      document.getElementById('block-22').style.border = '3px solid red'
      document.getElementById('result-22').style.color = 'red'
      document.getElementById('result-22').innerHTML = 'Incorrect!'
      showCorrectAnswer2()
    }
    if (document.getElementById('option-23').checked) {
      document.getElementById('block-23').style.border = '3px solid red'
      document.getElementById('result-23').style.color = 'red'
      document.getElementById('result-23').innerHTML = 'Incorrect!'
      showCorrectAnswer2()
    }
    if (document.getElementById('option-24').checked) {
      document.getElementById('block-24').style.border = '3px solid red'
      document.getElementById('result-24').style.color = 'red'
      document.getElementById('result-24').innerHTML = 'Incorrect!'
      showCorrectAnswer2()
    }
  }
  // the functon displays the link to the correct answer
  function showCorrectAnswer2() {
    let showAnswer1 = document.createElement('p')
    showAnswer1.innerHTML = 'Show Corrent Answer'
    showAnswer1.style.position = 'relative'
    showAnswer1.style.top = '-180px'
    showAnswer1.style.fontSize = '1.75rem'
    document.getElementById('showanswer2').appendChild(showAnswer2)
    showAnswer1.addEventListener('click', () => {
      document.getElementById('block-21').style.border = '3px solid limegreen'
      document.getElementById('result-21').style.color = 'limegreen'
      document.getElementById('result-21').innerHTML = 'Correct!'
	  document.getElementById('showanswer2').removeChild(showAnswer2)
	  step2()
    })
  }
