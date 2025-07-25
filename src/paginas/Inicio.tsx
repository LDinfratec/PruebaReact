export default function Inicio() {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <h1 className="text-4xl font-bold mb-6">
        ESTAMOS ESCRIBIENDO LA HISTORIA DE LA
        <br />
        <span className="text-yellow-500">ENERGÍA DEL FUTURO</span>
      </h1>

      {/* 📷 Imagen principal de fondo o ilustración va aquí */}
      <div className="mt-10">
        <img
          src="./imagenes/inicio-hero.jpg"
          alt="Imagen principal"
          className="mx-auto"
        />
      </div>
    </section>
  )
}
