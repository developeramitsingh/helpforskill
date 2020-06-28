import React from 'react';

	var runtimer
	let isPaused = false
	const timer = (testLoadState)=>{		
		let time= testLoadState.testData[0].time
		let hour = parseInt(time)-1;
		let minut = 59;
		let seconds = 59;
		
		runtimer = window.setInterval(()=>{
			console.log(isPaused,"inside")

			if(!isPaused){
				if(seconds<0){
					seconds = 59;
					minut--
				}
				if(minut<0){
					minut = 59
					hour--
				}
				if(hour === 0 && minut === 0 && seconds === 0){
					clearInterval(runtimer)
				}
				try{
					document.getElementsByClassName("timeSpan")[0].innerHTML = hour +"h "+minut+ "m " + seconds+"s"
				}catch(err){
					clearInterval(runtimer)	
				}			
			
				seconds--;
			}	
			
		},1000)
	}

	const pauseExam = ()=>{
		if(!isPaused){
			isPaused = true
			document.getElementsByClassName("pauseTime")[0].innerHTML = "Resume"
			console.log(isPaused)
			document.getElementsByClassName("sectionBelow")[0].classList.add("PauseTest")
			
		}
		else{
			isPaused = false
			document.getElementsByClassName("pauseTime")[0].innerHTML = "Pause"
			console.log(isPaused)	
			document.getElementsByClassName("sectionBelow")[0].classList.remove("PauseTest")
		} 
		
	}

	const clearTimer = ()=>{
		clearInterval(runtimer)
	}

	export {timer, pauseExam, clearTimer}
	