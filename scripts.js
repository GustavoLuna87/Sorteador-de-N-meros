const button = document.querySelector(".buttonResult");
const input = document.querySelector(".input-result");

button.addEventListener('click', function() {
    
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if( min >= max ){
      alert( "O valor mínimo tem que ser Menor que o valor máximo")
    }
  
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

  input.value = result
})
