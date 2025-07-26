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
})