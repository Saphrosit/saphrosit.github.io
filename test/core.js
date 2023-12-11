var papers = document.getElementById("papers");


function main() {
    
	var s;

    var contents = fetch('file.txt', {cache: "no-cache"})
	.then((res) => res.text())
	.then((text) => {
		papers.innerHTML = text;
	   }).catch((e) => console.error(e));

    // Reset output
    // toInput.value = '';
    papers.innerHTML = '';

    // Contents to format
    

    // If empty, return nothing!
    if (contents == '') {
        console.log('Contents are empty!');
        return;
    }

    papers.innerHTML += s; 

    var HUB = MathJax.Hub;
    HUB.Queue(["Typeset", HUB, "papers"]);
}

main();
