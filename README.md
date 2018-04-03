# KIDR Learning Skipper

This is a script code for skipping KIRD learning contents.

If you run the source code, it automatically selects menu on the left and generates an event that sends the pre-entered learning time.

# How to use

1. Login http://cyber.kird.re.kr

2. Go to the target page (학습하기)

3. open developer tool (Press F12 in Chrome browser)

4. Go to the console tab and copy and paste skipper.js code.

# Causion

If this code is not work edit these variables

```
interval
p_studytime
```

**interval** is a variable for waiting the page loading. If you increase this value, it would be safer but slower. On the contrary, if you decrease this value, it is fast but can cause errors.

**p_studytime** is a variable that means the learning time. If this value not big enough to skip a target, it is not work for the target.