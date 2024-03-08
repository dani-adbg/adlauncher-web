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
      <div className="flex flex-col text-white">
        <span>ADLauncher</span>
        <span>Juega Minecraft Gratis Sin Virus</span>
        <a href="https://github.com/dani-adbg/adlauncher/releases/latest" target="_blank">Descarga para Windows</a>
      </div>
    </main>
  )
};