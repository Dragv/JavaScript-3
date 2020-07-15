// Copyright (C) 2020 Alejandro Güereca, All Rights Reserved

'use strict'

export const ROLES = {
    ENGINEER: 'ENGINEER',
    CAPTAIN: 'CAPTAIN',
    FIRST_OFFICER: 'FIRST_OFFICER',
    NAVIGATOR: 'NAVIGATOR',
};

export const TEAMS = {
    RED: 'RED',
    BLUE: 'BLUE'
};

export default class Player {
    constructor(params = {}) {
        const { name, role, team } = params;        
        
        this.name = name;
        this.role = role;
        this.team = team;
    }
}
