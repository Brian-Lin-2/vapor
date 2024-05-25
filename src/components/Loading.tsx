export default function Loading() {
  return (
    <div className="flex flex-grow items-center border justify-center">
      <img
        className="animate-spin w-16"
        src="/images/icons/loading.png"
        alt=""
      />
    </div>
  );
}
