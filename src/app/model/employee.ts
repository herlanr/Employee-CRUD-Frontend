import { Department } from "./department";
import { Position } from "./position";

export interface Employee {
    id: number,
    name: string,
    lastName: string,
    email: string,
    salary: number,
    department: Department,
    position: Position
}
