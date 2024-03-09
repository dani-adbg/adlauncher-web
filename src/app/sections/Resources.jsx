export default function Resources() {
  return (
    <div id="downloads" className="bg-gray flex flex-col items-center pb-[6vh]">
      <span className="text-xl font-bold mb-[2vh]">DESCARGAS</span>
      <div className="flex flex-col justify-center my-[2vh] bg-black w-[70vh] h-[30vh] px-[10vh] rounded-xl">
        <a href="https://github.com/dani-adbg/adlauncher/releases/download/1.0.0/adlauncher-1.0.0.Setup.exe" className="my-2 bg-gray rounded-lg h-[5vh] flex items-center px-[2vh] hover:bg-black cursor-pointer transition ease-linear delay-200">Descarga el Instalador</a>
        <a href="https://github.com/dani-adbg/adlauncher/releases/download/1.0.0/adlauncher-1.0.0.zip" className="my-2 bg-gray rounded-lg h-[5vh] flex items-center px-[2vh] hover:bg-black cursor-pointer transition ease-linear delay-200">Descarga el .zip (Recomendado)</a>
        <a href="https://github.com/dani-adbg/adlauncher/releases/download/1.0.0/adlauncher-1.0.0-terminal.exe" className="my-2 bg-gray rounded-lg h-[5vh] flex items-center px-[2vh] hover:bg-black cursor-pointer transition ease-linear delay-200">Descarga la version sin interfaz</a>
      </div>
    </div>
  )
}