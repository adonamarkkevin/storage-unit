import { UserInfo } from "../../entity/user_info.entity";

export const getUser = async (email: string) => {
    const user_found = await UserInfo.findOne({
        where: {
            email: email,
        },
    });

    return user_found
};
