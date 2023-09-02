import {
    PrimaryGeneratedColumn,
    Entity,
    BaseEntity,
    Column,
    OneToMany,
} from "typeorm";
import { StorageUnit } from "./storage_unit.entity";

@Entity({ name: "user_info" })
export class UserInfo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_name: string;

    @Column({ select: false })
    password: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @OneToMany(() => StorageUnit, (unit) => unit.user_info)
    storage_unit: StorageUnit[];
}
