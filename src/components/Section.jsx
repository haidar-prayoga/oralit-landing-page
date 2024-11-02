import React from "react";
const Section = () => {
  const lists = [
    "Jangan memakai air sedang mendidih atau sedang direbus.",
    "Jika penderita muntah pemberian larutan Oralit dihentikan dahulu kemudian dilanjutkan lagi. Larutan Oralit diberikan sedikit demi sedikit dan sering, sampai habis.",
    "Pemberian Oralit dapat dihentikan setelah penderita segar kembali dan tidak merasa haus lagi.",
    "Setelah lebih dari 24 jam jangan diminum lagi, buatlah larutan yang baru.",
    "Selama diare makanan dan minuman harus tetap diberikan dan sesudah diare diberikan minuman ekstra.",
    `Untuk bayi yang disusui dengan ASI, pemberian ASI sekurang-kurangnya 3 jam selama masa diare. Sedangkan dengan pemberian susu formula dapat terus diberikan tetapi diselingi dengan air putih dengan jumlah yang sama banyak dan diberikan paling sedikit
    setiap 3 jam sekali.`, "Bila sampai hari kedua penderita masih terus diare, atau bila keadaan penderita menjadi lebih parah, penderita harus segera dibawa ke tempat pelayanan kesehatan (Puskesmas/ Rumah Sakit) terdekat. Selama dalam perjalanan larutan Oralit terus diberikan",
    "Pada penderita kolera dewasa perlu dimonitor gejala hiponatremia."
  ];
  return (
    <div className="lg:m-5 ms-4 pt-3 pb-4">
      <h2 className="text-3xl poppins-semibold">Perhatian :</h2>
      <div className="m-5">
        <ol type="1" className="list-decimal ml-4 poppins-regular">
          {lists.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Section  
