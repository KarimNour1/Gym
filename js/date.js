
var quotes = ["If you want something you’ve never had, you must be willing to do something you’ve never done.",
    "The body achieves what the mind believes.",
    "Dead last finish is greater than did not finish, which trumps did not start."];
// function randomQuote() {
//     let indx = Math.round(Math.random(quotes.length));
//     document.getElementById('q1').innerHTML = quotes[indx];
//     document.getElementById('q1').style.backgroundColor = 'red';
//     document.getElementById('q1').style.color = 'white';
// }
function getDate() {
    var d = new Date();
    var date = "date is : " + d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    var time = "time is :" + d.getHours() + " : " + d.getMinutes();
    document.getElementById('date').innerHTML = date;
    document.getElementById('tim').innerHTML = time;
}
function show()
            {
                if (document.getElementById('s').style.display == "none")
                {
                    document.getElementById('s').style.display = "block";
                    document.getElementById('m').style.filter = "blur(5px)";
                    document.getElementById('m').style.transform = "scale(1.3)";
                }
                else
                {
                    document.getElementById('s').style.display = "none";
                    document.getElementById('m').style.filter = "blur(0)";
                    document.getElementById('m').style.transform = "scale(1)";
                }
            }
function show2()
            {
                if (document.getElementById('s2').style.display == "none")
                {
                    document.getElementById('s2').style.display = "block";
                    document.getElementById('m2').style.filter = "blur(5px)";
                    document.getElementById('m2').style.transform = "scale(1.3)";
                }
                else
                {
                    document.getElementById('s2').style.display = "none";
                    document.getElementById('m2').style.filter = "blur(0)";
                    document.getElementById('m2').style.transform = "scale(1)";
                }
            }
function show3()
            {
                if (document.getElementById('s3').style.display == "none")
                {
                    document.getElementById('s3').style.display = "block";
                    document.getElementById('m3').style.filter = "blur(5px)";
                    document.getElementById('m3').style.transform = "scale(1.3)";
                }
                else
                {
                    document.getElementById('s3').style.display = "none";
                    document.getElementById('m3').style.filter = "blur(0)";
                    document.getElementById('m3').style.transform = "scale(1)";
                }
            }
function drop1(){
                var x = document.getElementById('dc').style;
                if (document.getElementById("dc").style.display=="none")
                {
                    document.getElementById("dc").style.display="block";
                }
                else
                {
                    document.getElementById("dc").style.display="none";
                }
}
function drop2()
{
    var x = document.getElementById('u1').style;
    if (x.display == "none")
    {
        document.getElementById('u1').style.display = "block";
    }
    else
    {
        document.getElementById('u1').style.display = "none";
    }
}