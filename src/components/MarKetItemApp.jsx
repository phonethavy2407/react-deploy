import { useState } from "react";
const MarKetItemApp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const itemName = formData;
  };
  return (
    <div>
      <h1>ແອັບຈົດບັນທຶກ</h1>
      <form onSubmit={handleSubmit} className="market-app-form">
        <input
          name="name"
          id="name"
          type="text"
          placeholder="ປ້ອນລາຍການທີ່ຈ້ອງຊື້"
        />
        <button>ເພີ່ມລາຍການ</button>
      </form>
    </div>
  );
};

export default MarKetItemApp;
