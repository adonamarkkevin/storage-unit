import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { ItemList } from "./item_list.entity";
import { UserInfo } from "./user_info.entity";

@Entity({ name: "storage_unit" })
export class StorageUnit extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    unit_no: string;

    @ManyToOne(() => UserInfo, (user) => user.storage_unit)
    @JoinColumn({ name: "user_id" })
    user_info: UserInfo;

    @OneToMany(() => ItemList, (item) => item.storage_unit)
    item_list: ItemList[];
}
