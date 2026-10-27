<script lang="ts">
  import CaseStudies from './lib/CaseStudies.svelte'
  import Coach from './lib/Coach.svelte'
  import Comparison from './lib/Comparison.svelte'
  import Faq from './lib/Faq.svelte'
  import FinalCta from './lib/FinalCta.svelte'
  import Hero from './lib/Hero.svelte'
  import Nav from './lib/Nav.svelte'
  import Program from './lib/Program.svelte'
  import Form from "./lib/Form.svelte";
  import BeforeAfter from "./lib/BeforeAfter.svelte";
</script>

<Nav />
<main>
  <Hero />
  <Comparison />
  <Form />

  <Program />
  <BeforeAfter />
  <Coach />
  <Faq />
  <FinalCta />
</main>
