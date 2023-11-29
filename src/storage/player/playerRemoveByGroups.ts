import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { playerGetByGroup } from "./playersGetByGroups";

export async function playerRemoveByGroup(playerName: string, group: string) {
    try {
        const storage = await playerGetByGroup(group);
        const filtered = storage.filter(player => player.name != playerName)

        const players = JSON.stringify(filtered)
        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players)

        return filtered
    } catch (error) {
        throw error
    }
}