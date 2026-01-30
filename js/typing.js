const text = `
Hey you ❤️

I don’t know when exactly it happened…
but somewhere between our random talks,
our silly fights,
and those quiet moments where nothing needed to be said,
you became my favorite part of every day.

With you, even ordinary moments feel special.
Your presence feels like home,
your smile feels like comfort,
and your love feels like something I never want to lose.

You’ve seen me at my best and my messiest,
and still chose to stay.
That means more to me than you’ll ever know.

So today, with all my heart,
with all my love,
and with a very shy but hopeful smile…

I want to ask you something special 💖

Will you be my Valentine? 🌸
`;

let i = 0;
const speed = 45; // typing speed (lower = faster)

function typeLetter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML +=
      text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
    i++;
    setTimeout(typeLetter, speed);
  }
}

typeLetter();