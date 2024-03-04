export default function Kuliner() {
  return (
    <div className="kuliner py-20 bg-slate-200" style={{ paddingInline: "calc((100% - 900px) / 2)" }}>
      <div className="mx-5 flex flex-col gap-10 ">
      <h2 className="text-3xl font-bold">Kuliner Terbaik Di Padang</h2>
      <div className="grid xs:grid-cols-2 sm:grid-cols-3 grid-cols-1 grid-rows-5 sm:grid-rows-3 md:gap-10 gap-5">
        <div className="text-center flex flex-col overflow-hidden">
          <img
            className="w-full min-h-[200px] rounded-xl duration-1000 xs:min-h-[150px] sm:min-h-[230px] h-full object-cover"
            src="https://cdn.goturkiye.com/goturkiye/bg-1.jpg"
            alt=""
          />
          <h3 className="text-sm md:text-base lg:text-lg font-semibold px-4 py-2" style={{ lineHeight: "1.1rem" }}>Culiner</h3>
        </div>
        <div className="text-center row-span-1 xs:row-span-2 flex flex-col overflow-hidden">
          <img
            className="w-full min-h-[200px] rounded-xl duration-1000 xs:min-h-[150px] sm:min-h-[230px] h-full object-cover"
            src="https://cdn.goturkiye.com/goturkiye/bg-1.jpg"
            alt=""
          />
          <h3 className="text-sm md:text-base lg:text-lg font-semibold px-4 py-2" style={{ lineHeight: "1.1rem" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, possimus.</h3>
        </div>
        <div className="text-center sm:row-span-1 row-span-1 xs:row-span-2 flex flex-col overflow-hidden">
          <img
            className="w-full min-h-[200px] rounded-xl duration-1000 xs:min-h-[150px] sm:min-h-[230px] h-full object-cover"
            src="https://cdn.goturkiye.com/goturkiye/bg-1.jpg"
            alt=""
          />
          <h3 className="text-sm md:text-base lg:text-lg font-semibold px-4 py-2" style={{ lineHeight: "1.1rem" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, possimus.</h3>
        </div>
        <div className="text-center row-span-1 xs:row-span-2 flex flex-col overflow-hidden">
          <img
            className="w-full min-h-[200px] rounded-xl duration-1000 xs:min-h-[150px] sm:min-h-[230px] h-full object-cover"
            src="https://cdn.goturkiye.com/goturkiye/bg-1.jpg"
            alt=""
          />
          <h3 className="text-sm md:text-base lg:text-lg font-semibold px-4 py-2" style={{ lineHeight: "1.1rem" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, possimus.</h3>
        </div>
        <div className="text-center row-span-1 xs:row-span-2 flex flex-col overflow-hidden">
          <img
            className="w-full min-h-[200px] rounded-xl duration-1000 xs:min-h-[150px] sm:min-h-[230px] h-full object-cover"
            src="https://cdn.goturkiye.com/goturkiye/bg-1.jpg"
            alt=""
          />
          <h3 className="text-sm md:text-base lg:text-lg font-semibold px-4 py-2" style={{ lineHeight: "1.1rem" }}>Lorem ipsum</h3>
        </div>
        <div className="text-center flex flex-col overflow-hidden">
          <img
            className="w-full min-h-[200px] rounded-xl duration-1000 xs:min-h-[150px] sm:min-h-[230px] h-full object-cover"
            src="https://cdn.goturkiye.com/goturkiye/bg-1.jpg"
            alt=""
          />
          <h3 className="text-sm md:text-base lg:text-lg font-semibold px-4 py-2" style={{ lineHeight: "1.1rem" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, possimus.</h3>
        </div>
        
      </div>
      </div>
    </div>
  );
}
