import { EachElement } from "./EachElement";

export default function ProductSkeleton({
  limit = 10,
}: {
  limit: number | undefined;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-5">
      <EachElement
        data={new Array(limit).fill(0)}
        render={(_item, index) => {
          return (
            <div
              key={index}
              className="bg-gray-100 rounded-md relative overflow-hidden"
            >
              <div className="h-[250px] w-full bg-gray-300 animate-pulse rounded-t-md"></div>
              <div className="flex flex-col text-left gap-2 mt-3 px-3 pb-3">
                <div className="w-3/4 h-4 bg-gray-300 animate-pulse rounded"></div>
                <div className="w-2/3 h-3 bg-gray-300 animate-pulse rounded"></div>
                <div className="w-1/2 h-3 bg-gray-300 animate-pulse rounded"></div>
              </div>
              <div className="absolute top-3 right-2 translate-x-28 group-hover:-translate-x-0 flex flex-col items-center gap-2 transition-all duration-300 p-2 rounded-md bg-black/25 backdrop-blur-sm">
                <span className="w-12 h-3 bg-gray-300 animate-pulse rounded"></span>
                <span className="w-4 h-4 bg-gray-300 animate-pulse rounded"></span>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}
