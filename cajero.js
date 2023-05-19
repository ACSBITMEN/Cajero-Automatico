var accounts = [
    { nombre: "Andres SB", saldo: 200 },
    { nombre: "Linda DM", saldo: 290 },
    { nombre: "Canela SB", saldo: 67 }
];

var selectedAccount = null;

function selectAccount(index) {
    selectedAccount = accounts[index];
    document.getElementById("accounts").style.display = "none";
    document.getElementById("login").style.display = "block";
}

function login() {
  var password = document.getElementById("passwordInput").value;
  if (password === "1234") {
    document.getElementById("login").style.display = "none";
    document.getElementById("options").style.display = "block";
  } else {
    alert("Contraseña incorrecta. Intenta nuevamente.");
  }
}

function checkBalance() {
  document.getElementById("options").style.display = "none";
  document.getElementById("balance").style.display = "block";
  document.getElementById("balanceAmount").textContent = selectedAccount.saldo;
}

function deposit() {
  document.getElementById("options").style.display = "none";
  document.getElementById("deposit").style.display = "block";
}

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
/*Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10. Es necesario hacer las validaciones pertinentes para que no se rompa esta regla de negocio.*/
  if (amount > 990 || amount < 10) {
    alert("El monto a retirar no cumple con las reglas de negocio.");
    return;
  }

  selectedAccount.saldo -= amount;
  document.getElementById("withdraw").style.display = "none";
  document.getElementById("balance").style.display = "block";
  document.getElementById("balanceAmount").textContent = selectedAccount.saldo;
}

/*FUNCION PARA EL BOTON "SALIR A OPCIONES"*/
function goBack() {
  document.getElementById("balance").style.display = "none";
  document.getElementById("deposit").style.display = "none";
  document.getElementById("withdraw").style.display = "none";
  document.getElementById("options").style.display = "block";
}

/*FUNCION PARA EL BOTON "SALIR AL MENU PRINCIPAL"*/
function goBackIndex() {
  document.getElementById("accounts").style.display = "block"
  document.getElementById("options").style.display = "none";
}