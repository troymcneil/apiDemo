import axios from "axios";
import {Company} from "../models/Company";

export default class SearchService {
    public static async search(searchQuery: string) : Promise<Company[]> {
        const results = await axios.get(`http://localhost:3001/search?q=${searchQuery}&_limit=10`);
        return results.data;
    }

    // public static async saveExisting(id: string, run: PortfolioRequest, result: PortfolioResult) {
    //     const portfolios = this.getPortfolios();
    //     const docRef = doc(portfolios, id);
    //     const savedResult = this.getSavedResult(result);
    //     await updateDoc(docRef, ({'run': run, 'result': savedResult}));
    // }
    //
    // public static async update(id: string, name: string, description: string, tags: string[]) {
    //     const portfolios = this.getPortfolios();
    //     const docRef = doc(portfolios, id);
    //     await updateDoc(docRef, ({'name': name, 'description': description, 'tags': tags}));
    // }
    //
    // public static async get(id: string) {
    //     const portfolios = this.getPortfolios();
    //     const snapshot = await getDoc(doc(portfolios, id));
    //     const data = snapshot.data();
    //
    //     const profits = data.result.dailyProfits || [];
    //     if(!Array.isArray(profits)){
    //         data.result.dailyProfits = JSON.parse(pako.inflate(profits.toUint8Array(), {to: 'string'}));
    //     }
    //
    //     const tradeLog = data.result.result.tradeLog || [];
    //     if(!Array.isArray(tradeLog)){
    //         data.result.result.tradeLog = JSON.parse(pako.inflate(tradeLog.toUint8Array(), {to: 'string'}));
    //     }
    //
    //     return <SavedPortfolio>{
    //         id: id,
    //         ...data
    //     };
    // }
    //
    // public static async remove(id: string) {
    //     const portfolios = this.getPortfolios();
    //     const docRef = doc(portfolios, id);
    //     await deleteDoc(docRef);
    // }
    //
    // public static async getAll() {
    //     const portfolios = this.getPortfolios();
    //     const userId = this.getUserId();
    //     const snapshot = await getDocs(query(portfolios, where("userId", "==", userId)));
    //     return snapshot.docs.map(doc => {
    //         const data = doc.data();
    //         return <SavedPortfolio>{
    //             id: doc.id,
    //             ...data
    //         }
    //     });
    // }
    //
    // private static getUserId() {
    //     return getAuth().currentUser.uid;
    // }
    //
    // private static getPortfolios() {
    //     return collection(getFirestore(), "portfolios");
    // }
    //
    // private static getSavedResult(result: PortfolioResult) {
    //     const compressedProfits = Bytes.fromUint8Array(pako.deflate(JSON.stringify(result.dailyProfits)));
    //     const compressedLog = Bytes.fromUint8Array(pako.deflate(JSON.stringify(result.result.tradeLog)));
    //
    //     return {
    //         ...result,
    //         result: {
    //             ...result.result,
    //             tradeLog: compressedLog,
    //             dailyProfits: compressedProfits
    //         }
    //     };
    // }
}