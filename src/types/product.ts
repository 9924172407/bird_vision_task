export interface productList {
    image: string,
    title: string,
    price: number
}

export interface productDetails {
    id: number,
    thumbnail: string,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    brand: string,
    category: string,
    images: string[]
}

export interface productCard {
    title: string,
    thumbnail: string,
    price: number,
}

export interface ProductImageSliderProps {
    images: string[];
}