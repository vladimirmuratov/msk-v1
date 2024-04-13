import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const BaseAccordionItem = ({id, question, answer}) => {

    return(
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls={`panel${id}-content`}
                id={`panel${id}-header`}
            >
                <Typography sx={{fontWeight: 500, fontSize: 18}}>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor: 'var(--green)'}}>
                <Typography sx={{fontSize: 18, lineHeight: 1.5, color: '#fff', whiteSpace: 'pre-wrap'}}>{answer}</Typography>
            </AccordionDetails>
        </Accordion>
    )
}
