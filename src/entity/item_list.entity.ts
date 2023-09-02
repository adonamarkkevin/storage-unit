import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { StorageUnit } from "./storage_unit.entity";

@Entity({ name: "item_list" })
export class ItemList extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    item_name: string;

    @Column()
    item_count: number;

    @Column()
    item_description: string;

    @ManyToOne(() => StorageUnit, (unit) => unit.item_list)
    @JoinColumn({ name: "unit_id" })
    storage_unit: StorageUnit;
}
