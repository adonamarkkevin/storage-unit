import { UserInfo } from "../../entity/user_info.entity";

type UserForm = {
    user_name: string;
    password: string;
    name: string;
    email: string;
    phone: string;
    address: string;
};

export const createUser = async (form: UserForm): Promise<boolean> => {
    try {
        const user = UserInfo.create({
            user_name: form.user_name,
            password: form.password,
            name: form.name,
            email: form.email,
            phone: form.phone,
            address: form.address,
        });
        await UserInfo.save(user);

        return true;
    } catch (error) {
        return false;
    }
};
