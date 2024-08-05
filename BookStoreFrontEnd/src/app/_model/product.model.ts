import { FileHandle } from "./file-handle.model";

export interface Product
{
    productId: any,
    productName: string,
    Author: string,
    productDescription: string,
    productDiscountedPrice: number,
    productActualPrice: number,
    productImages: FileHandle[]
}