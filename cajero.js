var accounts = [
    { nombre: "ANDRES", saldo: 200 },
    { nombre: "LINDA", saldo: 290 },
    { nombre: "CANELA", saldo: 67 }
];

var selectedAccount = null; /*VARIBLE PARA IDENTIFICAR LA CUENTA*/

/*Funcion que escoge la cuenta y solicita la contraseña*/
function selectAccount(index) {
    selectedAccount = accounts[index];
    document.getElementById("accounts").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("titulo").textContent = "WELCOME " + selectedAccount.nombre + " TO BANK SS";
}

/* Funcion que solo muestra la seccion LOGIN*/
function login() {
  var password = document.getElementById("passwordInput").value;
  if (password === "1234") {
    document.getElementById("login").style.display = "none";
    document.getElementById("options").style.display = "block";
  } else {
    alert("Contraseña incorrecta. Intenta nuevamente.");
  }
}

/* Funcion que solo muestra la seccion CONSULTAR SALDO*/
function checkBalance() {
  document.getElementById("options").style.display = "none";
  document.getElementById("balance").style.display = "block";
  document.getElementById("balanceAmount").textContent = selectedAccount.saldo;
}

/* Funcion que solo muestra la seccion DEPOSITAR*/
function deposit() {
  document.getElementById("options").style.display = "none";
  document.getElementById("deposit").style.display = "block";
}

/* Funcion que solo muestra la seccion CONSULTAR SALDO*/
function confirmDeposit() {
  var amount = parseFloat(document.getElementById("depositAmount").value);
  if (isNaN(amount) || amount <= 0) {
    alert("Ingrese un monto válido.");
    return;
  }
  selectedAccount.saldo += amount;
  document.getElementById("deposit").style.display = "none";
  document.getElementById("balance").style.display = "block";
  document.getElementById("balanceAmount").textContent = selectedAccount.saldo;
}

function withdraw() {
  document.getElementById("options").style.display = "none";
  document.getElementById("withdraw").style.display = "block";
}

/* Funcion que solo muestra la seccion CONSULTAR SALDO*/
function confirmWithdraw() {
  var amount = parseFloat(document.getElementById("withdrawAmount").value);
  if (isNaN(amount) || amount <= 0) {
    alert("Ingrese un monto válido.");
    return;
  }
  if (amount > selectedAccount.saldo) {
    alert("No tienes suficiente saldo para realizar esta operación.");
    return;
  }
/*Como regla de negocio, el retiro no debe de ser más de $990 y menos de $10. Es necesario hacer las validaciones pertinentes para que no se rompa esta regla de negocio.*/
  if (amount > 990 || amount < 10) {
    alert("El monto a retirar no cumple con las reglas de negocio.");
    return;
  }
  selectedAccount.saldo -= amount;
  document.getElementById("withdraw").style.display = "none";
  document.getElementById("balance").style.display = "block";
  document.getElementById("oldAmountH3").style.display = "block";
  document.getElementById("oldAmount").style.display = "block";
  document.getElementById("oldAmount").style.display = "inline";
  document.getElementById("Amountwithdrawn").style.display = "inline";
  document.getElementById("Amountwithdrawn").textContent = " -" + amount
  document.getElementById("oldAmount").textContent = selectedAccount.saldo + amount;
  document.getElementById("balanceAmount").textContent = selectedAccount.saldo;
}

/*FUNCION PARA EL BOTON "SALIR A OPCIONES"*/
function goBack() {
  document.getElementById("balance").style.display = "none";
  document.getElementById("deposit").style.display = "none";
  document.getElementById("withdraw").style.display = "none";
  document.getElementById("options").style.display = "block";
  document.getElementById("oldAmountH3").style.display = "none";
  document.getElementById("oldAmount").style.display = "none";
  document.getElementById("Amountwithdrawn").style.display = "none";
}

/*FUNCION PARA EL BOTON "SALIR AL MENU PRINCIPAL"*/
function goBackIndex() {
  document.getElementById("accounts").style.display = "block"
  document.getElementById("login").style.display = "none";
  document.getElementById("options").style.display = "none";
  document.getElementById("balance").style.display = "none";
  document.getElementById("deposit").style.display = "none";
  document.getElementById("withdraw").style.display = "none";
  document.getElementById("oldAmountH3").style.display = "none";
  document.getElementById("oldAmount").style.display = "none";
  document.getElementById("Amountwithdrawn").style.display = "none";
  document.getElementById("titulo").textContent = "WELCOME TO BANK SS";
}