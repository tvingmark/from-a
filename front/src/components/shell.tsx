
export default function Shell({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-full sm:h-screen  mx-auto text-base text-gray-900 bg-gray-200 py-4 px-4">
			{children}
    </div>
  )
}
