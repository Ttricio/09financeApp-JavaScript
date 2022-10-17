const icomeSection = document.querySelector(".income-area")
const expensesSection = document.querySelector(".expenses-area")
const availableMoney = document.querySelector(".available-money")
const addTrancasctionPanel = document.querySelector(".add-transaction-panel")

const nameInput = document.querySelector("#name")
const amountInput = document.querySelector("#amount")
const categorySelect = document.querySelector("#category")

const addTransactionBtn = document.querySelector(".add-transaction")
const saveBtn = document.querySelector(".save")
const cancelBtn = document.querySelector(".cancel")
const deleteBtn = document.querySelector(".delete")
const deleteAllBtn = document.querySelector(".delete-all")

let root = document.documentElement
let ID = 0
let categoryIcon
let electedCategory
let moneyArr = [0]

const showPanel = () => {
	addTrancasctionPanel.style.display = "flex"
}
const closePanel = () => {
	addTrancasctionPanel.style.display = "none"
	clearInputs()
}

checkForm = () => {
	if (
		nameInput.value !== "" &&
		amountInput.value !== "" &&
		categorySelect.value !== "none"
	) {
		console.log("ok")
	} else {
		alert("Wypełnij wszystkie pola")
	}
}
const clearInputs = () => {
	nameInput.value = ""
	amountInput.value = ""
	categorySelect.selectedIndex = 0
}
const createNewTransaction = () => {
	const newTransaction = document.createElement("div")
	newTransaction.classList.add("transaction")
	newTransaction.setAttribute("id", ID)
	newTransaction.innerHtml = `
    <p class='transaction-name'>
			${categoryIcon}${nameInput.value}
		</p>
		<p class='transaction-amount'>
			${amountInput.value}zł
			<button class='delete' onclick='deleteTransaction(${ID})'>
				<i class='fas fa-times'></i>
			</button>
		</p>
    `
amountInput.value > 0 ? 

}
addTransactionBtn.addEventListener("click", showPanel)
cancelBtn.addEventListener("click", closePanel)
saveBtn.addEventListener("click", checkForm)
