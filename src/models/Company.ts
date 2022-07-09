import {Address} from "./Address";

export interface Company {
    id: string;
    starred: boolean;
    name: string;
    description: string;
    address: Address;
    image?: string;
}