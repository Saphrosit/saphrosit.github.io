var papers = document.getElementById("papers");


function main() {
    
	var s;

    var contents = fetch('file.txt', {cache: "no-cache"})
	.then((res) => res.text())
	.then((text) => {
		papers.innerHTML = text;
	   }).catch((e) => console.error(e));

	// MathJax.typeset();
}

main();
