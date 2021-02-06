const TEXTBOX_HEIGHT = 100;
const TEXTBOX_PADDING_X = 10;
const TEXTBOX_PADDING_Y = 10;

const TEXTBOX_FONT_SIZE = 20;

let img_ch = [];
let ch_dict = {};

let txt_file;
let txt_now_index = 0;

function preload() {
  txt_file = loadStrings('Assets/Text.txt');

  // load character images
  for (let i = 0; i < 3; i++) {
    img_ch[i] = loadImage("Assets/Character0" + (i + 1) + ".png");
  }

}

function setup() {
  createCanvas(960, 540);

  // init character names
  ch_dict['청이'] = 0;
  ch_dict['어머니'] = 1;
  ch_dict['석이'] = 2;
}

function draw() {
  background(220);

  let now_line = txt_file[txt_now_index];
  if (now_line != null) {
    let seperated_line = now_line.split(':');
    if (seperated_line.length == 1) {
      drawTextbox(seperated_line[0]);
    } else {
      let character_num = ch_dict[seperated_line[0]];
      drawCharacter(character_num);
      drawTextbox(seperated_line[1]);
    }
  }
}

function mousePressed() {
  if (txt_file[txt_now_index + 1] != null) {
    txt_now_index++;
  }
}

function drawCharacter(ch_index) {
  imageMode(CENTER);

  if (ch_index < img_ch.length) {
    image(img_ch[ch_index], width * 0.5, height * 0.5, img_ch[ch_index].width * 0.5, img_ch[ch_index].height * 0.5);
  }
}

function drawTextbox(contents) {
  let text_box_x = TEXTBOX_PADDING_X;
  let text_box_y = height - TEXTBOX_HEIGHT - TEXTBOX_PADDING_Y;
  let text_box_w = width - TEXTBOX_PADDING_X * 2;
  let text_box_h = TEXTBOX_HEIGHT;

  // customize textbox
  fill(0, 80);
  noStroke();
  rect(text_box_x, text_box_y, text_box_w, text_box_h);

  // text contents 
  fill(255);
  textSize(TEXTBOX_FONT_SIZE);
  textAlign(CENTER, TOP);
  text(contents, text_box_x, text_box_y, text_box_w, text_box_h);
}