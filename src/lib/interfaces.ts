export interface BaseInterface<T> {
  message: string;
  status: number;
  data?: T;
}

export interface ProductResponse {
  message: string;
  data: Product[];
  page: number;
  totalPages: number;
  totalElements: number;
  size: number;
}

export interface ProductImage {
  id: number;
  imageUrl: string;
}

export interface Product {
  id: number;
  name: string;
  type?: string;
  shortDesc: string;
  longDescription: string;
  stars: number;
  reviewers?: number;
  price: string;
  images?: ProductImage[];
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface Cart {
  id: number;
  name: string;
  type?: string;
  shortDesc: string;
  longDescription: string;
  stars: number;
  reviewers?: number;
  price: string;
  images?: ProductImage[];
  description: string;
  createdAt: string;
  updatedAt: string;
  quantity: number;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string | undefined;
  email: string;
  role: string;
  image: string;
  background: string | undefined;
}

export interface Translation {
  home: {
    hero: {
      title: string;
      subtitle: string;
      button: string;
    };
    category: {
      title: string;
      one: string;
      two: string;
      three: string;
    };
    product: {
      title: string;
    };
  };
  products: {
    hero: {
      title: string;
      subtitle: string;
    };
  };
  productDetail: {
    buy: string;
    addToCart: string;
    alreadyInTheCart: string;
  };
  contact: {
    hero: {
      title: string;
      subtitle: string;
    };
    contactInformation: {
      title: string;
      subtitle: string;
    };
    contactForm: {
      fistName: string;
      lastName: string;
      email: string;
      message: string;
      submit: string;
      process: string;
      success: string;
      description: string;
    };
  };
  profile: {
    updateProfile: string;
    orderHistory: string;
    order: string;
    wishlist: string;
    product: string;
    paymentMethod: string;
  };
  cart: {
    yourCart: string;
    empty: string;
    orderSummary: string;
    subtotal: string;
    shipping: string;
    total: string;
    alert: {
      title: string;
      description: string;
      yes: string;
      no: string;
    };
    toast: {
      success: string;
      SuccessDescription: string;
      error: string;
      ErrorDescription: string;
    };
  };
}
