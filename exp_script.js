var task_name = "gem_learning";
var sbj_id = "test01";

//you must put your save_data php url here.
var save_url = "https://users.rcc.uchicago.edu/~zz112/exp_data/save_data.php";
var data_dir = task_name;

//my preference is to include the task and sbj_id in the file name
var file_name = task_name + '_' + sbj_id; 

var repo_site = "https://zz112duke.github.io/Gem_learning/";

var timeline = [];


var enter_full = {
  type: 'fullscreen',
  fullscreen_mode: true
};
timeline.push(enter_full);


/* -----Give consent-----*/
var check_consent = function(elem) {
  if (document.getElementById('consent_checkbox').checked) {
    return true;
  }
  else {
    alert("If you wish to participate, you must check the box next to the statement 'I agree to participate in this study.'");
    return false;
  }
  return false;
};

var consent = {
  type: 'external-html',
  url: repo_site + "content/consent.html",
  cont_fn: check_consent,
  cont_btn: 'start',
};
timeline.push(consent);

/* -----ITI----- */
var iti_1000 = {
  type: "image-keyboard-response",
  stimulus: repo_site + "img/Stim/fixation.png",
  choices: jsPsych.NO_KEYS,
  response_ends_trial: false,
  trial_duration: Math.random() * (1500 - 1000) + 1000  //jittered from 1000-1500ms
}

/* -----Preload Images----- */
preload_list = [repo_site + 'img/Stim/TS100.png', repo_site + 'img/Stim/TS101.png', repo_site + 'img/Stim/TS102.png',
repo_site +'img/Stim/TS103.png', repo_site + 'img/Stim/TS110.png', repo_site + 'img/Stim/TS111.png',
repo_site + 'img/Stim/TS112.png', repo_site + 'img/Stim/TS113.png', repo_site + 'img/Stim/TS120.png',
repo_site + 'img/Stim/TS121.png', repo_site + 'img/Stim/TS122.png', repo_site + 'img/Stim/TS123.png',
repo_site + 'img/Stim/TS130.png', repo_site + 'img/Stim/TS131.png', repo_site + 'img/Stim/TS132.png',
repo_site + 'img/Stim/TS133.png', repo_site + 'img/Stim/TS200.png', repo_site + 'img/Stim/TS201.png',
repo_site +'img/Stim/TS202.png', repo_site + 'img/Stim/TS202.png', repo_site + 'img/Stim/TS203.png',
repo_site + 'img/Stim/TS210.png', repo_site + 'img/Stim/TS211.png', repo_site + 'img/Stim/TS212.png',
repo_site + 'img/Stim/TS213.png', repo_site + 'img/Stim/TS220.png', repo_site + 'img/Stim/TS221.png',
repo_site + 'img/Stim/TS222.png', repo_site + 'img/Stim/TS223.png', repo_site + 'img/Stim/TS230.png',
repo_site +'img/Stim/TS231.png', repo_site + 'img/Stim/TS232.png', repo_site + 'img/Stim/TS233.png',
repo_site +'img/Stim/fixation.png', repo_site + 'img/Stim/correct.png', repo_site + 'img/Stim/incorrect.png',
repo_site + 'img/Stim/correct_ex.png', repo_site + 'img/Stim/incorrect_ex.png', repo_site + 'img/Stim/TS232_ex.png',
repo_site + 'img/Stim/TS110_ex.png']

/* -----Instructions----- */
var instruction = {
    type: 'instructions',
    pages: [
        /* -----instr_1----- */
        '<p style="color:black;font-size:26px">\n' +
        '        Welcome to the Gemstone Expedition! <br>\n' +
        '        <br>\n' +
        '        In this game, you are training to become a gemologist—an expert in gemstones. <br>\n' +
        '        <br>\n' +
        '        During the game, you will discover beautiful gemstones, like these: <br>\n' +
        '    </p>\n' +
        '        <br>\n' +
        '    <p>\n' +
        '       <img src="https://zz112duke.github.io/Gem_learning/img/Stim/gem01.png" /> <img src="https://zz112duke.github.io/Gem_learning/img/Stim/gem02.png" />\n' +
        '       <img src="https://zz112duke.github.io/Gem_learning/img/Stim/gem03.png" /> <img src="https://zz112duke.github.io/Gem_learning/img/Stim/gem04.png" />\n' +
        '\n' +
        '    </p>\n' +
        '        <br>\n' +
        '    <p style="color:black;font-size:26px">\n' +
        '        When you find a gem, your job is to identify where the gem came from <br>\n' +
        '        by pressing a button on your keyboard. <br>\n' +
        '        <br>\n' +
        '        If you correctly identify where the gem came from, you earn a gold star! <br>\n' +
        '        You do not earn a gold star for incorrectly identified gems. <br>\n' +
        '\n' +
        '    </p>',

        /* -----instr_2----- */
        '<p style="color:black;font-size:26px">\n' +
        '    Your gemology training will take place in two different locations: <br>\n' +
        '    a faraway mountain and a deserted road, like this:\n' +
        '</p>\n' +
        '<br>\n' +
        '     <img src="https://zz112duke.github.io/Gem_learning/img/Stim/TS232_ex.png" /> <img src="https://zz112duke.github.io/Gem_learning/img/Stim/TS110_ex.png" />\n' +
        '<br>\n' +
        '\n' +
        '<p style="color:black;font-size:26px">\n' +
        '\n' +
        '        When you are on the mountain, indicate whether the gem came from <br>\n' +
        '        the top of the mountain by pressing the <span style="font-size: 26px"><b><kbd>Up</kbd></b></span> arrow key <br>\n' +
        '        or the bottom of the mountain by pressing the <span style="font-size: 26px"><b><kbd>Down</kbd></b></span> arrow key on the keyboard. <br>\n' +
        '        <br>\n' +
        '        When you are on the road, indicate whether the gem originated from <br>\n' +
        '        the left side of the road by pressing the <span style="font-size: 26px"><b><kbd>Left</kbd></b></span> arrow key <br>\n' +
        '        or the right side of the road by pressing the <span style="font-size: 26px"><b><kbd>Right</kbd></b></span> arrow key on the keyboard. <br>\n' +
        '</p>',

        /* -----instr_3----- */
        '<p style="color:black;font-size: 26px">\n' +
        '    Notice that the gemstones come in different cuts: <br>\n' +
        '    straight-edged (square and rounded square) and round (circle and oval). <br>\n' +
        '    <br>\n' +
        '    They also come in different colors: <br>\n' +
        '    warm-toned colors (yellow and orange) and cool-toned colors (light blue and dark blue). <br>\n' +
        '    Like this: <br>\n' +
        '</p>\n' +
        '\n' +
        '    <br>\n' +
        '<p>\n' +
        '\n' +
        '    <img src="https://zz112duke.github.io/Gem_learning/img/Stim/gem01.png" /> <img src="https://zz112duke.github.io/Gem_learning/img/Stim/gem03.png" />\n' +
        '    <img src="https://zz112duke.github.io/Gem_learning/img/Stim/gem02.png" /> <img src="https://zz112duke.github.io/Gem_learning/img/Stim/gem04.png" /><br>\n' +
        '</p>\n' +
        '<br>\n' +
        '<p style="color:black;font-size: 26px">\n' +
        '    This information may be helpful for figuring out where the gems came from.<br>\n' +
        '</p>',

        /* -----instr_4----- */
        '<p style="color:black;font-size: 26px">\n' +
        '    Because you are still a gemologist-in-training,  <br>\n' +
        '    you will have to learn where the gems came from. <br>\n' +
        '    <br>\n' +
        '    There are only two possible responses in each location: <br>\n' +
        '\n' +
        '    <span style="font-size: 26px"><b><kbd>Up</kbd></b></span> or <span style="font-size: 26px"><b><kbd>Down</kbd></b></span> on the mountain, <br>\n' +
        '    and <span style="font-size: 26px"><b><kbd>Left</kbd></b></span> or <span style="font-size: 26px"><b><kbd>Right</kbd></b></span> on the road.<br>\n' +
        '    <br>\n' +
        '    You will learn where different types of gems come from <br>\n' +
        '    based on the feedback you receive after each response. <br>\n' +
        '    <br>\n' +
        '    A gold star indicates a correct response, and a red X indicates an incorrect response, like this:\n' +
        '    </p>\n' +
        '    <br>\n' +
        '    <img src="https://zz112duke.github.io/Gem_learning/img/Stim/correct_ex.png" /> <img src="https://zz112duke.github.io/Gem_learning/img/Stim/incorrect_ex.png" />',

        /* -----instr_5----- */
        '<p style="color:black;font-size:26px">\n' +
        '\n' +
        '    Every time you see a gem, please respond as quickly and accurately as you can. <br>\n' +
        '<br>\n' +
        '    It is very important that you do your best. <br>\n' +
        '<br>\n' +
        '    Although the expedition may seem difficult at first, it should be do-able, especially if you are focused. <br>\n' +
        '</p>\n' +
        '<br>\n' +
        '<p style="color:black;font-size: 26px">\n' +
        '        Please DO NOT quit or refresh the webpage. <br>\n' +
        '        Unfortunately, we are unable to accept your HIT if you exit out of the page or refresh it.<br>\n' +
        '        Now, click on "Next" to start the main experiment. <br> \n' +
        '        <br> Happy exploring!\n' +
        '</p> <br>'
    ],
    show_clickable_nav: true,
}
//timeline.push(instruction);


/* -----define learning stimuli----- */
var lr_stimuli_TS1 = [//if based on color; warm left cold right; if based on shape; round up square down
    { lr_stimulus: repo_site + "img/Stim/TS100.png", data: {TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road'}},
    { lr_stimulus: repo_site + "img/Stim/TS101.png", data: {TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road'}},
    { lr_stimulus: repo_site + "img/Stim/TS102.png", data: {TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road'}},
    { lr_stimulus: repo_site + "img/Stim/TS103.png", data: {TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road'}},
    { lr_stimulus: repo_site + "img/Stim/TS110.png", data: {TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road'}},
    { lr_stimulus: repo_site + "img/Stim/TS111.png", data: {TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road'}},
    { lr_stimulus: repo_site + "img/Stim/TS112.png", data: {TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road'}},
    { lr_stimulus: repo_site + "img/Stim/TS113.png", data: {TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road'}},
    { lr_stimulus: repo_site + "img/Stim/TS120.png", data: {TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road'}},
    { lr_stimulus: repo_site + "img/Stim/TS121.png", data: {TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road'}},
    { lr_stimulus: repo_site + "img/Stim/TS122.png", data: {TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road'}},
    { lr_stimulus: repo_site + "img/Stim/TS123.png", data: {TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road'}},
    { lr_stimulus: repo_site + "img/Stim/TS130.png", data: {TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road'}},
    { lr_stimulus: repo_site + "img/Stim/TS131.png", data: {TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road'}},
    { lr_stimulus: repo_site + "img/Stim/TS132.png", data: {TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road'}},
    { lr_stimulus: repo_site + "img/Stim/TS133.png", data: {TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road'}},
];
var lr_stimuli_TS2 = [//if based on color; warm left cold right; if based on shape; round up square down
    { lr_stimulus: repo_site + "img/Stim/TS200.png", data: {TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain'}},
    { lr_stimulus: repo_site + "img/Stim/TS201.png", data: {TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain'}},
    { lr_stimulus: repo_site + "img/Stim/TS202.png", data: {TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain'}},
    { lr_stimulus: repo_site + "img/Stim/TS203.png", data: {TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain'}},
    { lr_stimulus: repo_site + "img/Stim/TS210.png", data: {TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain'}},
    { lr_stimulus: repo_site + "img/Stim/TS211.png", data: {TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain'}},
    { lr_stimulus: repo_site + "img/Stim/TS212.png", data: {TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain'}},
    { lr_stimulus: repo_site + "img/Stim/TS213.png", data: {TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain'}},
    { lr_stimulus: repo_site + "img/Stim/TS220.png", data: {TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain'}},
    { lr_stimulus: repo_site + "img/Stim/TS221.png", data: {TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain'}},
    { lr_stimulus: repo_site + "img/Stim/TS222.png", data: {TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain'}},
    { lr_stimulus: repo_site + "img/Stim/TS223.png", data: {TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain'}},
    { lr_stimulus: repo_site + "img/Stim/TS230.png", data: {TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain'}},
    { lr_stimulus: repo_site + "img/Stim/TS231.png", data: {TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain'}},
    { lr_stimulus: repo_site + "img/Stim/TS232.png", data: {TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain'}},
    { lr_stimulus: repo_site + "img/Stim/TS233.png", data: {TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain'}},
];


/* -----randomize scene-feature pair----- */
var lr_feature_list = ['color', 'shape'];
var allowed_keys_road = ['leftarrow','rightarrow'];
var allowed_keys_mountain = ['uparrow','downarrow'];
var feature_index = Math.floor((Math.random()) * lr_feature_list.length);
var road_key_index = Math.floor((Math.random()) * allowed_keys_road.length);
var mountain_key_index = Math.floor((Math.random()) * allowed_keys_mountain.length);

for (i = 0; i < lr_stimuli_TS1.length; i++) {
    var ob = lr_stimuli_TS1[i];
    ob.data.feature = lr_feature_list[feature_index];
    ob.allowed_keys = allowed_keys_road;

    if (ob.data.feature == 'color') //If current feature is color
    {

    //If current feature is color then check the second digit; e.g. 0,1 is warm --> left, 2,3 is cold --> right.
        if (ob.lr_stimulus.charAt(53) == 0 || ob.lr_stimulus.charAt(53) == 1) //e.g. If sceond digit is 0,1 --> warm --> left
        {
            ob.data.correct_response = allowed_keys_road[road_key_index];
            //console.log(ob.data.correct_response)
        }

        else //e.g. If sceond digit is 2,3 --> cold --> right
        {
            ob.data.correct_response = allowed_keys_road[1-road_key_index];
            //console.log(ob.data.correct_response)
        }

    }

    else //If current feature is shape
    {
    //If current feature is shape then check the third digit; e.g. 0,1 is round --> left, 2,3 is edge --> right.

        if (ob.lr_stimulus.charAt(54) == 0 || ob.lr_stimulus.charAt(54) == 1) //e.g. If third digit is 0,1 --> round --> left
        {
            ob.data.correct_response = allowed_keys_road[road_key_index];
            //console.log(ob.data.correct_response)
        }

        else //e.g. If third digit is 2,3 --> edge --> right
        {
            ob.data.correct_response = allowed_keys_road[1-road_key_index];
            //console.log(ob.data.correct_response)
        }

    }
};

for (i = 0; i < lr_stimuli_TS2.length; i++) {
    var ob = lr_stimuli_TS2[i];
    ob.data.feature = lr_feature_list[1-feature_index];
    ob.allowed_keys = allowed_keys_mountain;

    if (ob.data.feature == 'color') //If current feature is color
    {

    //If current feature is color then check the second digit; e.g. 0,1 is warm --> up, 2,3 is cold --> down.
        if (ob.lr_stimulus.charAt(53) == 0 || ob.lr_stimulus.charAt(53) == 1) //e.g. If sceond digit is 0,1 --> warm --> up
        {
            ob.data.correct_response = allowed_keys_mountain[mountain_key_index];
            //console.log(ob.data.correct_response)
        }

        else //e.g. If sceond digit is 2,3 --> cold --> down
        {
            ob.data.correct_response = allowed_keys_mountain[1-mountain_key_index];
            //console.log(ob.data.correct_response)
        }

    }

    else //If current feature is shape
    {
    //If current feature is shape then check the third digit; e.g. 0,1 is round --> up, 2,3 is edge --> down.

        if (ob.lr_stimulus.charAt(54) == 0 || ob.lr_stimulus.charAt(54) == 1) //e.g. If third digit is 0,1 --> round --> up
        {
            //correct_response = up
            ob.data.correct_response = allowed_keys_mountain[mountain_key_index];
            //console.log(ob.data.correct_response)
        }

        else //e.g. If third digit is 2,3 --> edge --> down
        {
            //correct_response = down
            ob.data.correct_response = allowed_keys_mountain[1-mountain_key_index];
            //console.log(ob.data.correct_response)
        }

    }
};

var lr_stimuli_complete = lr_stimuli_TS1.concat(lr_stimuli_TS2);
console.log(lr_stimuli_complete);

/*var lr_stimuli_TS1 = [//TS1 based on color; warm left cold right
    { lr_stimulus: repo_site + "img/Stim/TS100.png", data: {feature: 'color', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'leftarrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS101.png", data: {feature: 'color', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'leftarrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS102.png", data: {feature: 'color', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'leftarrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS103.png", data: {feature: 'color', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'leftarrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS110.png", data: {feature: 'color', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'leftarrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS111.png", data: {feature: 'color', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'leftarrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS112.png", data: {feature: 'color', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'leftarrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS113.png", data: {feature: 'color', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'leftarrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS120.png", data: {feature: 'color', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'rightarrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS121.png", data: {feature: 'color', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'rightarrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS122.png", data: {feature: 'color', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'rightarrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS123.png", data: {feature: 'color', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'rightarrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS130.png", data: {feature: 'color', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'rightarrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS131.png", data: {feature: 'color', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'rightarrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS132.png", data: {feature: 'color', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'rightarrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS133.png", data: {feature: 'color', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'rightarrow'}},
];
var lr_stimuli_TS2 = [//TS2 based on shape; round up square down
    { lr_stimulus: repo_site + "img/Stim/TS200.png", data: {feature: 'shape', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'uparrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS201.png", data: {feature: 'shape', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'uparrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS202.png", data: {feature: 'shape', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'downarrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS203.png", data: {feature: 'shape', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'downarrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS210.png", data: {feature: 'shape', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'uparrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS211.png", data: {feature: 'shape', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'uparrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS212.png", data: {feature: 'shape', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'downarrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS213.png", data: {feature: 'shape', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'downarrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS220.png", data: {feature: 'shape', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'uparrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS221.png", data: {feature: 'shape', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'uparrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS222.png", data: {feature: 'shape', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'downarrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS223.png", data: {feature: 'shape', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'downarrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS230.png", data: {feature: 'shape', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'uparrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS231.png", data: {feature: 'shape', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'uparrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS232.png", data: {feature: 'shape', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'downarrow'}},
    { lr_stimulus: repo_site + "img/Stim/TS233.png", data: {feature: 'shape', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'downarrow'}},
];*/


var learning = {
  type: "image-keyboard-response",
  stimulus: jsPsych.timelineVariable('lr_stimulus'),
  data: jsPsych.timelineVariable('data'),
  choices: jsPsych.timelineVariable('allowed_keys'),
  trial_duration: 1500,
  response_ends_trial: true,
  on_finish: function(data){
    data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
    var counter = jsPsych.data.get().filter({TaskType: 'lr'}).select('rt').values.length;
    data.counter = counter;
  }
}


var lr_feedback = {
type: 'image-keyboard-response',
stimulus: function(){
  var last_trial_correct = jsPsych.data.get().filter({TaskType: 'lr'}).last(1).values()[0].correct;
  if(last_trial_correct){
    return repo_site + 'img/Stim/correct.png'
  } else {
    return repo_site + 'img/Stim/incorrect.png'
  }
},
choices: jsPsych.NO_KEYS,
trial_duration: 1000,
}

/* Combine learning trials */
var learning_trial = {
    timeline: [iti_1000, learning, lr_feedback],
    timeline_variables: lr_stimuli_complete,
    sample: {
        type: 'fixed-repetitions',
        size: 4, // 4 repetitions of each trial, 128 total trials, order is randomized.
    }
};
//timeline.push(learning_trial)


/* -----Attention Bonus Check----- */
var attention_bonus_check = {
    type: 'survey-html-form',
    preamble: '<p> This is an attention check question. If you answered these questions correctly, you will get bonus payment.</p>',
    html: '<p> The four possible correct response keys are <input name="first" type="text" /> <input name="second" type="text" /> <input name="third" type="text" /> <input name="fourth" type="text" />. </p> ',
    autofocus: 'test-resp-box',
    required: true
};
//timeline.push(attention_bonus_check); interleave this?


/* -----Payment Inclusion----- */
var Q0_options = ['1 and 2', '3 and 4','All of the above'];
var multi_choice_Q0 = {
    type: 'survey-multi-choice',
    button_label: 'Next',
    preamble: '<p> You have finished the Gemstone Expedition! <br> Please answer a few questions about the rules of the game. </p>',
    questions: [
        { prompt: '<p> The possible correct response keys are <br> 1. Up <br> 2. Down <br> 3. Left <br> 4. Right </p>', name: 'Q0', options: Q0_options, required: true, horizontal: false },
    ],
};
timeline.push(multi_choice_Q0);

/* -----A Few Q on Rules----- */
var FR_Q1 = {
    type: 'survey-text',
    questions: [
    {prompt: '<p> When you were playing the game, what determined the correct response to a gem? <br> Please describe in as much detail as you can. <br> If you are not sure, please share your best guess.</p>', name: FR_Q1, rows: 5, columns: 80, required: true},
  ],
};
timeline.push(FR_Q1);


var confidence = {
    type: 'html-slider-response',
    stimulus: '<p>On a scale of 1-5, how confident are you in your answer to the last question? <br> Adjust the slider bar to indicate your answer.</p>',
    labels: ['Not confident 0', '1','2','3','4','Confident 5'],
    min: 0,
    max: 5,
    slider_start: 3,
};
timeline.push(confidence);

var yn_options = ["Definitely No","Maybe No","Maybe Yes","Definitely Yes" ];
var multi_choice_Q2 = {
    type: 'survey-multi-choice',
    button_label: 'Next',
    preamble: 'Please answer a few questions regarding the rules of the game.',
    questions: [
        { prompt: "<p> Did the same thing determine the correct response to each gem on the mountain and the road? <br> </p>", name: 'Q2', options: yn_options, required: true, horizontal: false },
    ],
};
timeline.push(multi_choice_Q2);


var FR_Q2 = {
    type: 'survey-text',
    preamble: '<p> Please answer a few questions regarding the rules of the game. </p>',
    questions: [
        { prompt: '<p> What determined the correct response to a gem when you were on the mountain? <br> Please describe in as much detail as you can. <br> If you are not sure, please share your best guess. </p> ',name: FR_Q2, rows: 5, columns: 80, required: true}
    ],
};
timeline.push(FR_Q2);

timeline.push(confidence);

var FR_Q3 = {
    type: 'survey-text',
    preamble: '<p> Please answer a few questions regarding the rules of the game. </p>',
    questions: [
        { prompt:  '<p> What determined the correct response to a gem when you were on the road? <br> Please describe in as much detail as you can. <br> If you are not sure, please share your best guess.</p> ',name: FR_Q3, rows: 5, columns: 80, required: true}
    ],
};
timeline.push(FR_Q3);

timeline.push(confidence);


var Q3P1_options = ["The color of the gems", "The shape of the gems"];
var multi_choice_Q3 = {
    type: 'survey-multi-choice',
    button_label: 'Next',
    preamble: 'Now, we will ask you to pick between different options to see how you learned the rules of the game.',
    questions: [
        { prompt: "<p> What determined the correct response to a gem when you were on the mountain? <br> If you do not know for sure, please make your best guess.</p>", name: 'Q3P1', options: Q3P1_options, required: true },
    ],
};
timeline.push(multi_choice_Q3);
timeline.push(confidence);

var multi_choice_Q4 = {
    type: 'survey-multi-choice',
    button_label: 'Next',
    preamble: 'Now, we will ask you to pick between different options to see how you learned the rules of the game.',
    questions: [
        { prompt: "<p>What determined the correct response to a gem when you were on the road? <br> If you do not know for sure, please make your best guess.</p>", name: 'Q4P1', options: Q3P1_options, required: true },
    ],
};
timeline.push(multi_choice_Q4);
timeline.push(confidence);

var feature = lr_feature_list[feature_index];

var option1_road_key = allowed_keys_road[road_key_index];
var option2_road_key = allowed_keys_road[1-road_key_index];

var option1_mountain_key = allowed_keys_mountain[mountain_key_index];
var option2_mountain_key = allowed_keys_mountain[1-mountain_key_index];

console.log(feature)
console.log(option1_road_key)
console.log(option1_mountain_key)

if (feature == 'color') //If current feature is color
    {
        var Q5P1_options = [`If the gem was warm-tones (yellow or orange), press ${option1_road_key}. If the gem was cool-toned (light or dark blue), press ${option2_road_key}.`,
            `If the gem was warm-tones (yellow or orange), press ${option2_road_key}. If the gem was cool-toned (light or dark blue), press ${option1_road_key}.`];
        var Q6P1_options =[`If the gem was round (circle or oval), press +${option1_mountain_key}+. If the gem had straight edges (square or rounded square), press ${option2_mountain_key}.`,
            `If the gem was round (circle or oval), press ${option2_mountain_key}. If the gem had straight edges (square or rounded square), press +${option1_mountain_key}+.`]
    }
else {
    var Q5P1_options =[`If the gem was round (circle or oval), press ${option1_road_key}. If the gem had straight edges (square or rounded square), press ${option2_road_key}.`,
        `If the gem was round (circle or oval), press ${option2_road_key}. If the gem had straight edges (square or rounded square), press ${option1_road_key}.`];
    var Q6P1_options = [`If the gem was warm-tones (yellow or orange), press ${option1_mountain_key}. If the gem was cool-toned (light or dark blue), press ${option2_mountain_key}.`,
        `If the gem was warm-tones (yellow or orange), press ${option2_mountain_key}. If the gem was cool-toned (light or dark blue), press ${option1_mountain_key}.`];
    };


var multi_choice_Q5 = {
    type: 'survey-multi-choice',
    button_label: 'Next',
    preamble: '',
    questions: [
        { prompt: "<p> What were the rules of the game when you were on the road? <br> If you do not know for sure, please make your best guess.</p>", name: 'Q5P1', options: Q5P1_options, required: true },
    ],
};
timeline.push(multi_choice_Q5);
timeline.push(confidence);

var multi_choice_Q6 = {
    type: 'survey-multi-choice',
    button_label: 'Next',
    preamble: '',
    questions: [
        { prompt: "<p>What were the rules of the game when you were on the mountain? <br> If you do not know for sure, please make your best guess.</p>", name: 'Q6P1', options: Q6P1_options, required: true },
    ],
};
timeline.push(multi_choice_Q6);
timeline.push(confidence);

/* -----Demographics----- */
var DemoQ1_options = ["Male", "Female", "Gender Non-conforming", "Other", "Choose not to respond"];
var DemoQ2_options = ["Under 18", "18-24", "25-34", "35-44", "45-54", "55-64", "65-74", "75-84", "85 or older"];
var DemoQ3_options = ["Hispanic/Latino", "Not Hispanic/Latino", "Choose not to respond"];
var DemoQ4_options = ["American Indian/Native American","White", "Black/African American", "Asian", "Native Hawaiian or Pacific Islander", "More than one race", "Other","Choose not to respond"];
var DemoQ5_options = ["Less than a high school diploma", "High school degree or equivalent (e.g. GED)", "Some college, no degree", "Associate degree (e.g. AA, AS)", "College degree", "Master's degree (e.g. MA, MS, MEd)", "Doctorate or professional degree (e.g. MD, DDS, PhD)"];


var multi_choice_Demo = {
    type: 'survey-multi-choice',
    button_label: 'Next',
    preamble: 'Please answer some further questions on demographics.',
    questions: [
        { prompt: "What is your gender?", name: 'DemoQ1', options: DemoQ1_options, required: true },
        { prompt: "What is your age?", name: 'DemoQ2', options: DemoQ2_options, required: true },
        { prompt: "What is your Ethnicity?", name: 'DemoQ3', options: DemoQ3_options, required: true },
        { prompt: "How would you describe yourself? Please select all that apply.", name: 'DemoQ4', options: DemoQ4_options, required: true },
        { prompt: "What is the highest degree or level of school you have completed?", name: 'DemoQ5', options: DemoQ5_options, required: true },
    ],
};
timeline.push(multi_choice_Demo);

var interaction_data = jsPsych.data.getInteractionData();
jsPsych.data.checks = interaction_data;


function save_data_csv() {
    jQuery.ajax({
        type: 'post',
        cache: false,
        url: save_url,
        data: {
            data_dir: data_dir,
            file_name: file_name + '.csv', // the file type should be added
            exp_data: jsPsych.data.get().csv()
        }
    });
}


jsPsych.init({
    timeline: timeline,
    display_element: 'display_stage',
    preload_images: preload_list,
    on_finish: function () {
        save_data_csv();
    }
});

/*jsPsych.init({
    timeline: timeline,
    preload_images: preload_list,
    on_finish: function(){
      var csv = jsPsych.data.get().csv();
      var filename = 'gem_test_00.csv';
      downloadCSV(csv, filename);
      jsPsych.data.displayData()}
});*/
