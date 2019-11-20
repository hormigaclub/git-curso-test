function numeroAleatorio(min,max){
	const numero=Math.floor((Math.random()*max)+min);
	return numero;
}

module.exports = {
	numeroAleatorio
}
