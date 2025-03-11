import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { ProductContextProvider, useProducts } from "../useProducts";
import { axiosInstance } from "@/lib/axios.instance";

vi.mock("@/lib/axios.instance", () => ({
  axiosInstance: {
    get: vi.fn(),
  },
}));

describe("Testing useProducts hook", () => {
  test("should fetch all products data", async () => {
    (axiosInstance.get as jest.Mock).mockResolvedValueOnce({
      data: {
        content: [
          {
            id: "3518d7ff-906b-4c62-bf4f-56085fde0f3d",
            name: "Galaxy Sofa",
            type: "Sofa",
            shortDesc: "A modern velvet sofa for chic interiors.",
            price: "7.500.000",
            images: [
              {
                imageUrl:
                  "https://res.cloudinary.com/dixdqxpza/image/upload/v1735627481/sofa8_qnk66w.jpg",
              },
              {
                imageUrl:
                  "https://res.cloudinary.com/dixdqxpza/image/upload/v1735627478/sofa6_ik38el.jpg",
              },
            ],
          },
        ],
        page: 0,
        size: 10,
        totalElements: 1,
        totalPages: 1,
      },
    });

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ProductContextProvider>{children}</ProductContextProvider>
    );

    const { result } = renderHook(() => useProducts(), {
      wrapper,
    });

    await vi.waitFor(() => {
      expect(result.current.products).toBeDefined();
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.error).toBeNull();
    expect(result.current.debouncedSearch).toEqual({
      name: "",
      type: [],
    });

    expect(result.current.pagination).toEqual({ page: 0, size: 10 });
    expect(result.current.search).toEqual({ name: "", type: [] });
    expect(result.current.handleSearch).toBeDefined();
    expect(result.current.handlePageChange).toBeDefined();
    expect(result.current.handleNextPage).toBeDefined();
    expect(result.current.handlePrevPage).toBeDefined();
    expect(result.current.handleSizeChange).toBeDefined();
    expect(result.current.handleFilterChange).toBeDefined();
    expect(result.current.handleResetFilter).toBeDefined();
    expect(result.current.setSearch).toBeDefined();
    expect(result.current.handleFilterChange).toBeDefined();
  });
});
