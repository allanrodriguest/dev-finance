const Modal = {
  open() {
    // Try to implement toggle here

    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    document.querySelector(".modal-overlay").classList.remove("active");
  },
};

const transactions = [
  {
    id: 1,
    description: "Hydro",
    amount: -50000,
    date: "23/01/2021",
  },
  {
    id: 2,
    description: "Website Creation",
    amount: 500000,
    date: "23/01/2021",
  },
  {
    id: 3,
    description: "Internet",
    amount: -20000,
    date: "23/01/2021",
  },
];

const Transaction = {
  incomes() {},
  expenses() {},
  total() {},
};

const DOM = {

    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)

    },

    innerHTMLTransaction() {
        const CSSclass = transaction.amount > 0 ? "income" : "expense";

        const amount = Utils.formatCurrency(transaction.amount);

        const html = `
              <td class="description">${transaction.description}</td>
              <td class="${CSSclass}">${transaction.expense}</td>
              <td class="date">${transaction.date}</td>
              <td>
                <img src="./assets/minus.svg" alt="Remove Transaction" />
              </td>
            `
            return html;

    },

    updateBalance() {
        
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : "";

        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100;

        value = value.toLocaleString("en-US", {
            style: "currency",
            currency: "CAD"
        })

        return signal + value
    }
}

transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)    
})