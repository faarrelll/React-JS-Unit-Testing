import { Eye } from "lucide-react";
import { Product } from "../lib/interfaces";
import { EachElement } from "./EachElement";
import BlurFade from "./ui/blur-fade";
import { Link } from "react-router-dom";

export default function ProductList({
  products,
}: {
  products: Product[] | undefined;
}) {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-5 gap-4 mt-5">
        <EachElement
          data={products || []}
          render={(item: Product, index) => {
            return (
              <Link to={`/product/${item.id}`} key={index}>
                <BlurFade
                  delay={0.1 + index * 0.05}
                  inView
                  className="bg-gray-100 group cursor-pointer rounded-md relative overflow-hidden"
                >
                  {/* <div className="absolute top-2 right-2 p-2 text-[8px] bg-black/15 backdrop-blur-md rounded z-10 text-white">
                        {item.type}
                      </div> */}
                  <div className="h-[250px] w-full overflow-hidden rounded-t-md">
                    <img
                      src={item.images?.[0].imageUrl ?? ""}
                      alt={item.name}
                      className="h-full w-full object-cover group-hover:scale-110 transition-all duration-500"
                    />
                  </div>
                  <div className="flex flex-col text-left gap-2 mt-3 px-3 pb-3">
                    <h6 className="font-semibold">{item.name}</h6>
                    <p className="text-xs text-gray-500">{item.description}</p>
                    <div>
                      <span className="font-semibold text-sm">
                        Rp. {item.price}
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-3 right-2 translate-x-28 group-hover:-translate-x-0 flex flex-col items-center gap-2 transition-all duration-300 p-2 rounded-md bg-black/25 backdrop-blur-sm">
                    <span className="text-[8px] text-white">{item.type}</span>
                    <span>
                      <Eye className="size-4  text-white" />
                    </span>
                  </div>
                </BlurFade>
              </Link>
            );
          }}
        />
      </div>
    </>
  );
}
