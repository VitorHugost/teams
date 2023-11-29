import AsyncStorage from "@react-native-async-storage/async-storage";

import { groupsGetAll } from "./groupsGetAll";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";

export async function groupCreate(newGroup: string) {

    try {
        const storedGroup = await groupsGetAll();
        const groupAlreadyExist = storedGroup.includes(newGroup)

        if(groupAlreadyExist) throw new AppError('Já existe um grupo cadastrado com esse nome.');

        const storage = JSON.stringify([...storedGroup, newGroup])

        await AsyncStorage.setItem(GROUP_COLLECTION, storage)

    } catch (error) {
        throw error;
    };
}