export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-xl">VISUAL</div>
        <ul className="flex gap-6 text-sm font-medium">
          <li>Inicio</li>
          <li>Conócenos</li>
          <li>Servicios</li>
          <li>Proyectos</li>
          <li>Contáctanos</li>
        </ul>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">
          QUIERO COTIZAR
        </button>
      </nav>
    </header>
  )
}
