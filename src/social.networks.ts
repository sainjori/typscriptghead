/**
 * Created by barry2 on 12/19/2016.
 */
export interface Person{
    name:String;
}

export interface SocialNetwork{
    title:String;
    getUsers():Person[];
}
