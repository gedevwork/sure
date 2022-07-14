import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircleIcon from '@mui/icons-material/Circle';
import instructionsConfig from '../../constants/instructions';
import ReactMarkdown from 'react-markdown';
import { ComponentProps } from 'react';

const markdownComponents: ComponentProps<typeof ReactMarkdown>['components'] = {
  p: ({ node, ...props }) => (
    <Typography
      {...props}
      sx={{ '&:not(:last-of-type)': { marginBottom: '16px' } }}
    />
  ),
  ul: ({ node, ordered, ...props }) => <List {...props} />,
  li: ({ node, ordered, children, ...props }) => (
    <ListItem
      alignItems="flex-start"
      sx={{ paddingTop: 0, paddingBottom: 0 }}
      {...props}
    >
      <ListItemIcon sx={{ marginTop: '11px', minWidth: '20px' }}>
        <CircleIcon sx={{ fontSize: '8px' }} />
      </ListItemIcon>
      <ListItemText>{children}</ListItemText>
    </ListItem>
  ),
  code: ({ node, inline, ...props }) => (
    <code style={{ color: 'orange' }} {...props} />
  ),
  a: ({ node, ...props }) => <Link target="_blank" {...props} />,
};

function Instructions() {
  return (
    <>
      {instructionsConfig.map(({ title, label }, i) => (
        <Accordion defaultExpanded={i === 0} key={title}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ReactMarkdown components={markdownComponents}>
              {label}
            </ReactMarkdown>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}

export default Instructions;
