async function loadData() {
    const WorksURL = "http://localhost:3000/api/works"
    const worksTable = document.getElementById("works_table")
    const requestResult = (await window.fetch(WorksURL)).json()
    const works = await requestResult.json()

    works.forEach(work => {
        let trWork = document.createElement("tr")
        let tdWorkName = document.createElement("td")
        let workPath = document.createElement("a")
        let id = work.id

        tdWorkName.innerHTML = work.name
        workPath.href = `work.html?id=${id}`
        workPath.textContent = 'Acess Work'
        trWork.appendChild(tdWorkName)
        trWork.appendChild(workPath)
        worksTable.appendChild(trWork)
    })


}