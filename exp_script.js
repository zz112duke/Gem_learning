var task_name = "gem_learning";
var sbj_id = "test01";

//you must put your save_data php url here.
var save_url = "https://users.rcc.uchicago.edu/~zz112/exp_data/save_data.php";
var data_dir = task_name;

//my preference is to include the task and sbj_id in the file name
var file_name = task_name + '_' + sbj_id; 

var repo_site = "https://zz112duke.github.io/Gem_learning/";

//Functions

var timeline = [];


var enter_full = {
  type: 'fullscreen',
  fullscreen_mode: true
};
timeline.push(enter_full);


// Give consent
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


var instr_1 = {
  type: 'external-html',
  url: repo_site + "content/instr_1.html",
  cont_btn: 'next',
};
timeline.push(instr_1);

var iti_1000 = {
  type: "image-keyboard-response",
  stimulus: repo_site + "img/Stim/fixation.png",
  choices: jsPsych.NO_KEYS,
  response_ends_trial: false,
  trial_duration: Math.random() * (1500 - 1000) + 1000  //jittered from 1000-1500ms
}


preload_list = ['img/Stim/TS100.png','img/Stim/TS101.png','img/Stim/TS102.png','img/Stim/TS103.png',
'img/Stim/TS110.png','img/Stim/TS111.png','img/Stim/TS112.png','img/Stim/TS113.png','img/Stim/TS120.png',
'img/Stim/TS121.png', 'img/Stim/TS122.png', 'img/Stim/TS123.png', 'img/Stim/TS130.png', 'img/Stim/TS131.png',
'img/Stim/TS132.png', 'img/Stim/TS133.png', 'img/Stim/TS200.png', 'img/Stim/TS201.png', 'img/Stim/TS202.png',
'img/Stim/TS202.png', 'img/Stim/TS203.png', 'img/Stim/TS210.png', 'img/Stim/TS211.png', 'img/Stim/TS212.png',
'img/Stim/TS213.png', 'img/Stim/TS220.png', 'img/Stim/TS221.png', 'img/Stim/TS222.png', 'img/Stim/TS223.png',
'img/Stim/TS230.png', 'img/Stim/TS231.png', 'img/Stim/TS232.png', 'img/Stim/TS233.png', 'img/Stim/fixation.png',
'img/Stim/correct.png', 'img/Stim/incorrect.png']



var debrief = {
    type: "html-keyboard-response",
    stimulus: function () {

        var trials = jsPsych.data.get().filter({ test_part: 'prac' });
        var correct_trials = trials.filter({ correct: true });
        var accuracy = Math.round(correct_trials.count() / trials.count() * 100);
        return "<p>You responded correctly on " + accuracy + "% of the trials.</p>" +
            "<p>Remember that you should respond as accurately as possible. Press any key to move on.</p>";

    }
};
timeline.push(debrief);

var instr_2 = {
    type: 'external-html',
    url: repo_site + "content/instr_2.html",
    cont_btn: 'next',
};
timeline.push(instr_2);


var instr_3 = {
    type: 'external-html',
    url: repo_site + "content/instr_3.html",
    cont_btn: 'next',
};
timeline.push(instr_3);


/* define learning trials */
var lr_stimuli_TS1 = [//TS1 based on color; warm left cold right
    { lr_stimulus: repo_site + "img/Stim/TS100.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'ArrowLeft'}},
    { lr_stimulus: repo_site + "img/Stim/TS101.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'ArrowLeft'}},
    { lr_stimulus: repo_site + "img/Stim/TS102.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'ArrowLeft'}},
    { lr_stimulus: repo_site + "img/Stim/TS103.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'ArrowLeft'}},
    { lr_stimulus: repo_site + "img/Stim/TS110.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'ArrowLeft'}},
    { lr_stimulus: repo_site + "img/Stim/TS111.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'ArrowLeft'}},
    { lr_stimulus: repo_site + "img/Stim/TS112.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'ArrowLeft'}},
    { lr_stimulus: repo_site + "img/Stim/TS113.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'ArrowLeft'}},
    { lr_stimulus: repo_site + "img/Stim/TS120.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'ArrowRight'}},
    { lr_stimulus: repo_site + "img/Stim/TS121.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'ArrowRight'}},
    { lr_stimulus: repo_site + "img/Stim/TS122.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'ArrowRight'}},
    { lr_stimulus: repo_site + "img/Stim/TS123.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'ArrowRight'}},
    { lr_stimulus: repo_site + "img/Stim/TS130.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'ArrowRight'}},
    { lr_stimulus: repo_site + "img/Stim/TS131.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'ArrowRight'}},
    { lr_stimulus: repo_site + "img/Stim/TS132.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'ArrowRight'}},
    { lr_stimulus: repo_site + "img/Stim/TS133.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS1', Scene: 'road', correct_response: 'ArrowRight'}},
];
var lr_stimuli_TS2 = [//TS2 based on shape; round up square down
    { lr_stimulus: repo_site + "img/Stim/TS200.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'ArrowUp'}},
    { lr_stimulus: repo_site + "img/Stim/TS201.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'ArrowUp'}},
    { lr_stimulus: repo_site + "img/Stim/TS202.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'ArrowDown'}},
    { lr_stimulus: repo_site + "img/Stim/TS203.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'ArrowDown'}},
    { lr_stimulus: repo_site + "img/Stim/TS210.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'ArrowUp'}},
    { lr_stimulus: repo_site + "img/Stim/TS211.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'ArrowUp'}},
    { lr_stimulus: repo_site + "img/Stim/TS212.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'ArrowDown'}},
    { lr_stimulus: repo_site + "img/Stim/TS213.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'ArrowDown'}},
    { lr_stimulus: repo_site + "img/Stim/TS220.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'ArrowUp'}},
    { lr_stimulus: repo_site + "img/Stim/TS221.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'ArrowUp'}},
    { lr_stimulus: repo_site + "img/Stim/TS222.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'ArrowDown'}},
    { lr_stimulus: repo_site + "img/Stim/TS223.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'ArrowDown'}},
    { lr_stimulus: repo_site + "img/Stim/TS230.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'ArrowUp'}},
    { lr_stimulus: repo_site + "img/Stim/TS231.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'ArrowUp'}},
    { lr_stimulus: repo_site + "img/Stim/TS232.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'ArrowDown'}},
    { lr_stimulus: repo_site + "img/Stim/TS233.png", data: {test_part: 'test', TaskType: 'lr', lr_TaskSet: 'TS2', Scene: 'mountain', correct_response: 'ArrowDown'}},
];

var lr_stimuli_complete = lr_stimuli_TS1.concat(lr_stimuli_TS2);

var learning = {
  type: "image-keyboard-response",
  stimulus: jsPsych.timelineVariable('lr_stimulus'),
  choices: function(){
  var TS = jsPsych.data.get().filter({TaskType: 'lr'}).select('lr_TaskSet').values;
  if(TS.includes(1)){
    return ['ArrowLeft','ArrowRight']
  } else {
    return ['ArrowDown', 'ArrowUp']
  }
},
  data: jsPsych.timelineVariable('data'),
  trial_duration: 1500,
  on_finish: function(data){
    data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
  }
}


var lr_feedback = {
type: 'image-keyboard-response',
stimulus: function(){
  var last_trial_correct = jsPsych.data.get().filter({TaskType: 'lr'}).last(1).values()[0].correct;
  if(last_trial_correct){
    return 'repo_site + img/Stim/correct.png'
  } else {
    return 'repo_site + img/Stim/incorrect.png'
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

timeline.push(learning_trial)




/*
/!* Combine attention & learning trials *!/
var attention = {
  timeline:[
  {type: "image-keyboard-response",
  stimulus: jsPsych.timelineVariable('at_stimulus'),
  choices: ['h'],
  data: jsPsych.timelineVariable('data'),
  trial_duration: 800,
  on_finish: function(data){

    var at_counter = jsPsych.data.get().filter({TaskType: 'at'}).select('rt').values.length
    var lr_counter = jsPsych.data.get().filter({TaskType: 'lr'}).select('rt').values.length //CHECK!!!
    //console.log('starts here')

    data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
    var rt_mean = jsPsych.data.get().filter({ at_TrialType: 'frequent', key_press: 72 }).select('rt').mean(); //if you change response key, don't forget to search for key code
    var rt_sd = jsPsych.data.get().filter({at_TrialType: 'frequent', key_press: 72}).select('rt').sd();
    data.at_counter = at_counter
    console.log(at_counter)
    data.lr_counter = lr_counter
    data.at_RunningMean = rt_mean
    data.sd = rt_sd
    data.slow = rt_mean+0.75*rt_sd
    data.fast = Math.abs(rt_mean-0.75*rt_sd) //0.8??


    if (at_counter > 3) {
        //see if the last trial was an infrequent trial
        var last_infreq = jsPsych.data.get().filter({TaskType: 'at'}).last(3).select('at_TrialType').values;
        if (last_infreq.includes('infrequent') == true) {
        console.log('there is an infreq')}

        //see if there was an error in the last 3 trials
        var last_correct = jsPsych.data.get().filter({ TaskType: 'at' }).last(3).select('correct').values;
        console.log(last_correct)
        if (last_correct.includes(false) == true){
        console.log('there is an error')}

        var last_rt = jsPsych.data.get().filter({at_TrialType: 'frequent'}).last(3).select('rt').values;
        //console.log(last_rt);
        for (var i = 0; i<3; i++){
         if (last_rt[i] <100) {
           last_rt[i] = true
            }
        };
        if (last_rt.includes(true)) {
         console.log('too fast')};

        var last_lr = jsPsych.data.get().filter({ test_part: 'test' }).last(3).select('TaskType').values;
        console.log(last_lr)

        //calculate trailing RT after the third trial
        var rt_three = jsPsych.data.get().filter({at_TrialType: 'frequent'}).last(3).select('rt').mean();
        data.at_TrailingMean = rt_three

  };

    if (at_counter < 80 || last_infreq.includes('infrequent') || last_correct.includes(false) || last_rt.includes(true) || last_lr.includes('lr')){
        lr_node = 0
    }
    else {   

      if(rt_three >= rt_mean+0.75*rt_sd){
            lr_node = true;
            data.diff = 'slow'
          } else if (rt_three < Math.abs(rt_mean-0.75*rt_sd)){ //0.8??
                lr_node = false;
                data.diff = 'fast'
            }
            else {lr_node = 0}
      }
    }
  },

],
}


var at_test_procedure = {
  timeline: [attention,if_node_1,if_node_2,iti_200],
  timeline_variables: at_stimuli,
  randomize_order: false,
  repetitions: 1
}
timeline.push(at_test_procedure);
*/


/* Payment Inclusion */
var payment_inc = {
    type: 'survey-html-form',
    preamble: '<p> You have finished the game! Please answer a few questions regarding the rules of the game. </p>',
    html: '<p> The correct response key for shapes with <b> gray background </b> is <input name="first" type="text" />. <br> The correct response keys for shapes with <b> blue </b> or <b> green </b> background are <input name = "second" type = "text" /> and <input name="third" type="text" />. </p> ',
    autofocus: 'test-resp-box',
    required: true
};
timeline.push(payment_inc);

/* A Few Q on Rules */
var rules_Q1 = {
    type: 'survey-html-form',
    preamble: '<p> Please answer a few questions regarding the rules of the game. </p>',
    html: '<p> What do you think determined the feedback that you received? <input name="first" type="text" /> </p> ',
    autofocus: 'test-resp-box',
    required: true
};
timeline.push(rules_Q1);


var Q1_options = ["No", "Yes"];
var multi_choice_block1 = {
    type: 'survey-multi-choice',
    button_label: 'Next',
    preamble: 'Please answer a few questions regarding the rules of the game.',
    questions: [
        { prompt: "Do you think the color of the background mattered?", name: 'Q1', options: Q1_options, required: true, horizontal: false },
    ],
};
timeline.push(multi_choice_block1);


var rules_Q2 = {
    type: 'survey-html-form',
    preamble: '<p> Please answer a few questions regarding the rules of the game. </p>',
    html: '<p> What do you think the green and blue backgrounds indicated? <input name = "first" type = "text" /> </p>',
autofocus: 'test-resp-box',
    required: true
};
timeline.push(rules_Q2);


var rules_Q34 = {
    type: 'survey-html-form',
    preamble: '<p> Please answer a few questions regarding the rules of the game. </p>',
    html: '<p> What do you think determined the feedback you received when you saw the green background? <input name = "first" type = "text" /> <br> What do you think determined the feedback you received when you saw the blue background? <input name = "second" type = "text" /> </p>',
    autofocus: 'test-resp-box',
    required: true
};
timeline.push(rules_Q34);


/* Demographics */

var Q1_options = ["Orientation of the black bars", "The space between the black bars (how tight or loose the bars are)"];
var Q2_options = ["Orientation of the black bars", "The space between the black bars (how tight or loose the bars are)"];
var Q3_options = ["AD","BC"];
var Q4_options = ["AD","BC"];
var DemoQ1_options = ["Male", "Female", "Gender Non-conforming", "Other", "Choose not to respond"];
var DemoQ2_options = ["Under 18", "18-24", "25-34", "35-44", "45-54", "55-64", "65-74", "75-84", "85 or older"];
var DemoQ3_options = ["Hispanic/Latino", "Not Hispanic/Latino", "Choose not to respond"];
var DemoQ4_options = ["American Indian/Native American","White", "Black/African American", "Asian", "Native Hawaiian or Pacific Islander", "More than one race", "Other","Choose not to respond"];
var DemoQ5_options = ["Less than a high school diploma", "High school degree or equivalent (e.g. GED)", "Some college, no degree", "Associate degree (e.g. AA, AS)", "College degree", "Master's degree (e.g. MA, MS, MEd)", "Doctorate or professional degree (e.g. MD, DDS, PhD)"];

var multi_choice_block2 = {
    type: 'survey-multi-choice',
    button_label: 'Next',
    preamble: 'Please answer some further questions on the rule.',
    questions: [
        { prompt: "Which following feature do you think determined the feedback you received when you saw the green background?", name: 'Q1', options: Q1_options, required: true, horizontal: false },
        { prompt: "Which following feature do you think determined the feedback you received when you saw the blue background? ", name: 'Q2', options: Q2_options, required: true, horizontal: false },
    ],
};
timeline.push(multi_choice_block2);


var multi_choice_block3 = {
    type: 'survey-multi-choice',
    button_label: 'Next',
    preamble: 'Which choice do you think describes the correct rules when you saw the green background?',
    questions: [
        { prompt: "A. If the orientation of the black bars is tilted toward the right, press X <br> B. If the orientation of the black bars is tilted toward the right, press C <br> C. If the orientation of the black bars is tilted toward the left, press X <br> D. If the orientation of the black bars is tilted toward the left, press C", name: 'Q3', options: Q3_options, required: true, horizontal: false },
    ],
};
timeline.push(multi_choice_block3);


var multi_choice_block4 = {
    type: 'survey-multi-choice',
    button_label: 'Next',
    preamble: 'Which choice do you think describes the correct rules when you saw the blue background?',
    questions: [
        { prompt: "A. If the orientation of the black bars is tilted toward the right, press X <br> B. If the orientation of the black bars is tilted toward the right, press C <br> C. If the orientation of the black bars is tilted toward the left, press X <br> D. If the orientation of the black bars is tilted toward the left, press C", name: 'Q4', options: Q4_options, required: true, horizontal: false },
    ],
};
timeline.push(multi_choice_block4);


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


/*function save_data_csv() {
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
}*/


/*jsPsych.init({
    timeline: timeline,
    display_element: 'display_stage',
    preload_images: preload_list,
    on_finish: function () {
        save_data_csv();
    }
});*/

jsPsych.init({
    timeline: timeline,
    preload_images: preload_list,
    on_finish: function(){
      var csv = jsPsych.data.get().csv();
      var filename = 'gem_test_01.csv';
      downloadCSV(csv, filename);
      jsPsych.data.displayData()}
});