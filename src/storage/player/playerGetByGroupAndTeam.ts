import AsyncStorage from "@react-native-async-storage/async-storage";

import { playerGetByGroup} from '@storage/player/playersGetByGroups'

export async function playersGetByGroupsAndTeam( group:string, team:string){

    try{
        const storage = await playerGetByGroup(group)

        const player = storage.filter(player => player.team == team)
        return player
    } catch (error){
        throw error;
        
    }
} 