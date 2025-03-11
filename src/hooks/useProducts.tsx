import { axiosInstance } from "@/lib/axios.instance";
import { ProductResponse } from "@/lib/interfaces";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useDebounce } from "use-debounce";

interface ProductContextProps {
  products: ProductResponse | undefined;
  isLoading: boolean;
  debouncedSearch: unknown;
  pagination:
    | {
        page: number;
        size: number;
      }
    | undefined;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePageChange: (page: number) => void;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  handleSizeChange: (value: string) => void;
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleResetFilter: () => void;
  setSearch: (value: { name: string; type: string[] }) => void;
  search: { name: string; type: string[] };
  error: string | null;
}

const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);

export const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<ProductResponse | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<{ name: string; type: string[] }>({
    name: "",
    type: [],
  });
  const [pagination, setPagination] = useState<{ page: number; size: number }>({
    page: 0,
    size: 10,
  });
  const [debouncedSearch] = useDebounce<{ name: string; type: string[] }>(
    search,
    800
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch((prev) => ({
      ...prev,
      name: value,
    }));
    setPagination((prev) => ({ ...prev, page: 0 }));
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const updatedFilterState = checked
      ? [...search.type, value]
      : search.type.filter((item) => item !== value);

    console.log(updatedFilterState);
    setSearch((prev) => ({
      ...prev,
      type: updatedFilterState,
    }));
  };

  const handleResetFilter = () => {
    setSearch((prev) => ({
      ...prev,
      type: [],
    }));
  };

  const handlePageChange = useCallback((newPage: number) => {
    setPagination((prev) => ({ ...prev, page: newPage }));
  }, []);

  const handleNextPage = useCallback(() => {
    setPagination((prev) => {
      if (prev.page >= (products?.totalElements || 1) - 1) return prev;
      return { ...prev, page: prev.page + 1 };
    });
  }, [products?.totalElements]);

  const handlePrevPage = useCallback(() => {
    setPagination((prev) => {
      if (prev.page == 0) return prev;
      return { ...prev, page: prev.page - 1 };
    });
  }, []);

  const handleSizeChange = async (size: string) => {
    setPagination((prev) => ({
      ...prev,
      size: parseInt(size),
      page: 0,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      if (isLoading) return;
      setIsLoading(true);
      setError(null);

      try {
        const response = await axiosInstance.get("/products", {
          params: {
            name: debouncedSearch.name,
            type: debouncedSearch.type,
            page: pagination.page,
            size: pagination.size,
          },
        });

        const data = response.data;
        setProducts(data);
        setPagination({
          page: data.page,
          size: data.size,
        });
      } catch (error) {
        console.error(error);
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [debouncedSearch, pagination.page, pagination.size]);

  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading,
        debouncedSearch,
        pagination,
        handleSearch,
        handlePageChange,
        handleNextPage,
        handlePrevPage,
        handleSizeChange,
        handleFilterChange,
        handleResetFilter,
        setSearch,
        search,
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};
