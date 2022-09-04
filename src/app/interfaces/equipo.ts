declare interface Team {
    team_id?: string;
    team_name?: string;
    team_contact?: string;
    team_email?: string;
    team_position?: string;
    imagen?: ImageTeam[];
}

declare interface ImageTeam{
    id?: string;
    url?: string;
}