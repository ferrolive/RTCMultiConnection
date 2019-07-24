// IceServersHandler.js

var IceServersHandler = (function() {
    function getIceServers(connection) {
        
        //xirsys
        var iceServers: [{
           urls: [ "stun:tk-turn2.xirsys.com" ]
        }, {
           username: "c9b737fe-eb95-11e8-b776-324f0cea1457",
           credential: "c9b73894-eb95-11e8-8c5d-30a5262d593a",
           urls: [
               "turn:tk-turn2.xirsys.com:80?transport=udp",
               "turn:tk-turn2.xirsys.com:3478?transport=udp",
               "turn:tk-turn2.xirsys.com:80?transport=tcp",
               "turn:tk-turn2.xirsys.com:3478?transport=tcp",
               "turns:tk-turn2.xirsys.com:443?transport=tcp",
               "turns:tk-turn2.xirsys.com:5349?transport=tcp"
           ]
        }];

        return iceServers;
    }

    return {
        getIceServers: getIceServers
    };
})();



