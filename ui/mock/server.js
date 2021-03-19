import { createServer } from 'miragejs';

createServer({
    routes() {
        this.get('/api/user', () => {});
        this.get('/api/comments', () => {
            return [
                {
                    name: 'htdfloucvmrst_1',
                    text: 'Lorem_1',
                },
                {
                    name: 'htdfloucvmrst_2',
                    text: 'Lorem_2',
                },
                {
                    name: 'htdfloucvmrst_3',
                    text: 'Lorem_3',
                },
                {
                    name: 'htdfloucvmrst_4',
                    text: 'Lorem_4',
                },
                {
                    name: 'htdfloucvmrst_5',
                    text: 'Lorem_5',
                },
                {
                    name: 'htdfloucvmrst_6',
                    text: 'Lorem_6',
                },
            ];
        });

        this.get('/api/films', () => [
            { id: '1', name: 'Карты, деньги, два ствола' },
            { id: '2', name: 'Большой куш' },
            { id: '3', name: 'Рок н рольщик' },
            { id: '4', name: 'Холодное сердце' },
            { id: '5', name: 'Как я встретил вашу маму' },
            { id: '6', name: 'Полетчик' },
            { id: '7', name: 'Летчик' },
            { id: '8', name: 'Космонавт' },
            { id: '9', name: 'Вулкан' },
            { id: '10', name: 'Эверест' },
            { id: '11', name: 'Калькутта' },
            { id: '12', name: 'Карпаты' },
        ]);

        this.get('/api/film', () => {
            return {
                title: {
                    title: 'Большой куш',
                    review: `Четырехпалый Френки должен был переправить краденый
                алмаз из Англии в США своему боссу Эви, но, сделав
                ставку на подпольный боксерский поединок, попадает в
                круговорот весьма нежелательных событий. Вокруг него
                и его груза разворачивается сложная интрига с
                участием множества колоритных персонажей лондонского
                дна — русского гангстера, троих незадачливых
                грабителей, хитрого боксера и угрюмого громилы
                грозного мафиози. Каждый норовит в одиночку сорвать
                большой куш.`,
                    photo: '',
                },
                rating: {
                    rating: '8.6',
                    views: '375 595',
                },
                review: {
                    year: {
                        analogue: 'Год',
                        value: '2000',
                    },
                    city: {
                        analogue: 'Город',
                        value: 'Великобритания, США',
                    },
                    genre: {
                        analogue: 'Жанр',
                        value: 'криминал, комедия, боевик',
                    },
                    slogan: {
                        analogue: 'Слоган',
                        value: '«Stealing stones is hazardous»',
                    },
                    director: {
                        analogue: 'Режиссер',
                        value: 'Гай Ричи',
                    },
                    scenario: {
                        analogue: 'Сценарист',
                        value: 'Гай Ричи',
                    },
                    producer: {
                        analogue: 'Продюсер',
                        value: 'Мэттью Вон, Майкл Дрейер, Стефен Маркс, ...',
                    },
                    operator: {
                        analogue: 'Оператор',
                        value: 'Тим Морис-Джонс',
                    },
                    composer: {
                        analogue: 'Композитор',
                        value: 'Джон Мерфи',
                    },
                    painter: {
                        analogue: 'Художник',
                        value:
                            'Хуго Луцык-Выховский, Джули Филпотт, Верити Хоукс, ...',
                    },
                    mounting: {
                        analogue: 'Монтаж',
                        value: 'Джон Харрис',
                    },
                    budget: {
                        analogue: 'Бюджет',
                        value: '$10 000 000',
                    },
                    feesUs: {
                        analogue: 'Собрал в США',
                        value: '$30 328 156',
                    },
                    feesWorld: {
                        analogue: 'Собрал в мире',
                        value: '+ $53 229 716 = $83 557 872',
                    },
                    watchers: {
                        analogue: 'Просмотров',
                        value:
                            'США5.6 млн, Великобритания2.8 млн, Франция575.7 тыс, ...',
                    },
                    premiereRf: {
                        analogue: 'Премьера в РФ',
                        value: '10 мая 2001, «Каскад фильм»',
                    },
                    premiereWorld: {
                        analogue: 'Премьера в Мире',
                        value: '23 августа 2000, ...',
                    },
                    releaseRf: {
                        analogue: 'Релиз в РФ',
                        value: '30 августа 2001, «Columbia/Sony»',
                    },
                    releaseDvd: {
                        analogue: 'Релиз DVD',
                        value: '29 октября 2009, «Columbia/Sony»',
                    },
                    age: {
                        analogue: 'Допустимый возраст',
                        value: '16+',
                    },
                    reitingMPAA: {
                        analogue: 'Рейтинг MPAA',
                        value: 'R',
                    },
                    time: {
                        analogue: 'Время',
                        value: '104 мин. / 01:44',
                    },
                },
            };
        });
    },
});
