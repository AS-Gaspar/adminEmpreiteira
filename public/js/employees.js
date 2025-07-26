document.addEventListener("DOMContentLoaded", async () => {
    const employeesURL = 'http://localhost:3000/api/employees' 
    const request = await fetch(employeesURL)
    const employees = await request.json()
    const employeesTable = document.getElementById("employees-table")

    employees.forEach(employee => {
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
        tdDaysWorked.innerHTML = employee.days_worked

        trEmployee.appendChild(tdName)
        trEmployee.appendChild(tdCompany)
        trEmployee.appendChild(tdProfession)
        trEmployee.appendChild(tdDailyValue)
        trEmployee.appendChild(tdDaysWorked)

        employeesTable.appendChild(trEmployee)
    })
})