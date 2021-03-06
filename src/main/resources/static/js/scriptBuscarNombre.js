var listaPaciente= document.getElementById("listaPaciente");
function optenerNombre(){
	var nombre= document.getElementById("nombre").value;
	document.getElementById("nombre").value=("");
	cargarDatos(nombre);
}
function cargarDatos(nombre){
	var request = new XMLHttpRequest();
	request.onreadystatechange= function(){
		if(this.readyState==4 && this.status==200 ){
			var respuesta=JSON.parse(this.responseText);
			procesarDatos(respuesta);
		}
	}
	request.open('GET','http://localhost:8080/paciente/nombre/'+nombre,false);
	request.send();
}
function procesarDatos(pacientes){
	for(let paciente of pacientes){
		cerarPaciente(paciente);
	}
}
function cerarPaciente(paciente){
	
	let liElement=document.createElement("li");
	let ulElement=document.createElement("ul");
	let liNacimiento =document.createElement("li");
	let liCurp =document.createElement("li");
	let liTelefono =document.createElement("li");
	let liMovil =document.createElement("li");
	let liEmail =document.createElement("li");
	let liSexo =document.createElement("li");
	let liNacionalidad =document.createElement("li");
	let liTipoS =document.createElement("li");
	let liReligion =document.createElement("li");
	let liEscolaridad =document.createElement("li");
	let liOcupacion =document.createElement("li");
	

	liElement.innerText=("Paciente: "+paciente.nombre+" "+paciente.apellido );
	liNacimiento.innerText=("Fecha Nacimiento: "+paciente.fechaNacimiento);
	liCurp.innerText=("Curp: "+paciente.curp);
	liTelefono.innerText=("Telefono: "+paciente.telefono);
	liMovil.innerText=("Movil: "+paciente.movil);
	liEmail.innerText=("Email: "+paciente.email);
	liSexo.innerText=("Sexo: "+paciente.sexo);
	liNacionalidad.innerText=("Nacionalidad: "+paciente.nacionalidad);
	liTipoS.innerText=("Tipo Sanguinio: "+paciente.tipoSangre);
	liReligion.innerText=("Religion: "+paciente.religion);
	liEscolaridad.innerText=("Escolaridad: "+paciente.escolaridad);
	liOcupacion.innerText=("Ocupacion: "+paciente.ocupacion);
	
	ulElement.appendChild(liNacimiento);
	ulElement.appendChild(liCurp);
	ulElement.appendChild(liTelefono);
	ulElement.appendChild(liMovil);
	ulElement.appendChild(liEmail);
	ulElement.appendChild(liSexo);
	ulElement.appendChild(liNacionalidad);
	ulElement.appendChild(liTipoS);
	ulElement.appendChild(liReligion);
	ulElement.appendChild(liEscolaridad);
	ulElement.appendChild(liOcupacion);
	
	liElement.appendChild(ulElement);
	
	listaPaciente.appendChild(liElement);
}
	
