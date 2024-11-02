const Composisi = () => {
  const lists = [
    "Natrium Klorida 0.52 g",
    "Kalium Klorida 0.3 g",
    "Trisodium sitrat dihidrat 0.58 g",
    "Glukosa anhidrat 2.7 g",
  ];
  return (
    <div className="lg:text-sm lg:m-2 lg:p-2 m-4 pt-4">
      <h1 className="lg:text-3xl lg:my-2 sm:text-2xl poppins-semibold">Komposisi : </h1>
      <ul className="list-disc ml-4 poppins-regular">
        {lists.map((lists, index) => (
          <li key={index}>{lists}</li>
        ))}
      </ul>
      <hr className="my-4" />
    </div>
  );
};

export default Composisi;
