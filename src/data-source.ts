import "reflect-metadata";
import { DataSource } from "typeorm";
import { ItemList } from "./entity/item_list.entity";
import { StorageUnit } from "./entity/storage_unit.entity";
import { UserInfo } from "./entity/user_info.entity";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "localdb_user",
    password: "$n!W8cfSA7$fJ#74B2",
    database: "storage_unit",
    synchronize: true,
    logging: true,
    entities: [UserInfo, StorageUnit, ItemList],
    migrations: [],
    subscribers: [],
});
