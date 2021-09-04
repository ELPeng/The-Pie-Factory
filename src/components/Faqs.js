import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Faqs(){

    // const useStyles = makeStyles((theme) => ({
    //     heading: {
    //         fontSize: theme.typography.pxToRem(18),
    //         fontWeight: theme.typography.fontWeightBold,
    //     },
    //     tabStyle: {
    //         padding: "10px 0",
    //         backgroundColor="#c2b59b",
    //     }
    //   }));
    // const classes = useStyles();
    return(
        <>
            <div className="page-banner">
                <h2>Frequently Asked Questions</h2>
            </div>
            <div className="main-page">
                <Accordion className="acc-btn">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                        <p className="page-text">How do I place an order?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="acc-text">
                            Orders MUST be in by 12:00 noon, the day before scheduled delivery. Late orders or un-scheduled deliveries may incur extra delivery charges. Call for more information.
                        </p>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="acc-btn">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header">
                        <p className="page-text">Does the Pie Factory have pies available for same day walk-ins?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="acc-text">
                            Yes, but our selection of pies that we have on hand is very limited. If you have a specific pie you would like, please call the day before and we will make it fresh for you!
                        </p>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="acc-btn">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header">
                        <p className="page-text">Does the Pie Factory sell to retail customers?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="acc-text">
                            Yes, but we highly recommend calling in at least one day prior to place your order.
                        </p>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="acc-btn">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content">
                        <p className="page-text">Does the Pie Factory deliver?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="acc-text">
                            We do not offer deliveries to residential or non-wholesale customers unless the orders are particularly large.
                        </p>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="acc-btn">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5a-content"
                    id="panel5a-header">
                        <p className="page-text">Does the Pie Factory sell to retail customers</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="acc-text">
                            Orders MUST be in by 12:00 noon, the day before scheduled delivery. Late orders or un-scheduled deliveries may incur extra delivery charges. Call for more information.
                        </p>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="acc-btn">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6a-content"
                    id="panel6a-header">
                        <p className="page-text">How do I get quotes or place an order for a specialty cake?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="acc-text">
                            Send us an email with a picture of the cake, the date you need the cake for, how many servings, and any additional customizations and we will send back a price quote.
                        </p>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="acc-btn">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7a-content"
                    id="panel7a-header">
                        <p className="page-text">What forms of payment do you accept?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="acc-text">
                            We accept cash and credit cards (AMEX, Visa, and Discover) as payment.
                        </p>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="acc-btn">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel8a-content"
                    id="panel8a-header">
                        <p className="page-text">Does the Pie Factory make special recipes if I wanted to provide my own recipe?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="acc-text">
                        We try our best to accommodate custom recipes, as long as we believe we can make a good product.
                        </p>
                    </AccordionDetails>
                </Accordion>
        </div>
    </>
    )
}

export default Faqs