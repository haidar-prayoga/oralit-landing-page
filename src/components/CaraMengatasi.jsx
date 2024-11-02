const CaraMengatasi = () => {
  const lists = [
    "Memberikan ASI eksklusif selama 6 bulan dan diteruskan sampai 2 tahun.",
    "Memberikan makanan pendamping ASI sesuai umur.",
    "Memberikan minum air putih yang sudah direbus dan menggunakan air bersih yang cukup.",
    "Mencuci tangan dengan air dan sabun sebelum makan dan sesudah BAB.",
    "Buang air besar di jamban.",
    "Membuang tinja bayi dengan benar.",
    "Memberikan imunisasi campak.",
  ];
  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold">Bagaimana cara mengatasinya?</h1>
      <ul className="list-disc ml-5">
        {lists.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  );
};

export default CaraMengatasi;
