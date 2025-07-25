export default function Beneficios() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-6 text-gray-700">
        BENEFICIOS AL OBTENER TU PROYECTO SOLAR
      </h2>
      <p className="mb-4 text-gray-600">
        Descuento del impuesto predial.
      </p>
      <p className="text-gray-600">
        “Nos ocupamos de cada detalle para que tú solo te preocupes por
        disfrutar de los beneficios de la Energía Solar”
      </p>

      {/* 📷 Aquí puedes insertar una imagen relacionada con beneficios */}
      <div className="mt-10">
        <img src="./imagenes/beneficios.jpg" alt="Beneficios" className="mx-auto" />
      </div>
    </section>
  )
}
