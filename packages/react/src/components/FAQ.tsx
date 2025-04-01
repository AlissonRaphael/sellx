import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

type FAQType = {
  question: string,
  answer: string,
}

interface FAQProps {
  faqs: FAQType[]
}

export default function FAQ({ faqs }: FAQProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => <AccordionItem value={`item-${index}`}>
        <AccordionTrigger className='items-center group'>
          <div className='flex justify-start items-center'>
            <div className='text-2xl font-light bg-gradient-to-b from-gray-800 to-gray-400 text-transparent bg-clip-text group-hover:from-gray-100 transition duration-150'>
              {`${index+1}`.padStart(2, "0")}
              </div>
            <div className="pl-4 text-base text-gray-300">
              {faq.question}
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-2 text-base text-justify indent-8 text-gray-500">
          {faq.answer}
        </AccordionContent>
      </AccordionItem>)}
    </Accordion>
  )
}
