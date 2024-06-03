import Link from "next/link";

function SucessPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl">Formulario enviado com exito! 🎉</h1>

      <Link href={"/"}>volver a la pagina principal</Link>
    </div>
  );
}

export default SucessPage;
