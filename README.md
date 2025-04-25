<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>✨ Project Sparkle ✨</title>
    <link href="assets/css/styles.css" rel="stylesheet" />
  </head>

  <body class='cats'>
    <header>
      <h1>🌙 ✨ Project Sparkle ✨ 🌙</h1>
      <p>Welcome to your <strong>Flora NeoPixel</strong> adventure! 🌈✨🎉</p>
    </header>
    <!-- 🌟 WHAT YOU NEED SECTION 🌟 -->
    <section>
      <h2>🌟 What You Need 🌟</h2>
      <p>Before you start, make sure you have the following:</p>
      <ul>
        <li><strong>Microcontroller</strong> (e.g., the Flora itself) ⚡</li>
        <li><strong>Flora NeoPixel Strip</strong> (or a single Flora NeoPixel) 🌈</li>
        <li><strong>Jumper Wires</strong> 🔌</li>
      </ul>
    </section>
    <!-- ⚙️ Step 1: Wiring Setup ⚙️ -->
    <section class="step">
      <details>
        <summary>⚙️ Step 1: Wiring the Flora NeoPixel ⚙️</summary>
        <p>Time to wire up your <strong>Flora NeoPixel</strong>:</p>
        <ol>
          <li>
            <strong>Connect the Flora NeoPixel</strong> using jumper wires:
            <ul>
              <li><strong>Data Pin</strong>: Pin A1 on Flora (super important!)</li>
              <li><strong>Power (VCC)</strong>: 5V (like, a <em>proper</em> power source)</li>
              <li><strong>Ground (GND)</strong>: GND (keep it grounded! ⚡)</li>
            </ul>
          </li>
          <li>Your setup should look like this:</li>
          <img src="https://cdn-learn.adafruit.com/assets/assets/000/069/730/large1024/led_pixels_cpx_alligatorclips.jpg?1548106119"
               alt="Flora NeoPixel Wiring Diagram"
               style="max-width: 100%; height: auto;" />
        </ol>
      </details>
    </section>
    <!-- 🌈 Step 2: Install the Adafruit NeoPixel Library 🌈 -->
    <section class="step emoji-cursor">
      <details id="step2">
        <summary>🔥 Step 2: Install the Adafruit NeoPixel Library 🌈</summary>
        <p>Here’s how to install the magic behind the colors:</p>
        <ol>
          <li>Open up the <strong>Arduino IDE</strong> and get ready to code.</li>
          <li>Go to <strong>Sketch > Include Library > Manage Libraries</strong> to search for "<strong>Adafruit NeoPixel</strong>".</li>
          <li>Click <strong>Install</strong> and feel the magic begin!</li>
        </ol>
        <p><a href="https://www.arduino.cc/en/software/" class="button">Get the IDE HERE</a></p>
      </details>
    </section>
    <!-- 💡 Step 3: Load Example Code 💡 -->
    <section class="step cats">
      <details>
        <summary>💡 Step 3: Load the Example Code ✨</summary>
        <p>Now let's load the <strong>strandtest</strong> example from the NeoPixel library:</p>
        <ol>
          <li>Open your <strong>Arduino IDE</strong> and let’s rock this!</li>
          <li>Go to <strong>File > Examples > Adafruit NeoPixel > strandtest</strong> for a pre-configured magic script.</li>
        </ol>
        <!-- Displaying the Code for Colorful Lights -->
        <pre><code>
#include &lt;Adafruit_NeoPixel.h&gt;

#define PIN        6  // Pin to control NeoPixels
#define NUMPIXELS  16  // Total number of NeoPixels in the strip

Adafruit_NeoPixel strip(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);  // Initialize the NeoPixel strip

void setup() {
  strip.begin();  // Initialize the NeoPixel strip
  strip.show();   // Show the initial state (turned off)
}

void loop() {
  // Loop through all pixels, lighting them up with red color
  for (int i = 0; i &lt; strip.numPixels(); i++) {
    strip.setPixelColor(i, strip.Color(255, 0, 0)); // Red color
    strip.show();  // Update the strip to show the new color
    delay(50);  // Wait for a short time (50ms) before lighting up the next pixel
  }
}
        </code></pre>
      </details>
    </section>
    <!-- 🚀 Step 4: Upload and Run 🚀 -->
    <section class="step">
      <details>
        <summary>🚀 Step 4: Upload & Run 🚀</summary>
        <p>Let’s send that magic into the universe! 🌌✨</p>
        <ol>
          <li>Connect your Arduino via USB cable (feel the energy flow!).</li>
          <li>Select your board and port in <strong>Tools</strong> > <strong>Board</strong>.</li>
          <li>Click <strong>Upload</strong> and watch the lights come to life! 🎉</li>
        </ol>
      </details>
    </section>
    <!-- 🎉 Congratulations! 🎉 -->
    <section class="step">
      <details>
        <summary>🎉 Congratulations! 🎉</summary>
        <p>You’ve made it! Your <strong>Flora NeoPixel</strong> strip is now glowing! 🌈✨</p>
      </details>
    </section>
    <!-- 🛠️ Next Steps 🛠️ -->
    <section class="step">
      <details>
        <summary>🌈 Next Steps 🌙</summary>
        <ul>
          <li>Change the color to <strong>green</strong> and watch the magic unfold! <code>strip.Color(0, 255, 0)</code></li>
          <li>Try creating animations and have your strip <em>dance</em> in patterns! 💃</li>
        </ul>
      </details>
    </section>
    <!-- 🧰 Troubleshooting Tips 🧰 -->
    <section class="step">
      <details>
        <summary>🌟 Troubleshooting Tips 🌟</summary>
        <ul>
          <li><strong>No lights?</strong> Double-check your wiring. Are the jumper wires in the right spots? 🧐</li>
          <li><strong>Blurry color?</strong> Ensure you’re using a proper 5V power supply. 💡</li>
        </ul>
      </details>
    </section>
    <!-- 🛠️ Code Tips 🛠️ -->
    <h2 class="shimmer-text">✨ Code Tips for Newbies! ✨</h2>
    <p>Let’s get your code glowing:</p>

    <!-- 🔧 Change Color 🔧 -->
    <section class="step">
      <details>
        <summary>🔧 Changing the Color 🎨</summary>
        <p>Modify RGB values to change the light color. You can try this:</p>
        <pre><code>
strip.setPixelColor(pixel, strip.Color(red, green, blue));  // Set color based on RGB values
        </code></pre>
        <p>Example: Try green <code>strip.setPixelColor(i, strip.Color(0, 255, 0));</code></p>
      </details>
    </section>
    <!-- 💡 Adjust Brightness 💡 -->
    <section class="step">
      <details>
        <summary>💡 Adjusting the Brightness</summary>
        <p>Want your lights to dim or brighten? Use <code>strip.setBrightness(value)</code>:</p>
        <pre><code>
strip.setBrightness(128);  // 50% brightness (set to 255 for full brightness)
        </code></pre>
      </details>
    </section>
    <!-- 📏 Adjust Pixel Count 📏 -->
    <section class="step">
      <details>
        <summary>📏 Set the Number of Pixels</summary>
        <p>Adjust the <code>NUMPIXELS</code> value to suit your setup:</p>
        <pre><code>
#define NUMPIXELS 10  // Set this to the number of pixels in your strip
        </code></pre>
      </details>
    </section>
    <footer class="footer">
      <p>🎉 You're ready to create your own dazzling light show! 🌟💫</p>
      <p>Now go forth and light up the world like the bright star you are! ✨</p>
      <p>Need more ideas? Just ask for more code fun! 😄</p>
    </footer>

    <!-- JS at the end for better performance -->
    <script src="assets/js/cats.js"></script>
    <script src="assets/js/mouse.js"></script>
    <script src="assets/js/confetti.js"></script>
    <script src="assets/js/expandEffect.js"></script>
  </body>
</html>
