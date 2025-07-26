async function loadData() {
    const serverURL = "http://localhost:3000/api/works"
    const worksTable = document.getElementById("works_table")
    const requestResult = await window.fetch(serverURL)
    const works = await requestResult.json()

    works.forEach(work => {
        let trWork = document.createElement("tr")
        let tdWorkName = document.createElement("td")
        let tdWorkBuilder = document.createElement("td")
        let tdWorkAddress = document.createElement("td")

        tdWorkName.innerHTML = work.name
        tdWorkBuilder.innerHTML = work.builder
        tdWorkAddress.innerHTML = work.address

        trWork.appendChild(tdWorkName)
        trWork.appendChild(tdWorkBuilder)
        trWork.appendChild(tdWorkAddress)

        worksTable.appendChild(trWork)
    })
}