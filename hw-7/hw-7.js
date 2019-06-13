//PART 1



var sample = document.createElement('p')
sample.textContent = 'Click me!'
document.body.appendChild (sample)
sample.addEventListener('click', function clickHandler(event) {
	if(event.target.querySelector("img")) {
		console.log("Already has image");
		return;
    }
	var img = document.createElement('img')
		console.log(event.target.appendChild (img)
	)
	img.src = '1.jpg'
    img.setAttribute('width', '100px')
	img.setAttribute('style', 'transition:width 1s ease')
    img.onmouseenter = function (event){
    	img.setAttribute('width', '200px')
    }
    img.onmouseleave = function (event){
    	img.setAttribute('width', '100px')
    }
    img.onclick = function (event){
    	event.stopPropagation()
    	sample.removeChild(img)
    }
})



//PART 2
function over ( event ) {
    event.target.style.backgroundColor = '#ffff0050'
}
function out ( event ) {
   event.target.style.backgroundColor = '#ff00ff50'
}
function clickHandler ( event ) {
    event.target.remove()
}

[ "first", "second", "third", "fourth" ].forEach (
    function ( tag, index, arr  ) {
		var collection = []
    	var div = document.createElement('div')
		collection.push(div)
			div.setAttribute('id', tag)
			div.style = `
 				width: 80%;
				height: 80%;
				background-color: #ff00ff50;
                border: dotted 1px yellow;
                display: flex;
				justify-content: center;
    		`
		index === 0 ? document.body.appendChild(div) : document.getElementById(arr[index - 1]).appendChild(div)
		
div.onmouseover = over;
div.onmouseout = out;
div.onclick = clickHandler;
div.setAttribute('title', tag);
div.onmouseenter = function (event) {
	console.log(tag)
}
    })


//PART 3
function enter ( event ) {
    event.target.style.backgroundColor = '#ffff0050'
}
function leave ( event ) {
   event.target.style.backgroundColor = '#ff00ff50'
}
function clickHandler ( event ) {
	event.stopPropagation();
	event.target.outerHTML = event.target.innerHTML;
}

[ 1, 2, 3, 4, 5, 6, 7 ].forEach (
    function ( tag, index, arr  ) {
		var collection = []
    	var div = document.createElement('div')
		collection.push(div)
			div.setAttribute('id', tag)
			div.style = `
 				width: 80%;
				height: 80%;
				background-color: #ff00ff50;
				border: dotted 1px yellow;
				display: flex;
				justify-content: center;
    		`
		index === 0 ? document.body.appendChild(div) : document.getElementById(arr[index - 1]).appendChild(div)
		
div.onmouseenter = enter;
div.onmouseleave = leave;
div.onclick = clickHandler;
div.setAttribute('title', tag);
div.onmouseenter = function (event) {
	console.log(tag)
}
    })

