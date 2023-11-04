


const SecData = ({ohlcData}) => {
    return (
        <div>
        <h2 className="text-slate-900">Live OHLC Data:</h2>
        <ul>
            {ohlcData.map((dataPoint, index) => {
                const textColorClass = dataPoint.open > dataPoint.close ? 'text-red-600' : 'text-green-600';

                return (
                    <li key={index} className="ohlc-item">
                        <span className={`ohlc-text ${textColorClass}`}>
                            Open: {dataPoint.open}, Low: {dataPoint.low}, 
                            High: {dataPoint.high}, Close: {dataPoint.close}
                        </span>
                    </li>
                );
            })}
        </ul>
    </div>
    );
};

export default SecData;   