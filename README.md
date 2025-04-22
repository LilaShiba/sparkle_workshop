<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Link to external CSS file -->
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<header>
  <h1>🌙 Flora NeoPixel Tutorial for Arduino 🌟</h1>
  <p>Welcome to your <strong>Flora NeoPixel</strong> adventure! 🌈✨ Let’s get your <strong>Flora NeoPixel</strong> glowing with Arduino! 🎉</p>
</header>

<h2>🌟 What You Need 🌟</h2>
<p>Before you start, make sure you have the following:</p>
<ul>
  <li><strong>Microcontroller</strong> (e.g., the Flora itself) ⚡</li>
  <li><strong>Flora NeoPixel Strip</strong> (or a single Flora NeoPixel) 🌈</li>
  <li><strong>Jumper Wires</strong> 🔌</li>
  <li><strong>Breadboard</strong> (optional but helpful) 🛠️</li>
</ul>

<div class="step">
  <details>
    <summary>⚙️ Step 1: Wiring the Flora NeoPixel ⚙️</summary>
    <p>Here’s how to wire up your <strong>Flora NeoPixel</strong>:</p>
    <ol>
      <li><strong>Connect the Flora NeoPixel</strong> to your Arduino using jumper wires:
        <ul>
          <li><strong>Data Pin</strong>: Connect the data pin of the NeoPixel to <strong>Pin A1</strong> on your Flora.</li>
          <li><strong>Power (VCC)</strong>: Connect to <strong>5V</strong> on the Arduino.</li>
          <li><strong>Ground (GND)</strong>: Connect to <strong>GND</strong> on the Arduino.</li>
        </ul>
      </li>
      <li>Your setup should look something like this:</li>
      <img src="https://cdn-learn.adafruit.com/assets/assets/000/069/730/large1024/led_pixels_cpx_alligatorclips.jpg?1548106119" alt="Flora NeoPixel Wiring Diagram" style="max-width: 100%; height: auto;">
    </ol>
  </details>
</div>

<div class="step">
  <details>
    <summary>🔥 Step 2: Install the Adafruit NeoPixel Library 🌈</summary>
    <p>1. Open the <strong>Arduino IDE</strong> (make sure it’s updated).</p>
    <p>2. Go to <strong>Sketch > Include Library > Manage Libraries</strong>.</p>
    <p>3. In the <strong>Library Manager</strong>, search for "<strong>Adafruit NeoPixel</strong>" and click <strong>Install</strong>.</p>
    <p>This library lets us easily control the LEDs! ✨</p>
    <p><a href="https://www.arduino.cc/en/software/" class="button">Get the IDE HERE</a></p>
  </details>
</div>

<div class="step">
  <details>
    <summary>💡 Step 3: Load the Example Code ✨</summary>
    <p>To quickly start lighting up your NeoPixel, we’ll use the <strong>example code</strong> from the Adafruit NeoPixel library:</p>
    <ol>
      <li>Open your <strong>Arduino IDE</strong>.</li>
      <li>Go to <strong>File > Examples > Adafruit NeoPixel > strandtest</strong>.</li>
      <p>This will load the example code that can light up all your NeoPixel LEDs with a rainbow pattern! 🌈✨</p>
    </ol>
    <pre><code>
#include &lt;Adafruit_NeoPixel.h&gt;

#define PIN            6        // Pin where NeoPixel is connected
#define NUMPIXELS      16       // Number of NeoPixels you have

Adafruit_NeoPixel strip(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  strip.begin();               // Initialize the strip
  strip.show();                // Initialize all pixels to 'off'
}

void loop() {
  // Light up each pixel to red
  for(int i=0; i&lt;strip.numPixels(); i++) {
    strip.setPixelColor(i, strip.Color(255,0,0)); // Red color
    strip.show();  // Update the strip
    delay(50);     // Delay between updates
  }
}
    </code></pre>
  </details>
</div>

<div class="step">
  <details>
    <summary>🚀 Step 4: Upload & Run 🚀</summary>
    <p>1. <strong>Connect</strong> your Arduino to your computer via USB.</p>
    <p>2. <strong>Select your board</strong> and <strong>port</strong> under <strong>Tools > Board</strong> and <strong>Tools > Port</strong>.</p>
    <p>3. Hit the <strong>Upload</strong> button (the arrow icon) and watch your NeoPixels light up! 🎇</p>
  </details>
</div>

<div class="step">
  <details>
    <summary>🎉 Congratulations! 🎉</summary>
    <p>You’ve successfully lit up your <strong>Flora NeoPixel</strong> strip! 🌈✨</p>
  </details>
</div>

<div class="step">
  <details>
    <summary>🌈 Next Steps 🌙</summary>
    <ul>
      <li>Try changing the <strong>color</strong> to <strong>green</strong> (<code>strip.Color(0, 255, 0)</code>) or <strong>blue</strong> (<code>strip.Color(0, 0, 255)</code>).</li>
      <li>Experiment with different <strong>animations</strong> to make your lights dance! 💃</li>
    </ul>
  </details>
</div>

<div class="step">
  <details>
    <summary>🌟 Troubleshooting Tips 🌟</summary>
    <ul>
      <li><strong>No lights?</strong> Double-check your wiring! Make sure the NeoPixel strip is connected properly to power (VCC), ground (GND), and the data pin.</li>
      <li><strong>Blurry color?</strong> Ensure you're using a <strong>5V power source</strong> for your NeoPixels.</li>
    </ul>
  </details>
</div>

<h2>Commands</h2>
<p>Here are some common commands to control your NeoPixel setup, such as changing colors, adjusting brightness, and setting the number of pixels.</p>

<div class="step">
  <details>
    <summary>🔧 Changing the Color 🎨</summary>
    <p>To change the color of the LEDs, you can adjust the <strong>RGB</strong> values in the <code>strip.setPixelColor()</code> function:</p>
    <pre><code>
strip.setPixelColor(pixel, strip.Color(red, green, blue));
    </code></pre>
    <p>For example, to make the NeoPixels glow <strong>green</strong>, change the line:</p>
    <pre><code>
strip.setPixelColor(i, strip.Color(255,0,0)); // Red color
    </code></pre>
    <p>to:</p>
    <pre><code>
strip.setPixelColor(i, strip.Color(0,255,0)); // Green color
    </code></pre>
  </details>
</div>

<div class="step">
  <details>
    <summary>💡 Adjusting the Brightness</summary>
    <p>You can control the brightness of the NeoPixels using <code>strip.setBrightness()</code>. This function takes a value from <strong>0</strong> (off) to <strong>255</strong> (full brightness).</p>
    <p>For example, to set the brightness to <strong>50%</strong>:</p>
    <pre><code>
strip.setBrightness(128);  // Set brightness to 50%
    </code></pre>
  </details>
</div>

<div class="step">
  <details>
    <summary>📏 Setting the Number of Pixels</summary>
    <p>You can easily change the number of NeoPixels you’re using by modifying the <strong>NUMPIXELS</strong> variable:</p>
    <pre><code>
#define NUMPIXELS      10  // Number of NeoPixels you have
    </code></pre>
  </details>
</div>

<div class="footer">
  <p>🎉 You're ready to create your own light show with the Flora NeoPixel! 🌟💫</p>
  <p>Now go forth and light up the world like the dazzling star you are! 🌟✨</p>
  <p>Let me know if you want more fun examples! 😄</p>
</div>

</body>
</html>
