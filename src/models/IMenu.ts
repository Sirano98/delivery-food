export interface IMenu {
    id: string,
    name: string,
    description: string,
    price: number,
    image: string,
}

export interface IMenuInCart extends IMenu {
    quantity: number,
    totalPrice: number
}