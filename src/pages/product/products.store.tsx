import { useState } from "react";
import { EachElement } from "../../components/EachElement";
import { ChevronLeft, ChevronRight, ListFilter, Search } from "lucide-react";
import ProductList from "../../components/product.list";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProducts } from "@/hooks/useProducts";
import ProductSkeleton from "@/components/ProductSkeleton";

const productTypes = ["Chair", "Sofa", "Sofa Bed", "Corner Sofa"];
export default function ProductStoreSection() {
  const [filterVisible, setFilterVisible] = useState<boolean>(false);
  const {
    products,
    isLoading,
    pagination,
    handleSearch,
    handlePageChange,
    handleNextPage,
    handlePrevPage,
    handleSizeChange,
    handleFilterChange,
    handleResetFilter,
    search,
  } = useProducts();
  const minNext = pagination?.page === 0;
  const maxNext = pagination?.page === (products?.totalPages || 1) - 1;

  const handleVisible = () => {
    setFilterVisible((prev) => !prev);
  };

  return (
    <section>
      <div className="h-16 bg-red-50 flex items-center justify-center">
        <div className="container flex justify-between items-center relative">
          <button
            onClick={handleVisible}
            className="h-fit bg-gray-100  rounded p-2 flex items-center gap-2"
          >
            <ListFilter className="size-5" />
            <span className="text-sm hidden md:block">Filter by Type</span>
          </button>
          <div
            className={`absolute top-10 bg-white p-3 rounded z-[999] space-y-2 ${
              filterVisible ? "" : "hidden"
            }`}
          >
            <div className=" space-y-2 pt-3">
              <label htmlFor="all" className="flex items-center gap-2">
                <input
                  id="all"
                  type="checkbox"
                  name="sort"
                  value="ALL"
                  checked={search.type.length === 0}
                  onChange={handleResetFilter}
                />
                <span className="text-xs">All</span>
              </label>
              <EachElement
                data={productTypes}
                render={(item, index) => (
                  <label
                    htmlFor={`filter-${index}`}
                    key={index}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      name="type"
                      id={`filter-${index}`}
                      className="w-fit"
                      value={item}
                      checked={search.type.includes(item as never)}
                      onChange={handleFilterChange}
                    />
                    <span className="text-xs">{item}</span>
                  </label>
                )}
              />
            </div>
          </div>
          <div className="border rounded bg-gray-100 flex items-center gap-2">
            <label htmlFor="search">
              <Search className="size-5 ml-2 text-gray-500" />
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search"
              onChange={handleSearch}
              name="search"
              className="bg-transparent outline-none text-xs h-full p-2"
            />
          </div>
        </div>
      </div>
      <div className="container">
        {isLoading ? (
          <ProductSkeleton limit={pagination?.size} />
        ) : (
          <ProductList products={products?.data} />
        )}
        <div className="flex gap-4 justify-end py-2">
          <div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <button
                    onClick={() => handlePrevPage()}
                    disabled={minNext}
                    className="mr-2 flex items-center gap-2"
                  >
                    <ChevronLeft className="size-4" />
                    <span
                      className={`text-sm ${minNext ? "" : "font-semibold"} `}
                    >
                      Previous
                    </span>
                  </button>
                </PaginationItem>
                {Array.from(
                  { length: products?.totalPages || 1 },
                  (_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        href="#"
                        onClick={() => handlePageChange(index + 1)}
                        isActive={pagination?.page === index}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}
                <PaginationItem>
                  <button
                    onClick={() => handleNextPage()}
                    disabled={maxNext}
                    className="ml-2 flex items-center gap-2"
                  >
                    <span
                      className={`text-sm ${maxNext ? "" : "font-semibold"} `}
                    >
                      Next
                    </span>
                    <ChevronRight className="size-4" />
                  </button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
          <div className="mr-2">
            <Select
              defaultValue={`${pagination?.size}`}
              onValueChange={handleSizeChange}
            >
              <SelectTrigger className="w-[60px]">
                <SelectValue placeholder="Select a Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Size</SelectLabel>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
}
