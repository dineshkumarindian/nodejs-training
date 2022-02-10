 export interface Product
 {
    id: number | undefined;
    productName:string;
    productCode:string;
    proddescription?:string;
    prodRating:number;
    employeeId:number | string | undefined;
}
