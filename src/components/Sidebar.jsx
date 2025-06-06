export default function Sidebar() {
  return (
    <div className="hidden xl:flex xl:w-[35%] h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: "linear-gradient(135deg, #01042D 0%, #A31EFF 100%)",
        }}
      />

      <div className="relative z-10 w-full h-full flex items-center justify-center py-12">
        <img
          src="/sidebar1.png"
          alt="SideBar"
          className="w-full h-full object-contain mix-blend-screen"
          style={{
            filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))",
          }}
        />
      </div>
    </div>
  );
}
