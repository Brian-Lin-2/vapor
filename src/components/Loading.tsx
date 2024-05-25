export default function Loading() {
  return (
    <div className="h-[70vh] flex flex-grow items-center justify-center">
      <img
        className="animate-spin w-16"
        src="/images/icons/loading.png"
        alt=""
      />
    </div>
  );
}
