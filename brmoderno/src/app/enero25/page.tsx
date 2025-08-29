import Image from "next/image";
import logobr from "@/public/images/logobr.png";
import Link from "next/link";

export default function Enero25Page() {
  return (
    <main className="min-h-screen bg-gray-100 font-[Poppins] flex flex-col items-center">
      <section className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 mt-8">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/">
            <span className="text-2xl text-blue-600 hover:underline">
              &#8592;
            </span>
          </Link>
          <Link href="/">
            <Image src={logobr} alt="logo-br" className="w-12 h-12" />
          </Link>
          <h1 className="text-3xl font-bold ml-4">Enero 2025</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg text-center">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-2">FRAN</th>
                <th className="px-4 py-2">S6/01</th>
                <th className="px-4 py-2">S13/01</th>
                <th className="px-4 py-2">S20/01</th>
                <th className="px-4 py-2">S27/01</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="bg-blue-200">ALEF</th>
                <td className="bg-blue-200">xx</td>
                <td className="bg-blue-200">x</td>
                <td className="bg-blue-200">x</td>
                <td className="bg-blue-200">x</td>
              </tr>
              {/* Agrega aquí el resto de las filas según el HTML original */}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
