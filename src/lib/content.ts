// All page copy and links live here so they can be edited in one place.
// Anything marked PLACEHOLDER should be swapped for real details before launch.

export const brand = 'Unweighted' // PLACEHOLDER brand name

// PLACEHOLDER: point this at the application form (Typeform, Calendly, etc.)
export const applyUrl = '#apply'

// PLACEHOLDER: example video until the real VSL is recorded
export const videoUrl = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'

// PLACEHOLDER testimonial: replace with a real client quote
export const heroQuote = {
  text: 'Two years in the gym and I looked exactly the same. One months on the plan and people ask what I changed. Bigger shoulders, bigger arms, and finally some abs.',
  name: 'Daniel R.',
  detail: 'Client for 4 months',
}

export const withoutPlan = [
  'A different workout every week, copied from whoever posted last.',
  'Chest and biceps on repeat while your shoulders and back lag behind.',
  'Same weights, same reps, month after month. Nothing changes in the mirror.',
  'Gym or calisthenics? You pick one and miss what the other does best.',
  'No way to tell if it’s working, so you train harder and hope.',
  'A busy week or a trip, and the whole routine falls apart.',
]

export const withPlan = [
  'One laid-out program: every session, exercise, set and rep written down.',
  'Extra volume where a physique is built: shoulders, back, arms and core.',
  'Loads and reps that climb week by week, so the mirror keeps changing.',
  'Gym lifts for size, calisthenics for shape and control. Each where it works best.',
  'Weekly check-ins with photos and numbers, so you always know it’s working.',
  'A home and travel version of your plan, so a busy week doesn’t cost you progress.',
]

export const phases = [
  {
    weeks: 'Weeks 1–2',
    title: 'Assess',
    text: 'A 1:1 call, progress photos and a strength check to see where you’re starting, what’s lagging and the physique you’re after. Your plan is written from that, not from a template.',
  },
  {
    weeks: 'Weeks 3–8',
    title: 'Build the base',
    text: 'Your gym split and calisthenics work, laid out session by session. Loads and reps climb every week, with extra volume on shoulders, back and arms.',
  },
  {
    weeks: 'Weeks 9–12',
    title: 'Shape',
    text: 'We double down on what’s working: bring up lagging muscles, tighten your conditioning and add a skill like the muscle-up if you want one.',
  },
]

export const included = [
  { title: 'A program built for you', text: 'Every session laid out: lifts, calisthenics, sets, reps and rest.' },
  { title: 'Form reviews in 24 hours', text: 'Send a clip, get specific, frame-by-frame feedback.' },
  { title: 'Direct access to your coach', text: 'Message any time. Real answers, not a support queue.' },
  { title: 'Weekly check-ins', text: 'We review your photos and numbers together and adjust what’s next.' },
]

// PLACEHOLDER case studies: replace with real client results
export const caseStudies = [
  {
    metric: '+4 cm',
    result: 'on his arms in 16 weeks',
    story: 'Spent two years on random programs and looked the same. Followed the plan four days a week and finally saw his arms change.',
    name: 'Marcus T.',
    detail: '34, accountant',
  },
  {
    metric: '16 weeks',
    result: 'to visible abs',
    story: 'Had the muscle but never got lean enough to show it. Built first, then leaned out on schedule, and kept his strength the whole way.',
    name: 'Jonas K.',
    detail: '29, software engineer',
  },
  {
    metric: '−9 kg',
    result: 'and visibly more muscle in 12 weeks',
    story: 'Didn’t know what to do in the gym, so she stuck to the treadmill. Now follows a laid-out plan of lifts and pull-up work and enjoys every session.',
    name: 'Priya S.',
    detail: '38, product manager',
  },
]

// PLACEHOLDER: where the discovery form posts its answers as JSON (Formspree, Getform, your own API).
// Left empty, the form skips sending and just shows the thank-you message.
export const discoveryEndpoint = ''

// Discovery form, step by step. Each pain point carries a reply that acknowledges it, one follow-up question
// with its answers, and the line it adds to the call plan on the last step.
export const painPoints = [
  {
    label: 'I train but don’t look like it',
    reply: 'That’s the most common thing I hear. It almost always comes down to what you train and how you progress it, not how hard you work.',
    question: 'How long have you been training?',
    options: ['Not started yet', 'Under a year', '1 to 3 years', 'Over 3 years'],
    agenda: 'Why your training hasn’t shown up in the mirror yet',
  },
  {
    label: 'Not sure what to train',
    reply: 'With endless programs online all saying something different, being unsure is the reasonable reaction. You need one plan, not more options.',
    question: 'How do you decide what to train now?',
    options: ['Random YouTube or TikTok', 'An app or a PDF', 'I make it up as I go', 'I copy a friend'],
    agenda: 'Exactly what to train, session by session',
  },
  {
    label: 'Gym or calisthenics? I can’t decide',
    reply: 'You don’t have to pick. Weights are the easiest way to add size, and calisthenics builds the shape and control. Your plan uses both.',
    question: 'What can you train with?',
    options: ['A full gym', 'A basic or home gym', 'A pull-up bar and rings', 'Nothing yet'],
    agenda: 'How gym lifts and calisthenics fit together for you',
  },
  {
    label: 'Some muscles won’t grow',
    reply: 'That’s usually a volume or exercise problem, not genetics. Lagging muscles catch up once they get priority in the plan.',
    question: 'What lags behind most?',
    options: ['Shoulders', 'Arms', 'Chest', 'Back'],
    agenda: 'A plan that brings up the muscles that lag',
  },
  {
    label: 'Stuck on a plateau',
    reply: 'A plateau usually means the program stopped changing, not that you’ve hit your limit.',
    question: 'How long have you been stuck?',
    options: ['A few weeks', 'A few months', 'Over a year', 'I’ve lost count'],
    agenda: 'Where your progress stalled, and how to restart it',
  },
  {
    label: 'Can’t get lean enough to see abs',
    reply: 'Definition comes from carrying enough muscle and being lean enough to show it. The order you do those in matters more than most people think.',
    question: 'Where are you right now?',
    options: ['Lean but small', 'Some muscle, some fat', 'Mostly carrying fat', 'Not sure'],
    agenda: 'Whether to build first or lean out first',
  },
  {
    label: 'Hard to stay consistent',
    reply: 'Consistency gets easier with a plan that fits your week and someone who notices when you miss a session.',
    question: 'What usually breaks your streak?',
    options: ['Work or family gets busy', 'I lose motivation', 'I don’t see progress', 'Soreness or injury'],
    agenda: 'How we keep you training when life gets busy',
  },
  {
    label: 'I travel a lot',
    reply: 'Hotel gyms and new schedules break most programs. Your plan comes with a bodyweight version that goes wherever you do.',
    question: 'How often are you away?',
    options: ['A few days a month', 'Every other week', 'Most weeks', 'I live out of a bag'],
    agenda: 'A bodyweight version of your plan for the road',
  },
]

export const triedBefore = ['Training on my own', 'Free programs online', 'An app or a PDF', 'A personal trainer', 'Calisthenics at home']

// `agenda` finishes the sentence “A 12-week plan toward …” on the call plan
export const goals = [
  { label: 'Broader shoulders', agenda: 'broader shoulders and a V-taper' },
  { label: 'Bigger arms', agenda: 'bigger, fuller arms' },
  { label: 'Visible abs', agenda: 'getting lean enough to see your abs' },
  { label: 'More muscle overall', agenda: 'adding visible muscle all over' },
  { label: 'Looking athletic in clothes', agenda: 'an athletic look, in clothes and out of them' },
  { label: 'A muscle-up', agenda: 'your first muscle-up' },
]

export const readiness = ['Ready to start now', 'Interested, but I want to see the plans first', 'Just exploring for now']

export const faqs = [
  {
    q: 'Do I need a gym?',
    a: 'Ideally, yes. The plan uses a regular gym for the lifts that build size fastest, plus a pull-up bar for the calisthenics work. Training at home or on the road for a while? You get a version of the plan for that too.',
  },
  {
    q: 'Why combine the gym and calisthenics?',
    a: 'Each covers what the other misses. Weights make it easy to add load and build size. Calisthenics builds the shoulders, back and core that make a physique look athletic, plus control you can actually show off.',
  },
  {
    q: 'I’m a complete beginner. Is this for me?',
    a: 'Yes. Your plan starts where you are today, even if you’ve never set foot in a gym. You send clips of your lifts and get form feedback, so you learn them properly from day one.',
  },
  {
    q: 'How much time does it take?',
    a: 'Three to five sessions a week, 45 to 60 minutes each, set around the days you actually have.',
  },
  {
    q: 'What does it cost?',
    a: 'Coaching is priced by plan and commitment length. We go through the options on your call, once we know it’s a fit.',
  },
  {
    q: 'What happens after I apply?',
    a: 'You fill in a short application, which takes about two minutes. If it looks like a fit, you book a free call where we map out your first 12 weeks. No pressure and no hard sell.',
  },
]
