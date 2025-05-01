---
layout: default
title: workshop
permalink: /workshop/
---
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>✨ Project Sparkle ✨</title>
  <link href="{{ '/assets/css/styles.css' | relative_url }}" rel="stylesheet" />
</head>

<body class="cats">

  <!-- Main Header -->
<header class="navbar">
  <div class="logo">✨ Lila James</div>
  <nav id="nav-links" class="nav-links">
    <a href="/sparkle_workshop/">Home</a>
    <a href="/sparkle_workshop/about/">About</a>
    <a href="/sparkle_workshop/lessons/">Lessons</a>
    <a href="/sparkle_workshop/contact/">Contact</a>
  </nav>
  <div class="hamburger" onclick="toggleMenu()">🍔</div>
</header>

<section class="step" style="margin-top: 3em; max-width: 800px; margin-left: auto; margin-right: auto; padding: 2em; background: #fff8fc; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.08); font-family: 'Helvetica Neue', sans-serif;">

  <h2 style="text-align: center; font-size: 2em; color: #6a1b9a; margin-bottom: 0.5em;">🏡 Host a Project Sparkle Workshop at Home</h2>

  <p style="text-align: center; font-size: 1.1em; color: #444; max-width: 620px; margin: 0 auto 1.5em;">
    Bring the magic of Project Sparkle right to your home. These immersive, high-touch creative tech + fashion workshops are perfect for birthdays, after-school enrichment, summer adventures, or weekend inspiration.
  </p>

  <ul style="list-style: none; padding: 0; font-size: 1em; color: #333; line-height: 1.6;">
    <li><strong>👥 Group Size:</strong> 1 to 7 students</li>
    <li><strong>⏱ Session Length:</strong> 2 hours</li>
    <li><strong>🗓 Flexible Scheduling:</strong> Weekday afternoons or weekends</li>
    <li><strong>💎 Premium Pricing:</strong>
      <ul style="margin-top: 0.5em; margin-bottom: 0.5em; padding-left: 1.5em;">
        <li>$250 for 1–2 students</li>
        <li>$350 for 3–4 students</li>
        <li>$450 for 5–7 students</li>
      </ul>
    </li>
    <li><strong>📦 All materials & wearable tech provided</strong> — tailored to your child’s interests. Just bring your curiosity!</li>
  </ul>

  <p style="margin-top: 1em; font-size: 1em; color: #555;">
    Each session is personalized and led by a seasoned engineer, artist, and educator. I travel throughout NYC and nearby areas. A single workshop teaches students how to sew a circuit, learn programming basics, and includes guided online enrichment. Multi-session packages are available for larger projects.
  </p>

  <hr style="margin: 2.5em 0; border: none; border-top: 1px solid #eee;">

  <h3 style="text-align: center; font-size: 1.5em; color: #6a1b9a;">✨ Book Your Workshop</h3>
  <p style="text-align: center; font-size: 1em; color: #666;">
    Fill out the form below and I’ll be in touch shortly to personalize your Sparkle session!
  </p>

  <form action="mailto:lilaresearch@gmail.com" method="POST" enctype="text/plain" style="margin-top: 2em;">
    <label for="name" style="display: block; margin-bottom: 0.5em; font-weight: bold;">Name</label>
    <input type="text" name="Name" id="name" required style="width: 100%; padding: 0.6em; border: 1px solid #ccc; border-radius: 8px; margin-bottom: 1.2em;">
    <label for="email" style="display: block; margin-bottom: 0.5em; font-weight: bold;">Email</label>
    <input type="email" name="Email" id="email" required style="width: 100%; padding: 0.6em; border: 1px solid #ccc; border-radius: 8px; margin-bottom: 1.2em;">
    <label for="subject" style="display: block; margin-bottom: 0.5em; font-weight: bold;">Subject</label>
    <input type="text" name="Subject" id="subject" required style="width: 100%; padding: 0.6em; border: 1px solid #ccc; border-radius: 8px; margin-bottom: 1.2em;">
    <label for="message" style="display: block; margin-bottom: 0.5em; font-weight: bold;">Message</label>
    <textarea name="Message" id="message" rows="6" required style="width: 100%; padding: 0.6em; border: 1px solid #ccc; border-radius: 8px; margin-bottom: 2em;"></textarea>
    <div style="text-align: center;">
      <button type="submit" style="background: linear-gradient(135deg, #00bcd4, #8e24aa); color: white; border: none; padding: 0.8em 1.8em; border-radius: 12px; font-weight: bold; font-size: 1.1em; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: transform 0.2s;">
        ✨ Send Workshop Request ✨
      </button>
    </div>
  </form>
</section>


<script src="{{ site.baseurl }}/assets/js/cats.js"></script>
<script src="{{ site.baseurl }}/assets/js/mouse.js"></script>
<script src="{{ site.baseurl }}/assets/js/confetti.js"></script>
<script src="{{ site.baseurl }}/assets/js/expandEffect.js"></script>

</body>
