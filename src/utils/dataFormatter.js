import store from '../redux/store';

const formatDate = (d) =>
    d.toString().replace(/\w+ (\w+) (\d+) (\d+).*/, '$2-$1-$3');

function nFormatter(num, digits = 1) {
    const lookup = [
        { value: 1, symbol: '' },
        { value: 1e3, symbol: 'k' },
        { value: 1e6, symbol: 'M' },
        { value: 1e9, symbol: 'G' },
        { value: 1e12, symbol: 'T' },
        { value: 1e15, symbol: 'P' },
        { value: 1e18, symbol: 'E' },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
        .slice()
        .reverse()
        .find(function (item) {
            return num >= item.value;
        });
    return item
        ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
        : '0';
}

function dataFormatter(data, col) {
    const apps = store.getState().apps;
    switch (col) {
        case 'Date':
            return formatDate(new Date(data?.date)) ?? '';
        case 'App':
            return (
                apps.find((app) => app?.app_id === data?.app_id)?.app_name ?? ''
            );
        case 'Clicks':
            return nFormatter(data?.clicks) ?? '--';
        case 'Ad Requests':
            return nFormatter(data?.requests) ?? '--';
        case 'Ad Response':
            return nFormatter(data?.responses) ?? '--';
        case 'Impression':
            return nFormatter(data?.impressions) ?? '--';
        case 'Revenue':
            return (
                `$${nFormatter(Math.round(data?.revenue * 100) / 100)}` ?? '--'
            );
        case 'Fill Rate':
            return (
                `${
                    Math.round((data?.requests / data?.responses) * 1000) / 10
                }%` ?? '--'
            );
        case 'CTR':
            return (
                `${
                    Math.round((data?.clicks / data?.impressions) * 1000) / 10
                }%` ?? '--'
            );

        default:
            console.log(data, col);
            return '--';
    }
}

export default dataFormatter;
