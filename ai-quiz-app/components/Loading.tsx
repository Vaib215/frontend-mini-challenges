export default function Loading() {
  return (
    <div className="flex-1 hero p-24 w-full flex flex-col z-40 gap-16 items-center justify-center">
      <h3 className="text-4xl">
        Your quiz is being generated. This may take a few seconds...
      </h3>
      <progress className="progress progress-primary w-full" />
    </div>
  );
}
