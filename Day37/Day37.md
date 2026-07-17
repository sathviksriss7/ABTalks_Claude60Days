# Day 37

## Prompt

You are an expert educational game designer, UI/UX designer, organizational consultant and frontend developer.

Before generating anything, ask the user ONE question:

"What type of workplace would you like to explore?"

Options: Tech Company, Startup, Corporate Office, Café / Restaurant, Retail Business, Hospital / Healthcare, School / University, Manufacturing, Media / Creative Agency, Freelancer / Small Business, Other (one sentence).

Wait for the user's answer.

Then generate a beautiful single-file HTML application called: Task Compass

Subtitle:
Learn how work flows through real organizations.

IMPORTANT

Generate ONLY one self-contained HTML file.

Use only: HTML, CSS, Vanilla JavaScript.

Do NOT use: React, Tailwind, npm, Babel, external libraries or APIs.

Everything must work completely offline.

Internally verify there are no syntax or runtime errors before returning the code.

OBJECTIVE

The goal is NOT to test job titles.

The goal is to teach: ownership, delegation, collaboration, escalation and how work moves through organizations.

The experience should feel like a management simulation rather than a quiz.

GAMEPLAY

The application contains THREE stages.

Each stage becomes slightly more realistic.

Display progress throughout.

STAGE 1

Who Owns This? (do 3 questions of this only)

Display one realistic workplace task at a time.

Example:

"A customer reports that payments fail only on iPhones."

Present 6-8 role cards.

Examples for a tech company: Frontend Developer, Backend Developer, QA Engineer, Product Manager, UX Designer, Customer Support, Engineering Manager.

The player drags ONE role into the highlighted ownership slot.

After submission reveal:

✓ Primary Owner

✓ Why they own it

✓ Which roles may assist.

Never simply say Correct or Wrong.

Always explain the reasoning.

Include 8-10 different task cards.

STAGE 2

Task Routing (do 3 questions of this only)

Now the player manages incoming work.

A task appears.

The player must build the workflow.

Example:

Customer Support ↓ QA ↓ Backend ↓ Product Manager ↓ Customer

The player drags role cards into the correct order.

Some tasks may only need three steps.

Others may need five.

After submission animate the task moving through the organization.

Explain why this order is commonly used.

STAGE 3

Collaboration Challenge (do 3 questions of this only)

Present larger situations.

Examples:

Customer satisfaction suddenly drops

Sales increase dramatically

Negative reviews appear online

A major feature is delayed.

Instead of choosing one owner, allow players to assign up to FOUR departments or roles.

The player should think about collaboration.

After submission display:

Primary Owner

Supporting Teams

Reasoning

Possible Communication Flow.

Emphasize that complex problems usually require multiple people.

SCORING

Instead of points, award understanding.

Categories:

Ownership

Delegation

Collaboration

Workflow Thinking.

Display a radar or bar chart at the end using only HTML, CSS and JavaScript.

FINAL REFLECTION

Instead of a score, generate:

What you understood well

Where you tended to over-assign responsibility

Where you underestimated collaboration

One insight about how organizations actually work.

Example:

"Many real workplace problems are solved by teams rather than individuals."

Avoid absolute language.

GAME FEEL

The experience should feel satisfying.

Use:

drag-and-drop

animated cards

smooth transitions

satisfying snap animations

subtle sounds using CSS/JS only if possible (optional)

hover effects

progress indicator

completion celebration.

Avoid making it feel like an exam.

It should feel like a modern strategy game.

DESIGN

Premium modern UI.

Dark mode.

Glassmorphism.

Rounded cards.

Animated gradients.

Distinct colors for each department.

Role cards should feel collectible.

Task cards should resemble work tickets.

Use icons or emojis where appropriate.

TECHNICAL REQUIREMENTS

Store all scenarios in JavaScript objects.

Reuse components wherever possible.

Optimize code size for Claude Free.

If necessary, reduce the number of scenarios instead of reducing functionality.

Everything must remain offline.

Before returning:

Verify drag-and-drop works.

Verify scoring works.

Verify animations work.

Verify no syntax errors.

Verify responsive layout.

Return ONLY the complete HTML inside one code block.

## Response

I'm planning a single-file HTML app called "Task Compass" with a café and restaurant theme, featuring ten different roles like Barista, Server, Chef, Kitchen Manager, Host, Dishwasher, Restaurant Manager, Owner, Delivery Coordinator, and Cashier. The app will have three stages with three questions each for a total of nine tasks, along with scoring, a radar chart visualization, and a reflection component. Now I'm working through the role definitions to flesh out the character profiles.
For the first stage, I'm designing "Who Owns This?" tasks where players drag-and-drop to assign primary ownership and supporting roles to different restaurant scenarios. I'm creating eight to ten task cards in the data array so the game can randomly select three per playthrough for replayability—examples include handling a cold soup complaint (Server as primary, Chef and Kitchen Manager assisting), troubleshooting an espresso machine (Barista primary, Restaurant Manager assisting), and managing a guest waiting past their reservation (Host/Hostess primary, with Server and Restaurant Manager supporting).
I'm working through the card details now, including scenarios like missing takeout items, upset guests with untouched dishes, and floor safety hazards. I'm also reconsidering role assignments where the existing job titles don't perfectly fit the task—like floor cleanliness, which might make more sense for a Busser role that isn't in the current list, so I'm adjusting to assign it to either Dishwasher or Restaurant Manager depending on what makes the most sense contextually. Now I'm mapping out the workflow for different customer scenarios—like a custom latte order flowing from server through barista to delivery, or a steak complaint that needs to loop back through the kitchen manager and chef before the server can satisfy the customer. I'm also considering how a delivery app order gets routed through the cashier and kitchen with minimal handoffs. Steps 6 continues with Kitchen Manager and Cashier handling the menu update. For the collaboration challenge, I'm setting up scenarios where a Restaurant Manager leads with supporting roles like Server, Chef, Host, and Kitchen Manager, each with specific reasoning for how they'd communicate and collaborate to solve problems like satisfaction drops, service delays, and handling surge demand from new partnerships.
I'm finalizing a consistent set of eight roles to use across all stages: Server, Barista, Chef, Kitchen Manager, Host, Dishwasher, Restaurant Manager, and Cashier. This keeps the drag-and-drop pool consistent so users see the same role options throughout, though I might filter to the most relevant ones per stage.
Now I'm setting up the scoring system to track how well players assign responsibilities across four dimensions: Ownership, Delegation, Collaboration, and Workflow Thinking. For each stage, I'll measure how close their answer is to the ideal assignment and identify patterns like over-assigning responsibility or underestimating the need for collaboration. I'll track raw stats across all three stages—correct ownership picks, order accuracy for delegation, and role overlap for collaboration—then compute the four radar scores. Ownership is straightforward (stage1 correctness), Delegation comes from stage2 ordering accuracy, and Collaboration measures how well the player matched the ideal supporting roles in stage3, accounting for both over-assignment and under-assignment patterns.
For the implementation, I'm building a single HTML file with vanilla JavaScript using HTML5 drag-and-drop events for desktop, plus a click-to-select fallback for mobile and touch devices. I'll implement both approaches to handle desktop and mobile seamlessly. Now I'm structuring the HTML with a header, progress tracking, and stage screens. Since the user already chose the café setting in our conversation,

No JS errors through a full playthrough. Let me check the key screenshots.Looking solid. Let me do a quick mobile-viewport check since it's a chat game likely opened on phones too.Mobile layout holds up well. Everything checks out — no JS errors, drag-and-drop and tap-to-place both work, all three stages flow correctly, and the radar chart, reflection, and confetti render on completion. Moving the file to outputs.**Task Compass — Café/Restaurant edition** is ready. It's a fully offline single HTML file (drag it into any browser, no internet needed):

- **Stage 1 – Who Owns This?** 3 randomly drawn café tickets (from a pool of 8), drag or tap a role into the ownership slot, then see the reasoning plus who typically assists.
- **Stage 2 – Task Routing** — build 3-to-5-step handoff chains (e.g. a sent-back steak: Server → Kitchen Manager → Chef), with an animated reveal comparing your route to the common one.
- **Stage 3 – Collaboration Challenge** — bigger scenarios (a brunch rush, a food-cost spike) where you pick up to 4 roles, then see the primary owner, supporting cast, and communication flow.
- Ends with a **radar chart** across Ownership / Delegation / Collaboration / Workflow Thinking, plus a reflection on where you over-assigned, where collaboration ran thin, and a closing insight — all rendered in a dark, coffee-house-inspired UI with order-ticket-styled cards.

I ran it through a full headless-browser playthrough (drag-and-drop, tap fallback, all three stages, radar chart, confetti) with zero JS errors, and checked both desktop and mobile layouts.

[Task Compass - Cafe](task-compass-cafe.html)

## Screenshot

![alt text](image.png)

![alt text](image-1.png)

![alt text](image-2.png)

![alt text](image-3.png)

![alt text](image-4.png)

![alt text](image-5.png)

![alt text](image-6.png)

![alt text](image-7.png)

![alt text](image-8.png)

![alt text](image-9.png)

![alt text](image-10.png)

![alt text](image-11.png)

![alt text](image-12.png)

![alt text](image-13.png)

![alt text](image-14.png)

![alt text](image-15.png)

![alt text](image-16.png)

![alt text](image-17.png)

![alt text](image-18.png)

![alt text](image-19.png)

![alt text](image-20.png)

![alt text](image-21.png)

![alt text](image-22.png)

![alt text](image-23.png)

![alt text](image-24.png)

![alt text](image-25.png)

![alt text](image-26.png)

![alt text](image-27.png)
