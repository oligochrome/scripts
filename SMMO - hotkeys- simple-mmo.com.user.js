// ==UserScript==
// @name        SMMO - hotkeys- simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/SMMO - hotkeys- simple-mmo.com.user.js
// @namespace   - simple-mmo.com -
// @match       https://web.simple-mmo.com/travel
// @grant       none
// @version     1.0.0
// @author      -
// @description 8/9/2022, 7:27:25 PM
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==
// just a start
window.addEventListener('keydown', function(e) {
  if(e.keyCode == 84 && e.target == document.body) {
    window.location.href = "https://web.simple-mmo.com/travel"
  }
});

  // Hotkey mapping object (add more as needed)
  const hotkeys = {
    'Alt+t': () => {
      // Action for Ctrl + A
      window.location.href = "https://web.simple-mmo.com/travel"
    },
    'ctrl+b': () => {
      // Action for Ctrl + B
      console.log("Ctrl + B pressed");
    },
    // Add more hotkeys here...
  };

  // Function to check if a hotkey combination is pressed
  function checkHotkey(event) {
    const { ctrlKey, shiftKey, altKey, metaKey, key } = event;
    const keyCombination = (ctrlKey ? 'ctrl+' : '') + (shiftKey ? 'shift+' : '') + (altKey ? 'alt+' : '') + (metaKey ? 'meta+' : '') + key.toLowerCase();

    if (hotkeys.hasOwnProperty(keyCombination)) {
      hotkeys[keyCombination]();
      event.preventDefault();
    }
  }
const focusedElement = document.activeElement;
    if (focusedElement && (focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'TEXTAREA')) {
      return; // Don't execute hotkey actions if the user is in an input element
    }

  // Attach the event listener to the document
  document.addEventListener('keydown', checkHotkey);

/*
 * backspace	8
tab	9
enter	13
shift	16
ctrl	17
alt	18
pause/break	19
caps lock	20
escape	27
page up	33
Space	32
page down	34
end	35
home	36
arrow left	37
arrow up	38
arrow right	39
arrow down	40
print screen	44
insert	45
delete	46
0	48
1	49
2	50
3	51
4	52
5	53
6	54
7	55
8	56
9	57
a	65
b	66
c	67
d	68
e	69
f	70
g	71
h	72
i	73
j	74
k	75
l	76
m	77
n	78
o	79
p	80
q	81
r	82
s	83
t	84
u	85
v	86
w	87
x	88
y	89
z	90
left window key	91
right window key	92
select key	93
numpad 0	96
numpad 1	97
numpad 2	98
numpad 3	99
numpad 4	100
numpad 5	101
numpad 6	102
numpad 7	103
numpad 8	104
numpad 9	105
multiply	106
add	107
subtract	109
decimal point	110
divide	111
f1	112
f2	113
f3	114
f4	115
f5	116
f6	117
f7	118
f8	119
f9	120
f10	121
f11	122
f12	123
num lock	144
scroll lock	145
My Computer (multimedia keyboard)	182
My Calculator (multimedia keyboard)	183
semi-colon	186
equal sign	187
comma	188
dash	189
period	190
forward slash	191
open bracket	219
back slash	220
close braket	221
single quote	222
*/