/*
VUEX Player Data Store.
Copyright (c) 2019. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
import axios from 'axios';

//const baseURL = `${LOCATION.PROTOCOL}//${LOCATION.HOSTNAME}:${LOCATION.PORT}`;
//const Remote = Axios.create( { baseURL: baseURL });

// import User from '@/model/user' // import POJS model objects
import Player, { ROLES, TEAMS } from '@/model/Player';

export default {
    // PRIVATE: model state of the application, a bunch of POJS objects
    state: {
        players: new Player()
    },

    // PUBLIC: injected into components
    // called to do things to the state via ajax and mutations
    actions: {
        registerNewPlayer({ commit }, params) {
            commit('REGISTER_PLAYER', params);
        }
    },

    // PRIVATE: caled by actions to modify the state to prevent deadlock
    mutations: {
        REGISTER_PLAYER: (state, params) => {
            axios.post('http://localhost:3000/api/session/subscribe/1234', new Player(params));
        }
    },

    // PUBLIC: injected into components
    // called to retrieve state data from the store
    getters: {
        playerId: state => state.player,
        getRoles: state => ROLES,
        getTeams: state => TEAMS
    },
}
