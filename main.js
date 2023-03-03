var date = new Date();
document.write(date.toLocaleDateString());
document.write('<br>');
 
var b = date.getHours();
if(b>0 && b<12){
    document.write("Morning");	
	document.write('<br>');
}
else if(b>=12 && b<=16){
	document.write("Afternoon");	
	document.write('<br>');
}
else if(b>16 && b<=18){
	document.write("Evening");
	document.write('<br>');
}
else if(b>18 && b<=24){
		document.write("night");
	document.write('<br>');
}