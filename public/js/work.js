document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search)
    const id = params.get("id")

    if (id) {
        const response = await fetch(`http://localhost:3000/api/work/${id}`)
        const work = await response.json()

        document.getElementById("work").textContent = work.name
        document.getElementById("builder").textContent = work.builder
        document.getElementById("address").textContent = work.address


    } else {
        document.body.textContent = "Obra não encontrada"
    }
    loadEmployees(id)
})

async function loadEmployees(work_id) {
    const response = await fetch(`http://localhost:3000/api/employees`)
    const employees = await response.json()
    const employeesTable = document.getElementById("employees-table")

    employees.forEach(employee => {
        if (employee.work_id == work_id) {
            let trEmployee = document.createElement("tr")
            let tdName = document.createElement("td")
            let tdCompany = document.createElement("td")
            let tdProfession = document.createElement("td")
            let tdDailyValue = document.createElement("td")
            let tdDaysWorked = document.createElement("td")

            tdName.innerHTML = employee.name
            tdCompany.innerHTML = employee.company
            tdProfession.innerHTML = employee.profession
            tdDailyValue.innerHTML = employee.daily_value
            tdDaysWorked.innerHTML - employee.days_worked

            trEmployee.appendChild(tdName) 
            trEmployee.appendChild(tdCompany)
            trEmployee.appendChild(tdProfession)
            trEmployee.appendChild(tdDailyValue)
            trEmployee.appendChild(tdDaysWorked)

            employeesTable.appendChild(trEmployee)
        }
    })
}