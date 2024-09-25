import React from 'react';
import './Hero.css'; // Import custom CSS

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://via.placeholder.com/400"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Keuangan Image"
        />
        <div className="max-w-xxl text-center lg:text-left">
          <h1 className="text-5xl font-bold typing-effect">
            Kelola Keuanganmu dengan Mudah
          </h1>
          <p className="py-6 text-lg">
            Catat semua pemasukan dan pengeluaran kamu dengan cepat dan efisien.
            Pantau kondisi finansialmu kapan saja, di mana saja.
          </p>
          <button className="btn btn-primary transition ease-in-out duration-300 hover:scale-110">
            Mulai Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
