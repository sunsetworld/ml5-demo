let video;
let handPose;
let hands = [];
let badFingerEmoji = "😡";
let happyEmoji = "😊";
let watchEmoji = "⌚️";
let thumbEmoji = "😴";
let indexFingerEmoji = "😂";
let ringFingerEmoji = "😘"
let pinkyFingerEmoji = "😔";
let sizeOfEmoji = 25;

async function setup() {
    createCanvas(640, 480);
    console.log("ml5 version: ", ml5.version);

    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();

    handPose = await ml5.handPose();
    handPose.detectStart(video, gotHands);
}

function gotHands(results) {
    hands = results;
}

function draw() {
    background(220);
    image(video, 0, 0);

    if (hands.length > 0) {
        textSize(sizeOfEmoji);
        badFinger();
        wrist();
        thumb();
        indexFinger();
        ringFinger();
        pinky();
    }
}

function badFinger() {
    let finger1_1 = hands[0].middle_finger_mcp.x;
    let finger1_2 = hands[0].middle_finger_mcp.y;

    let finger2_1 = hands[0].middle_finger_pip.x;
    let finger2_2 = hands[0].middle_finger_pip.y;

    let finger3_1 = hands[0].middle_finger_dip.x;
    let finger3_2 = hands[0].middle_finger_dip.y;

    let finger4_1 = hands[0].middle_finger_tip.x;
    let finger4_2 = hands[0].middle_finger_tip.y;
    noStroke();
    fill(255, 255, 0);
    text(badFingerEmoji, finger1_1, finger1_2);
    text(badFingerEmoji, finger2_1, finger2_2);
    text(badFingerEmoji, finger3_1, finger3_2);
    text(badFingerEmoji, finger4_1, finger4_2);
}

function wrist() {
    let bling1 = hands[0].wrist.x;
    let bling2 = hands[0].wrist.y;

    noStroke();
    fill(255, 255, 0);
    text(watchEmoji, bling1, bling2);
}

function thumb() {
    let finger1_1 = hands[0].thumb_cmc.x;
    let finger1_2 = hands[0].thumb_cmc.y;

    let finger2_1 = hands[0].thumb_mcp.x;
    let finger2_2 = hands[0].thumb_mcp.y;

    let finger3_1 = hands[0].thumb_ip.x;
    let finger3_2 = hands[0].thumb_ip.y;

    let finger4_1 = hands[0].thumb_tip.x;
    let finger4_2 = hands[0].thumb_tip.y;
    noStroke();
    fill(255, 255, 0);
    text(thumbEmoji, finger1_1, finger1_2);
    text(thumbEmoji, finger2_1, finger2_2);
    text(thumbEmoji, finger3_1, finger3_2);
    text(thumbEmoji, finger4_1, finger4_2);
}

function indexFinger(){
    let finger1_1 = hands[0].index_finger_mcp.x;
    let finger1_2 = hands[0].index_finger_mcp.y;

    let finger2_1 = hands[0].index_finger_pip.x;
    let finger2_2 = hands[0].index_finger_pip.y;

    let finger3_1 = hands[0].index_finger_dip.x;
    let finger3_2 = hands[0].index_finger_dip.y;

    let finger4_1 = hands[0].index_finger_tip.x;
    let finger4_2 = hands[0].index_finger_tip.y;
    noStroke();
    fill(255, 255, 0);
    text(indexFingerEmoji, finger1_1, finger1_2);
    text(indexFingerEmoji, finger2_1, finger2_2);
    text(indexFingerEmoji, finger3_1, finger3_2);
    text(indexFingerEmoji, finger4_1, finger4_2);
}

function ringFinger(){
    let finger1_1 = hands[0].ring_finger_mcp.x;
    let finger1_2 = hands[0].ring_finger_mcp.y;

    let finger2_1 = hands[0].ring_finger_pip.x;
    let finger2_2 = hands[0].ring_finger_pip.y;

    let finger3_1 = hands[0].ring_finger_dip.x;
    let finger3_2 = hands[0].ring_finger_dip.y;

    let finger4_1 = hands[0].ring_finger_tip.x;
    let finger4_2 = hands[0].ring_finger_tip.y;
    noStroke();
    fill(255, 255, 0);
    text(ringFingerEmoji, finger1_1, finger1_2);
    text(ringFingerEmoji, finger2_1, finger2_2);
    text(ringFingerEmoji, finger3_1, finger3_2);
    text(ringFingerEmoji, finger4_1, finger4_2);
}

function pinky() {
    let finger1_1 = hands[0].pinky_finger_mcp.x;
    let finger1_2 = hands[0].pinky_finger_mcp.y;

    let finger2_1 = hands[0].pinky_finger_pip.x;
    let finger2_2 = hands[0].pinky_finger_pip.y;

    let finger3_1 = hands[0].pinky_finger_dip.x;
    let finger3_2 = hands[0].pinky_finger_dip.y;

    let finger4_1 = hands[0].pinky_finger_tip.x;
    let finger4_2 = hands[0].pinky_finger_tip.y;
    noStroke();
    fill(255, 255, 0);
    text(pinkyFingerEmoji, finger1_1, finger1_2);
    text(pinkyFingerEmoji, finger2_1, finger2_2);
    text(pinkyFingerEmoji, finger3_1, finger3_2);
    text(pinkyFingerEmoji, finger4_1, finger4_2);
}
