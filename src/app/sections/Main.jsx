import Image from "next/image";

export default function Main() {
  return (
    <main className="flex items-center justify-center h-[80vh]">
      <Image 
        src="/minecraft-background.jpg"
        alt="Minecraft Img"
        width={1536}
        height={864}
        className="w-full h-[80vh] absolute top-[8vh] -z-50"
      />
      <div className="flex w-full h-[30vh] justify-around text-center items-center">
        <div className="h-full flex justify-center items-center flex-col">
          <p className="my-[2vh] text-black font-extrabold text-2xl">ADLauncher</p>
          <p className="my-[2vh] text-black font-extrabold text-2xl">Juega Minecraft Gratis Sin Virus</p>
        </div>
        <a href="https://github.com/dani-adbg/adlauncher/releases/latest" target="_blank" className="bg-gray h-[10vh] w-[40vh] rounded-full flex justify-center items-center hover:bg-black hover:cursor-pointer transition ease-linear delay-200">Descarga para Windows</a>
      </div>
    </main>
  )
};