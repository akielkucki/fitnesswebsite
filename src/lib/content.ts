// All page copy and links live here so they can be edited in one place.
// Anything marked PLACEHOLDER should be swapped for real details before launch.

export const brand = 'Unweighted' // PLACEHOLDER brand name

// PLACEHOLDER: point this at the application form (Typeform, Calendly, etc.)
export const applyUrl = '#apply'

// PLACEHOLDER: example video until the real VSL is recorded
export const videoUrl = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'

// PLACEHOLDER testimonial: replace with a real client quote
export const heroQuote = {
  text: 'I cancelled my gym membership in week three. Five months later I did my first muscle-up, and I’m stronger now than I ever was under a barbell.',
  name: 'Daniel R.',
  detail: 'Client for 7 months',
}

export const weights = [
  '$50 to $150 a month, whether you show up or not.',
  'Commute, wait for a rack, commute back. A 45-minute session costs you two hours.',
  'Heavy loading grinds on your shoulders, lower back and knees.',
  'Big numbers on the bar, and still no clean pull-up.',
  'Every plateau gets the same fix: add more weight until something breaks.',
  'A trip, a busy week or a closed gym, and progress stops.',
]

export const bodyweight = [
  'A pull-up bar and a set of rings. Under $60, once.',
  'Train at home or in the park in 40 minutes. Nothing to plan around.',
  'Progressions that build up your joints and tendons instead of wearing them down.',
  'Strength you can see and use: muscle-ups, handstands, levers.',
  'Progress through leverage and skill, so there’s always a next step.',
  'Your gym goes wherever you go. No session gets skipped.',
]

export const phases = [
  {
    weeks: 'Weeks 1–2',
    title: 'Assess',
    text: 'A 1:1 call and movement screen to find your current level, weak links and goals. Your program is written from that, not from a template.',
  },
  {
    weeks: 'Weeks 3–8',
    title: 'Build the base',
    text: 'Pull-ups, dips, rows and squats, progressed week by week. This is where strength climbs and muscle starts to show.',
  },
  {
    weeks: 'Weeks 9–12',
    title: 'First skills',
    text: 'Your first real skill goal: a muscle-up, a handstand or a front lever progression, depending on what you came in for.',
  },
]

export const included = [
  { title: 'A program built for you', text: 'Written from your assessment and rewritten as you progress.' },
  { title: 'Form reviews in 24 hours', text: 'Send a clip, get specific, frame-by-frame feedback.' },
  { title: 'Direct access to your coach', text: 'Message any time. Real answers, not a support queue.' },
  { title: 'Weekly check-ins', text: 'We review your numbers together and adjust what’s next.' },
]

// PLACEHOLDER case studies: replace with real client results
export const caseStudies = [
  {
    metric: '0 → 12',
    result: 'strict pull-ups in 10 weeks',
    story: 'Couldn’t hang from a bar for 20 seconds. Now trains in his garage four times a week and hasn’t missed a session.',
    name: 'Marcus T.',
    detail: '34, accountant',
  },
  {
    metric: '16 weeks',
    result: 'to his first muscle-up',
    story: 'Lifted for six years and stalled. Switched to bodyweight and got stronger than he’d ever been, without the shoulder pain.',
    name: 'Jonas K.',
    detail: '29, software engineer',
  },
  {
    metric: '−9 kg',
    result: 'and visibly more muscle in 12 weeks',
    story: 'Cancelled a $120-a-month gym. Trains for 40 minutes in the park before work and finally enjoys it.',
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
    label: 'Gym memberships cost too much',
    reply: 'Fair. You pay every month whether you go or not, and most of that pays for equipment you don’t need.',
    question: 'What do you spend on training right now?',
    options: ['Nothing yet', 'Under $50 a month', '$50 to $150 a month', 'Over $150 a month'],
    agenda: 'Setting up to train at home for under $60, once',
  },
  {
    label: 'No time to get to a gym',
    reply: 'That’s not a discipline problem. The commute and the wait for a rack often take longer than the training.',
    question: 'How much time could you train each week?',
    options: ['Under an hour', '1 to 2 hours', '2 to 3 hours', 'More than 3 hours'],
    agenda: 'A schedule that fits the hours you actually have',
  },
  {
    label: 'Lifting hurts my joints or back',
    reply: 'Pain is worth listening to, not pushing through. Heavy loading is one way to get strong, and for a lot of people it’s the wrong one.',
    question: 'How much is it affecting your training?',
    options: ['Occasional twinges', 'I train around it', 'It keeps me out for weeks', 'I’ve stopped training'],
    agenda: 'Progressions that work around your joints, not through them',
  },
  {
    label: 'Stuck on a plateau',
    reply: 'A plateau usually means the program stopped changing, not that you’ve hit your limit.',
    question: 'How long have you been stuck?',
    options: ['A few weeks', 'A few months', 'Over a year', 'I’ve lost count'],
    agenda: 'Where your progress stalled, and how to restart it',
  },
  {
    label: 'Not sure what to train',
    reply: 'With endless programs online all saying something different, being unsure is the reasonable reaction. You need one plan, not more options.',
    question: 'How do you train at the moment?',
    options: ['Random YouTube videos', 'An app or a PDF', 'I make it up as I go', 'I’m not training yet'],
    agenda: 'Exactly what to train, week by week',
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
    reply: 'Hotel gyms and new schedules break most programs. Bodyweight training goes wherever you do.',
    question: 'How often are you away?',
    options: ['A few days a month', 'Every other week', 'Most weeks', 'I live out of a bag'],
    agenda: 'A routine you can do in a hotel room',
  },
  {
    label: 'The gym intimidates me',
    reply: 'That’s more common than people admit, and it’s a good enough reason to train somewhere else. Your living room has no audience.',
    question: 'What puts you off most?',
    options: ['Feeling watched', 'Not knowing what to do', 'Waiting for equipment', 'The whole atmosphere'],
    agenda: 'A plan you can start at home, with no one watching',
  },
]

export const triedBefore = ['A gym membership', 'A personal trainer', 'Apps or online programs', 'YouTube workouts', 'Training on my own']

// `agenda` finishes the sentence “A 12-week plan toward …” on the call plan
export const goals = [
  { label: 'My first pull-up', agenda: 'your first strict pull-up' },
  { label: 'A muscle-up', agenda: 'your first muscle-up' },
  { label: 'A handstand', agenda: 'a freestanding handstand' },
  { label: 'Visible muscle', agenda: 'building visible muscle' },
  { label: 'Losing fat', agenda: 'losing fat and keeping it off' },
  { label: 'Training without pain', agenda: 'training without pain' },
]

export const readiness = ['Ready to start now', 'Interested, but I want to see the plans first', 'Just exploring for now']

export const faqs = [
  {
    q: 'Do I need any equipment?',
    a: 'A pull-up bar and a pair of gymnastic rings, around $60 in total. Everything else is your body and the floor. If you don’t have either yet, we start with exercises that need nothing at all.',
  },
  {
    q: 'Can you really build muscle without weights?',
    a: 'Yes. Muscle responds to tension and effort, not to where the tension comes from. Calisthenics adds load through leverage: a one-arm push-up is far heavier than a regular one. Your program progresses you the same way a lifter adds plates.',
  },
  {
    q: 'I’m a complete beginner. Is this for me?',
    a: 'Yes. Your plan starts wherever you are today, even if that’s zero pull-ups. Plenty of clients start there.',
  },
  {
    q: 'How much time does it take?',
    a: 'Three to four sessions a week, 30 to 45 minutes each. You train whenever and wherever suits you.',
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
