const prevBtn = document.querySelector('#prev')
const nxtBtn = document.querySelector('#nxt')
const circles = document.querySelectorAll('.circle')
const progress = document.querySelector('#progress-bar')

prevBtn.addEventListener('click',previous)
nxtBtn.addEventListener('click',next)
let currentElement = 1



function next(){
	currentElement++
	if (currentElement > circles.length) {
		currentElement = circles.length
	}
	update()
}
next()


function previous(){
	currentElement--
 if (currentElement < 1) {
 	currentElement = 1
 }
 update()
  
}
previous()



function update(){
	console.log(currentElement)
	circles.forEach((ele,index) => {
		if(index < currentElement){
			console.log(index)
			ele.classList.add('active')
		}else{
			ele.classList.remove('active')
		}
	})

 const actives = document.querySelectorAll('.active')
 progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
 
	if (currentElement === circles.length) {
		nxtBtn.disabled = true
	}else if (currentElement === 1) {
		prevBtn.disabled = true
	}
	else{
		nxtBtn.disabled = false
		prevBtn.disabled = false
	}
}