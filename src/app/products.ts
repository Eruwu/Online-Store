
export interface Product {
    id: number;
    name: string;
    price: number;
    image: any;
    description: string;
}

export const products = [
    {
        id: 1,
        name: 'Phone XL',
        price: 799,
        image: '../assets/image/ROG-Phone.jpg',
        description: 'A large phone with one of the best screens'
    },
    {
        id: 2,
        name: 'Phone Mini',
        price: 699,
        image: '../assets/image/iphone12mini.jpg',
        description: 'A great phone with one of the best cameras'
    },
    {
        id: 3,
        name: 'Phone Standard',
        price: 299,
        image: '../assets/image/phone-standard.jpg',
        description: 'Standar phone, standar performance and standar camera quality'
    }
];