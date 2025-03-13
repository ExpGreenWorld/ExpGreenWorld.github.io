import { Facebook, MapPin, Recycle, Leaf, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Banner Header */}
      <div className="w-full bg-gradient-to-r from-green-700 to-green-500 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-600"
              >
                <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
                <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
                <path d="m14 16-3 3 3 3" />
                <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
                <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
                <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Exportadora Green World</h1>
              <p className="text-sm text-green-100">Recycle & Biofuels</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 flex flex-col items-center flex-grow">
        {/* Facebook Cover Image */}
        <div className="w-full max-w-3xl mb-12 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Portada%20para%20Facebook%20Dentista%20Minimalista%20Azul-zKOppNZIr9qBdKmFGXIc1crDG9xLl8.png"
            alt="Exportadora Green World Facebook Cover"
            width={820}
            height={312}
            className="w-full h-auto"
          />
        </div>

        {/* Quiénes Somos Section */}
        <section className="w-full max-w-3xl mb-12">
          <div className="bg-green-50 rounded-lg p-8 shadow-md border border-green-100">
            <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
              <Leaf className="h-6 w-6" />
              Quiénes Somos
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full mt-1">
                  <Recycle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-700 text-lg mb-1">100% Colimense</h3>
                  <p className="text-green-800">
                    Exportadora Green World es una empresa 100% colimense comprometida con el medio ambiente y el
                    desarrollo sostenible de nuestra región. Nacimos con la visión de transformar la forma en que
                    nuestra comunidad maneja sus residuos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-green-700 text-lg mb-1">Reducción de Residuos PET</h3>
                  <p className="text-green-800">
                    Nos especializamos en la recolección y procesamiento de residuos de plástico PET, transformándolos
                    en recursos valiosos. Nuestro compromiso es reducir la cantidad de plástico que termina en
                    vertederos y océanos, dándole una segunda vida a través del reciclaje.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full mt-1">
                  <Globe className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-700 text-lg mb-1">Un Futuro Más Verde</h3>
                  <p className="text-green-800">
                    Trabajamos incansablemente para promover prácticas ecológicas en nuestra comunidad y más allá.
                    Nuestro objetivo es contribuir a un mundo más verde y limpio para las generaciones futuras, creando
                    conciencia sobre la importancia del reciclaje y la sostenibilidad en cada acción que realizamos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Message */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-12 max-w-2xl w-full">
          <h2 className="text-2xl font-semibold text-green-800 mb-3">Sitio en Mantenimiento</h2>
          <p className="text-green-700">
            Estamos trabajando para mejorar nuestro sitio web y brindarle una mejor experiencia. Por favor, visite
            nuestra página de Facebook para obtener información actualizada o contáctenos directamente.
          </p>
        </div>

        {/* Facebook Link */}
        <Link
          href="https://www.facebook.com/profile.php?id=61573616870460"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg mb-12 transition-colors"
        >
          <Facebook size={20} />
          Visítanos en Facebook para más información y actualizaciones
        </Link>

        {/* Location Information */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MapPin className="text-green-600" />
            <h3 className="text-lg font-medium text-green-800">VILLA DE ALVAREZ, COL.</h3>
          </div>
        </div>

        {/* Google Maps */}
        <div className="w-full max-w-4xl mb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold text-green-800">Nuestra Ubicación</h2>
          </div>
          <div className="w-full h-96 rounded-lg overflow-hidden border-2 border-green-200 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d395.8496910938142!2d-103.7681237867632!3d19.28331625086493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842544fc3438d3e7%3A0xa1a133e9621f254c!2sEXPORTADORA%20GREEN%20WORLD%20SA%20DE%20CV!5e0!3m2!1ses!2smx!4v1741882348967!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Exportadora Green World"
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <Link
              href="https://maps.app.goo.gl/BQewkhgcgjNLqwd69"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800 underline font-medium"
            >
              Ver en Google Maps
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 bg-green-50 border-t border-green-100 text-center text-green-700">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Exportadora Green World. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

