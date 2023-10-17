import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10 px-20 uppercase">
      <div className="flex justify-between w-full font-semibold text-xs">
        <div>
          <p>Kouame N&apos;dri</p>
          <p>Chad Cuomo</p>
        </div>
        <div className="text-center">
          <p>Paradigm</p>
          <p>Labs</p>
        </div>
        <div className="text-right">
          <p>Iconic digital</p>
          <p>productrs (2023)</p>
        </div>
      </div>
      <div className="text-center">
        <h1 style={{marginBlock: 0, marginInline: 0}} className="font-black text-[195px]">Paradigm</h1>
        <p className="font-semibold mt-[-20px]">Your vision &#xB7; Our execution &#xB7; One paradigm</p>
      </div>
      <div className="w-full">
        <div className="w-[450px] flex flex-col gap-8">
        <h3 className="font-extrabold text-2xl border-b border-black">Work</h3>
        <p className="font-semibold border-b border-black">
          Sage.ai <span className="pl-3">&#183;</span> <span className="font-normal text-sm pl-3">(Upcoming) - Web application</span>
        </p>
        <p className="font-semibold border-b border-black">
          Mayson.ai <span className="pl-3">&#183;</span> <span className="font-normal text-sm pl-3">(Upcoming) - Web application</span>
        </p>
        <p className="font-semibold border-b border-black">
          Stealth Product <span className="pl-3">&#183;</span> <span className="font-normal text-sm pl-3">(Upcoming)</span>
        </p>
        </div>
      </div>
    </main>
  );
}
