import { useState } from 'react'

function TradesList() {
    // useState to set the state of this component (NB this MUST be the first thing)
    const [trades, setTrades] = useState([
        { id: 0, mgr: 'Ethel', qty: 100000, price: 3.99, ticker: 'MSFT' },
        { id: 1, mgr: 'Marg', qty: 2000, price: 2.99, ticker: 'CITI' },
        { id: 2, mgr: 'Floella', qty: 4000, price: 34.60, ticker: 'NVID' },
        { id: 3, mgr: 'Winnie', qty: 80000, price: 1.99, ticker: 'MSFT' },
    ])

    // event handlers and other function

    const blotter = trades.map((t) => {

        // return whatever we need to render iteratively
        return (
            // the <> is called a 'fragment' it lets us ensure there is ONE container tag
            // very often it is a list, but ANY tag an be iterated 

            <li key={t.id}  >
                Trade: ticker {t.ticker} mgr: {t.mgr} price: {t.price} qty: {t.qty}
            </li>

        )
    })

    // the TradeList compoent needs to retrun some visual content
    return (
        <>
            <h3>Trades</h3>
            <ul>
                {blotter}
            </ul>
        </>
    )

}
export default TradesList