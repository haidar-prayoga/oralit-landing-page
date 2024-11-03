const KeDokter = () => {
    const lists = [
        "Jika diare berlangsung selama lebih dari 2 hari.",
        "Mengalami dehidrasi (ditandai dengan haus berlebihan, mulut kering, lemas, pusing, dsb).",
        "Diare disertai rasa sakit pada dubur dan perut yang parah.",
        "Diare dengan tinja berdarah berwarna merah atau hitam.",
        "Diare disertai demam diatas 38,5°C.",
        "Diare disertai demam diatas 38,5°C dan muntah.",
        "Diare disertai muntah berdarah.",
        "Diare disertai muntah berdarah dan demam diatas 38,5°C.",
    ];
    return (
        <>
            <div className="lg:m-5 ms-4 pt-3 pb-4">
                <h2 className="text-3xl poppins-semibold"><span className="mx-2"><i className="fa-solid fa-stethoscope"></i></span>Kapan harus ke dokter?</h2>
                <div className="m-5">
                    <ol type="1" className="list-decimal ml-4 poppins-regular">
                        {lists.map((list, index) => (
                            <li key={index}>{list}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    );
};

export default KeDokter;