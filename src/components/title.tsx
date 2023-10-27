export default function Title ({ title }: { title: string }) {
  return (
    <div className="bg-bgMohana text-white w-full h-[70px] flex justify-center items-center">
        <h1 className="text-2xl font-bold">
            {title}
        </h1>
    </div>
  )
}
