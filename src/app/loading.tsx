import Skeleton from '@/components/Skeleton';

export default function Loading() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col pt-24 pb-16 px-6 container-custom">
      {/* Hero Skeleton */}
      <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        <Skeleton variant="rectangular" className="w-56 h-8 rounded-full mb-8" />
        <Skeleton variant="text" className="w-3/4 max-w-xl h-14 mb-4" />
        <Skeleton variant="text" className="w-1/2 max-w-md h-12 mb-8" />
        <Skeleton variant="text" className="w-2/3 max-w-lg h-6 mb-10" />
        <div className="flex gap-4 mb-16">
          <Skeleton variant="rectangular" className="w-36 h-12 rounded-xl" />
          <Skeleton variant="rectangular" className="w-36 h-12 rounded-xl" />
        </div>
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <Skeleton variant="image" className="w-full aspect-[4/5]" />
        <Skeleton variant="image" className="w-full aspect-[4/5] hidden sm:block" />
        <Skeleton variant="image" className="w-full aspect-[4/5] hidden lg:block" />
      </div>
    </div>
  );
}
