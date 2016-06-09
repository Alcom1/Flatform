//Game object literal
var game = game || {};

//Module that plays and manages sounds.
game.sound = (function()
{
	console.log("sound.js module loaded");
    var pauserSoft; //Soft pauser for repeating sounds.
	
	//Init
	function init(volume)
	{
        //Set global volume.
        var sounds = document.querySelector("#audio").children;
        for(var i = 0; i < sounds.length; i++)
        {
            sounds[i].volume = volume;
        }
	}
    
    //Update the sound module.
    function update()
    {
        //Soft pauser action
        if(pauserSoft != undefined)
        {
            var sound = document.querySelector("#" + pauserSoft[0]);
            if(Math.floor(sound.currentTime * 1000) % pauserSoft[1] > pauserSoft[1] * pauserSoft[2])
            {
                sound.pause();
                pauserSoft = undefined;
            }
        }
    }
    
    //Play sound by ID and disrupt option.
    function playSound(id, disrupt)
    {
        var sound = document.querySelector("#" + id);
        if(disrupt)
        {
            sound.pause();
            sound.currentTime = 0;
        }
        sound.play();
        pauserSoft = undefined;
    }
    
    //Set a sound to be paused by its id, the length of its steps, and the threshold magnitude.
    function pauseSoundSoft(id, step, mag)
    {
        pauserSoft = [id, step, mag];
    }
    
    //Pause a sound immediately.
    function pauseSoundHard(id)
    {
        document.querySelector("#" + id).pause();
        pauserSoft = undefined;
    }
	
	//Return
	return {
		init : init,
        update : update,
        playSound : playSound,
        pauseSoundSoft : pauseSoundSoft,
        pauseSoundHard : pauseSoundHard,
	}
}());