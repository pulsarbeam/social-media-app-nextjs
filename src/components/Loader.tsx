interface Loader {
  show: boolean
}

export default function Loader({ show }: Loader) {
  return show ? (
    <div className="flex justify-center items-center h-screen">
      <div className="border-4 border-purple-600 border-t-4 border-r-2 border-l-2 rounded-full w-12 h-12 animate-spin"></div>
    </div>
  ) : null
}
