// Table data
export interface Order {
    SNo: string;
    createdDate: string;
    lastExecutedDate: string;
    modelName: string;
    healthstatus: string;
}



// Search Data
export interface SearchResult {
    orders: Order[];
    total: number;
}
