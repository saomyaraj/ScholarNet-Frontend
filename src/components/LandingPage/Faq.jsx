import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../ui/accordion"
  

function Faq() {
  return (
    <>
    <Accordion type="single" collapsible style={{gap:"20px", color:"white", font:"20px", marginBottom:"10px"}}>
  <AccordionItem value="item-1">
    <AccordionTrigger>What is ScholarNet</AccordionTrigger>
    <AccordionContent>
    ScholarNet is a platform that allows researchers to share their work, collaborate with others, and engage in discussions.    </AccordionContent>
  </AccordionItem>
  <AccordionItem value='item-2'>
    <AccordionTrigger>How can I join ScholarNet?</AccordionTrigger>
    <AccordionContent>
    You can join ScholarNet by creating an account on our website.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value = 'item-3'>
    <AccordionTrigger>Is ScholarNet free to use?</AccordionTrigger>
    <AccordionContent>
    Yes, ScholarNet is free to use for all registered users.

    </AccordionContent>
  </AccordionItem>
  <AccordionItem  value = 'item-4'>
    <AccordionTrigger>How can I share my research on ScholarNet?
    </AccordionTrigger>
    <AccordionContent>
    You can share your research on ScholarNet by uploading your papers to the platform.

    </AccordionContent>
  </AccordionItem>
    </Accordion>
    </>

  )
}

export default Faq