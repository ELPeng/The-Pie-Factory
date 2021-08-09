import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function Faqs(){
    const btns = document.querySelectorAll('.question-btn')
    console.log(btns)

    return(
        <>
            <div className="page-banner">
                <h2>Frequently Asked Questions</h2>
            </div>
            <div className='main-page'>
                <article className="question">
                    <div className="question-title">
                        <p className="page-text"><b>How do I place an order?</b></p>
                        <IconButton className="show-btn">
                            <KeyboardArrowDownIcon />
                        </IconButton>
                        <IconButton className="hide-btn">
                            <KeyboardArrowUpIcon />
                        </IconButton>

                    </div>
                    <div className="question-text">
                        <p >Please call (713) 666-8501 to place your order. You may pick up your order at our location, 5611 Bellaire Blvd. Suite 128, Houston, TX 77081. Orders MUST be in by 12:00 noon, the day before scheduled delivery. Late orders or un-scheduled deliveries may incur extra delivery charges. Call for more information.</p>
                    </div>

                </article>

                
                <p className="page-text"><b>How do I place an order?</b></p>
                <p className="page-text">Orders MUST be in by 12:00 noon, the day before scheduled delivery. Late orders or un-scheduled deliveries may incur extra delivery charges. Call for more information.</p>
                <p className="page-text"><b>How do I place an order?</b></p>
                <p className="page-text">Orders MUST be in by 12:00 noon, the day before scheduled delivery. Late orders or un-scheduled deliveries may incur extra delivery charges. Call for more information.</p>
                <p className="page-text"><b>How do I place an order?</b></p>
                <p className="page-text">Orders MUST be in by 12:00 noon, the day before scheduled delivery. Late orders or un-scheduled deliveries may incur extra delivery charges. Call for more information.</p>
            </div>
    </>
    )
}

export default Faqs