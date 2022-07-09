import axios from "axios";
import {Company} from "../models/Company";

export default class CompanyService {
    public static async search(searchQuery: string): Promise<Company[] | string> {
        try {
            const {data} = await axios.get<Company[]>(
                `http://localhost:3001/search?q=${searchQuery}&_limit=10`,
            );
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }

    public static async update(id: string, starred: boolean): Promise<Company | string> {
        try {
            const {data} = await axios.patch<Company>(
                `http://localhost:3001/search/${id}`,
                {starred: starred},
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                },
            );
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }

    public static async getStarredCompanies(): Promise<Company[] | string> {
        try {
            const {data} = await axios.get<Company[]>(
                `http://localhost:3001/search?starred=true`
            );
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }

}