function calculateAverageOf4Numbers(numA, numB, numC, numD){
	if(typeof numA == "number" && typeof numB == "number" && typeof numC == "number" && typeof numD == "number"){
		// yes
		return (numA, numB, numC, numD)/4; 
	}else{
		// no
		return "Invalid input";
	}
}