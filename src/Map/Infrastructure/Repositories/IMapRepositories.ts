import { Path } from "../../Domain/Path";

export interface IMapRepositories {
    
    getPeoplesPaths: () => Promise<Path[]>

}