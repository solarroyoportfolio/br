import Image from "next/image";
import logobr from "@/public/images/logobr.png";
import Link from "next/link";

export default function Junio2025Page() {
  return (
    <main className="min-h-screen bg-gray-100 font-[Poppins] flex flex-col items-center">
      <section className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 mt-8">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/">
            <span className="text-2xl text-blue-600 hover:underline">&#8592;</span>
          </Link>
          <Link href="/">
            <Image src={logobr} alt="logo-br" className="w-12 h-12" />
          </Link>
          <h1 className="text-3xl font-bold ml-4">Junio 2025</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg text-center">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-2"></th>
                <th className="px-4 py-2">S2/06</th>
                <th className="px-4 py-2">S9/06</th>
                <th className="px-4 py-2">S16/06</th>
                <th className="px-4 py-2">S23/06</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="bg-blue-200">APILLI PACK</th>
                <td className="bg-blue-200">xxx</td>
                <td className="bg-blue-200"></td>
                <td className="bg-blue-200"></td>
                <td className="bg-blue-200">xx</td>
              </tr>
              <tr>
                <th className="bg-blue-200">CAPOROSSI</th>
                <td className="bg-blue-200">x</td>
                <td className="bg-blue-200">x</td>
                <td className="bg-blue-200">x</td>
                <td className="bg-blue-200">x</td>
              </tr>
              <tr>
                <th className="bg-blue-200">GAMBRINUS</th>
                <td className="bg-blue-200">x</td>
                <td className="bg-blue-200">xx</td>
                <td className="bg-blue-200"></td>
                <td className="bg-blue-200">x</td>
              </tr>
              <tr>
                <th className="bg-blue-200">DIST. APILLI</th>
                <td className="bg-blue-200">x</td>
                <td className="bg-blue-200">xx</td>
                <td className="bg-blue-200">x</td>
                <td className="bg-blue-200">x</td>
              </tr>
              {/* Agrega el resto de las filas si es necesario */}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
