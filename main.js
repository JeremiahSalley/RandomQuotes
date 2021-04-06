const quoteButton = document.getElementById('quoteButton')
const quoteButton1 = document.getElementById('quoteButton1')
const quoteButton2 = document.getElementById('quoteButton2')
const quoteButton3 = document.getElementById('quoteButton3')
const close = document.getElementById('close')
const modalContainer = document.getElementById('modalContainer')


const entrepreneursQuotes = [
    '"All our dreams can come true, if we have the courage to pursue them.” – Walt Disney',
    '“The secret of getting ahead is getting started.” – Mark Twain',
    '“I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.” – Michael Jordan',
    '“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.” – Mary Kay Ash',
    '“The best time to plant a tree was 20 years ago. The second best time is now.” – Chinese Proverb',
    '“Only the paranoid survive.” – Andy Grove',
    '“It’s hard to beat a person who never gives up.” – Babe Ruth',
    '“I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.’” – Leah Busque',
    '“If people are doubting how far you can go, go so far that you can’t hear them anymore.” – Michele Ruiz',
    '“We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.” – Arianna Huffington',
]

const motivationalQuotes = [
    '“You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.” ― William W. Purkey',
    '“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”― Neil Gaiman',
    '“Everything you can imagine is real.”― Pablo Picasso',
    '“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.” ― Helen Keller',
    '“Do one thing every day that scares you.”― Eleanor Roosevelt',
    '“It’s no use going back to yesterday, because I was a different person then.”― Lewis Carroll',
    '“Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.” – Socrates',
    '“Do what you feel in your heart to be right – for you’ll be criticized anyway.”― Eleanor Roosevelt',
    '“Happiness is not something ready made. It comes from your own actions.” ― Dalai Lama XIV',
    '“Whatever you are, be a good one.” ― Abraham Lincoln',
]

const hustleQuotes = [
    '“No one is to blame for your future situation but yourself. If you want to be successful, then become “Successful.”― Jaymin Shah',
    '“Things may come to those who wait, but only the things left by those who hustle.”― Abraham Lincoln',
    '“Everything comes to him who hustles while he waits.”― Thomas Edison',
    '“Every sucessful person in the world is a hustler one way or another. We all hustle to get where we need to be. Only a fool would sit around and wait on another man to feed him.” ― K’wan',
    '“Invest in your dreams. Grind now. Shine later.”',
    '“Hustlers don’t sleep, they nap.”',
    '“Greatness only comes before hustle in the dictionary.” – Ross Simmonds',
    '“Without hustle, talent will only carry you so far.” – Gary Vaynerchuk',
    '“Work like there is someone working twenty four hours a day to take it away from you.” – Mark Cuban',
    '“Hustle in silence and let your success make the noise.”',
]
const successQuotes = [
    '“Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.” – Pele',
    '“Would you like me to give you a formula for success? It’s quite simple, really: Double your rate of failure. You are thinking of failure as the enemy of success. But it isn’t at all. You can be discouraged by failure or you can learn from it, so go ahead and make mistakes. Make all you can. Because remember that’s where you will find success.” – Thomas J. Watson',
    '“Every champion was once a contender that didn’t give up.” – Gabby Douglas',
    '“To be a champion, I think you have to see the big picture. It’s not about winning and losing; it’s about every day hard work and about thriving on a challenge. It’s about embracing the pain that you’ll experience at the end of a race and not being afraid. I think people think too hard and get afraid of a certain challenge.” – Summer Sanders',
    'Don’t dream about success. Get out there and work for it.',
    '“The difference between successful people and very successful people is that very successful people say ‘no’ to almost everything.” – Warren Buffett',
    'You can cry, scream, and bang your head in frustration but keep pushing forward. It’s worth it.',
    '“I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.” – Muhammad Ali',
    '“Opportunities don’t happen. You create them.” – Chris Grosser',
    '“Success is liking yourself, liking what you do, and liking how you do it.” – Maya Angelou',
] 


quoteButton.addEventListener('click', ()=>{
    modalContainer.classList.add('show')
    let randomEntrepreneurs = Math.floor(Math.random() * (entrepreneursQuotes.length))
    document.getElementById('quoteDisplay').innerHTML = entrepreneursQuotes[randomEntrepreneurs]
})

quoteButton1.addEventListener('click', ()=>{
    modalContainer.classList.add('show')
    let randomMotivational = Math.floor(Math.random() * (motivationalQuotes.length))
    document.getElementById('quoteDisplay').innerHTML = motivationalQuotes[randomMotivational]
})

quoteButton2.addEventListener('click', ()=>{
    modalContainer.classList.add('show')
    let randomHustle = Math.floor(Math.random() * (hustleQuotes.length))
    document.getElementById('quoteDisplay').innerHTML = hustleQuotes[randomHustle]
})

quoteButton3.addEventListener('click', ()=>{
    modalContainer.classList.add('show')
    let randomSuccess = Math.floor(Math.random() * (successQuotes.length))
    document.getElementById('quoteDisplay').innerHTML = successQuotes[randomSuccess]
})

close.addEventListener('click', () =>{
    modalContainer.classList.remove('show')
})

