import {Box, Typography} from '@mui/material'
import {BaseAccordionItem} from '@/components/base/Accordion/BaseAccordionItem'

export const BaseAccordion = ({id = '', title, items = []}) => {

    return (
        <Box
            id={id}
            sx={{
                scrollMarginTop: '150px',
                padding: {xs: '18px 10px 20px', sm: '50px 30px'},
            }}
        >
            <Typography variant="h2" sx={{fontSize: '32px', fontWeight: 500, color: 'var(--red)', marginBottom: '20px'}}>{title}</Typography>

            <Box>
                {items.map((item) => <BaseAccordionItem key={item.id} {...item}/>)}
            </Box>

        </Box>
    )
}
