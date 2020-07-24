<!--
VFS VUE Single File Component

<pg-home user="User"></pg-home>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="home-container">
        <div class="home">
            <div>Welcome to your {{ name }}</div>
            <div class="dialog">

                <form class="sample-form" @submit.prevent="registerUser(nickname, role, team)">
                    <label>Nickname:
                        <input name="nick" v-model="nickname" placeholder="playerName">
                    </label><br/>
                    <label>Role:
                        <select id="roles" name="roles" v-model="role">
                            <option
                                v-for="(data, index) in Object.values(getRoles)"
                                :key="index"
                            >{{ data }}</option>
                        </select>
                    </label><br/>
                    <label>Team:
                        <select id="teams" name="teams" v-model="team">
                            <option
                                v-for="(data, index) in Object.values(getTeams)"
                                :key="index"
                            >{{ data }}</option>
                        </select>
                    </label><br/>
                    <input type="submit">
                </form>
            </div>

            {{ getAllPlayers() }}
            <h2>Players</h2>
            <div
                v-for="(data, index) in players"
                :key="index"
            >
                {{ data.name }} {{ data.role }} {{ data.team }}
            </div>
        </div>
    </section>

</template>
<script>

    import Controller from '@/../lib/controller'

    class HomeController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                players : [],
                getAllPlayers: this.getAllPlayers
            };

            this.props = {
                name: String,
            };

            this.injectActions([ 'registerNewPlayer' ]);
            this.injectGetters([ 'getRoles', 'getTeams', 'getPlayers' ]);

        }

        getAllPlayers() {
            this.getPlayers.then(value => this.players = value);
        }

        registerUser(nickname, role, team) {
            const playerData = { name: nickname, role, team };
            this.registerNewPlayer(playerData).then(() => this.players.push(playerData));
        }
    }

    export default new HomeController('pgHome');

</script>
<style scoped>
    /* Local styles for this template */
    .home-container {
        display: inline-block;
        width: 100%;
    }

    .home {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .sample-form {
        border: 2px solid #333;
        margin: 1em;
        padding: 2em;
    }
</style>
