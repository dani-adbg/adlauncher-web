import Image from "next/image";

export default function Header() {
  return (
    <header id="header" className="flex justify-between h-[8vh] px-[5vh] bg-gray text-white">
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
        <a className="header-list" href="#downloads">Descargas</a>
        <a className="header-list" target="_blank" href="https://discord.gg/a93w5NpBR9">Discord</a>
        <a className="header-list" target="_blank" href="https://github.com/dani-adbg/adlauncher">Source</a>
      </div>
    </header>
  );
}
