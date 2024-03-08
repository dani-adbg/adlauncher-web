import Image from "next/image";

export default function Header() {
  return (
    <header id="header" className="flex justify-between h-[8vh] px-[5vh]">
      <div className="flex items-center h-full w-48 justify-around">
        <Image 
          src="/icon.png"
          alt="Logo Img"
          height={100}
          width={100}
          className="w-12"
        />
        <span>ADLauncher</span>
      </div>
      <div className="flex items-center h-full w-[50vh] justify-around">
        <a className="w-32 flex items-center justify-center hover:bg-slate-500 hover:cursor-pointer h-full" href="#downloads">Descargas</a>
        <a className="w-32 flex items-center justify-center hover:bg-slate-500 hover:cursor-pointer h-full" href="https://discord.gg/a93w5NpBR9">Discord</a>
        <a className="w-32 flex items-center justify-center hover:bg-slate-500 hover:cursor-pointer h-full" href="https://github.com/dani-adbg/adlauncher">Source</a>
      </div>
    </header>
  );
}
