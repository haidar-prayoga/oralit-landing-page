import React from 'react';

const Typography = () => {
    const lists = [
        "Infeksi virus, bakteri dan parasit", "Keracunan makanan", "Alergi makanan tertentu", "Efek samping obat tertentu", "Penyakit pada usus", "Stress, gangguan psikologis"
    ]
    return (
        <div className="m-5 pt-5 text-white">
            <div className='mb-2'>
                <h1 className='lg:text-[2.5em] text-[1.5em]'>Apa itu diare?</h1>
                <p className="text-[1em] px-4">
                    Diare merupakan penyakit yang menyebabkan seseorang buang air besar lebih sering (lebih dari 3 kali dalam sehari) dengan kondisi tinja yang encer.
                </p>
            </div>

            <div className='text-white my-5'>
                <h1 className='lg:text-[2.5em] text-[1.5em]'>Faktor penyebab diare</h1>
                <ul className=" text-[1em] list-disc ps-7">
                    {lists.map((list, index) => (
                        <li key={index}>{list}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Typography;