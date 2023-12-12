var papers = document.getElementById("papers");


function main() {
    
    var contents = fetch('file.txt', {cache: "no-cache"})
	.then((res) => res.text())
	.then((text) => {
		papers.innerHTML = text;
	   })
	.then(MathJax.typeset).catch((e) => console.error(e));

   	
	   var fm = document.getElementById("fmath");
	   fm.innerHTML = '$\\sqrt{2}$';
   
	   var contents = fetch('file2.txt', {cache: "no-cache"})
	   .then((res) => res.text())
	   .then((text) => {
		var p2 = document.getElementById("p2");
		   p2.innerHTML = text;
		  }).catch((e) => console.error(e));
   
}

main();
