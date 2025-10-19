document.addEventListener("DOMContentLoaded", function(){
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const btnSuma = document.getElementById("btnSuma");
    const btnRestar = document.getElementById("btnRestar");
    const btnMultiplicar = document.getElementById("btnMultiplicar");
    const btnDividir = document.getElementById("btnDividir");
    const resultadoTexto = document.getElementById("resultados");
    const historial = document.getElementById("historial");

    btnSuma.addEventListener("click", suma);
    btnRestar.addEventListener("click", resta);
    btnMultiplicar.addEventListener("click", multiplicacion);
    btnDividir.addEventListener("click", division);

    function suma(){
        const numeros = validaNum();
        if(!numeros)
            return;

        const resultado = numeros.n1 + numeros.n2;
        mostrar(resultado);
        agregarHist(`${numeros.n1} + ${numeros.n2} = ${resultado}`);
    }
    function resta(){
        const numeros = validaNum();
        if(!numeros)
            return;

        const resultado = numeros.n1 - numeros.n2;
        mostrar(resultado);
        agregarHist(`${numeros.n1} - ${numeros.n2} = ${resultado}`);
    }
    function multiplicacion(){
        const numeros = validaNum();
        if(!numeros)
            return;

        const resultado = numeros.n1 * numeros.n2;
        mostrar(resultado);
        agregarHist(`${numeros.n1} x ${numeros.n2} = ${resultado}`);
    }
    function division(){
        const numeros = validaNum();
        if(!numeros)
            return;

        if(numeros.n2 == 0){
            resultadoTexto.textContent = "No se puede dividir entre 0";
            return;
        }
        const resultado = numeros.n1 / numeros.n2;
        mostrar(resultado);
        agregarHist(`${numeros.n1} / ${numeros.n2} = ${resultado}`);
    }

    function validaNum(){
        const val1 = num1Input.value;
        const val2 = num2Input.value;
        if(val1 == "" || val2 == ""){
            resultadoTexto.textContent = "Debe introducir al menos un valor";
            return null;
        }

        const n1 = parseFloat(val1);
        const n2 = parseFloat(val2);
        return{n1,n2};
    }

    function mostrar(valor){
        resultadoTexto.textContent = "Resultado: " + valor;
    }

    function agregarHist(texto){
        const nuevoCalculo = document.createElement("li");
        nuevoCalculo.textContent = texto;
        historial.prepend(nuevoCalculo);
    }
});