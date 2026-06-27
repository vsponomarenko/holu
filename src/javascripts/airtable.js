import Airtable from "airtable";

const token = 'patao88TMxG7lDffa.235b4ee53eca0b91399abab50f5ba18edcbc53b2f74492ecc98ceed20839cff0';

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: token
});

let base = Airtable.base('app3bOzQdlF9tRPC7');

function getFormatDate (date = '0000-00-00') {
    const [year, month, day] = date.split('-');
    const dayNumber = parseInt(day)
    const monthNumber = parseInt(month)

    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
    ]

    return `${dayNumber} ${months[monthNumber - 1]} ${year}`
}

function getData() {
    return new Promise((resolve, reject) => {
        const content = [];
        base('content')
            .select({maxRecords: 100})
            .firstPage().then((records) => {
                records.forEach((item) => {
                    content.push({
                        id: item.id,
                        title: item.fields['Name'],
                        tags: item.fields['Tags'],
                        type: item.fields['Type content'],
                        image: item.fields['Image'],
                        date: item.fields['Date'],
                        daterus: getFormatDate(item.fields['Date']),
                        link: item.fields['Link'],
                         // новые поля

                        main: item.fields['Main'],
                    })
                })

                resolve(content);
            })
    })
}

export {getData}