const GejalaDiare = () => {
    const lists = [
        "Gelisah atau rewel.", "Buang air besar lebih dari 3 kali sehari dengan bentuk encer atau cair.", "Muntah Badan lemah dan lesu.", "Mukosa mulut kering, mata dan ubun-ubun cekung.", "Nafsu makan menurun.", "Badan panas."
    ]
    return (
        <div className="p-4">
            <h1 className="text-3xl font-semibold">Tanda dan gejala diare pada anak</h1>
            <ul className="list-disc ml-5">
                {lists.map((list, index) => {
                    return <li key={index}>{list}</li>
                })}
            </ul>
        </div>
    )
}

export default GejalaDiare