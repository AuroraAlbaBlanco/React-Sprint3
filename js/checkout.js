// Exercise 6

let boton = document.getElementById('btn');
let inputs = document.querySelectorAll('.form input');
const expresiones = {
	fName: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
	LName: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password:/^[a-zA-Z0-9]{4,8}$/,
	address:/^\w[a-zA-ZÀ-ÿ0-9\s]{1,}?\d{0,9}(-)?\{3-40}$/, 
	phone:/^\d{9}$/
}

const campos = {
	fName: false,
	LName: false,
	email: false,
	password: false,
	address: false,
	phone: false
}

const validarFormulario = (e) => {
	switch(e.target.name){
		case 'fName':
			if(expresiones.fName.test(e.target.value)){
				document.getElementById('fName').classList.remove('is-invalid'); 
				document.getElementById('fName').classList.add('is-valid'); 
				campos['fName'] = true;
		
			}else{
				document.getElementById('fName').classList.add ('is-invalid'); 
				campos['fName'] = false;
			}
		break;
		case 'fEmail':
			if(expresiones.email.test(e.target.value)){
				document.getElementById('fEmail').classList.remove('is-invalid'); 
				document.getElementById('fEmail').classList.add('is-valid'); 
				campos['email'] = true;
		
			}else{
				document.getElementById('fEmail').classList.add ('is-invalid'); 
				campos['email'] = false;
			}
		
		break;
		case 'fAddress':
			if(expresiones.address.test(e.target.value)){
				document.getElementById('fAddress').classList.remove('is-invalid'); 
				document.getElementById('fAddress').classList.add('is-valid'); 
				campos['address'] = true;
		
			}else{
				document.getElementById('fAddress').classList.add ('is-invalid'); 
				campos['address'] = false;
			}
		
		break;
		case 'fLastN':
			if(expresiones.LName.test(e.target.value)){
				document.getElementById('fLastN').classList.remove('is-invalid'); 
				document.getElementById('fLastN').classList.add('is-valid'); 
				campos['LName'] = true;
		
			}else{
				document.getElementById('fLastN').classList.add ('is-invalid'); 
				campos['LName'] = false;
			}
		
		break;
		case 'fPassword':
			if(expresiones.password.test(e.target.value)){
				document.getElementById('fPassword').classList.remove('is-invalid'); 
				document.getElementById('fPassword').classList.add('is-valid'); 
		
			}else{
				document.getElementById('fPassword').classList.add ('is-invalid'); 
			}
		
		break;
		case 'fPhone':
			if(expresiones.phone.test(e.target.value)){
				document.getElementById('fPhone').classList.remove('is-invalid'); 
				document.getElementById('fPhone').classList.add('is-valid'); 
				campos['phone'] = true;
		
			}else{
				document.getElementById('fPhone').classList.add ('is-invalid'); 
				campos['phone'] = false;
			}
		
		break;
	}
	
}

inputs.forEach((input)=>{
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
})

function validate(e){
	validarFormulario(e);
}


boton.addEventListener('submit', (e)=>{
	e.preventDefault();
});



